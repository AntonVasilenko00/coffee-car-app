import React, { useContext, useEffect, useState } from 'react'
import { View, Text, ScrollView, Button } from 'react-native'
import uuid from 'react-native-uuid'
import { UserContext } from '../../App'
import Header from '../components/Header'
import Logo from '../components/Logo'
import styles from '../constants/styles'
import gStyles, { colors } from '../constants/styles'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase'

const baseURL = 'https://api.sampleapis.com/coffee/'

export const Home = ({ navigation }) => {
  const [data, setData] = useState()
  const [active, setActive] = useState('hot')
  const [isLoading, setIsLoading] = useState(true)

  const context = useContext(UserContext)

  useEffect(() => {
    setIsLoading(true)
    fetch(baseURL + active.toLowerCase())
      .then((resp) => resp.json())
      .then((data) => {
        setData(data)
        setIsLoading(false)
      })
      .catch((e) => console.log(e))
  }, [active])

  const addToCart = async (item) => {
    try {
      const docRef = await addDoc(collection(db, 'cart'), {
        uid: context.user.uid,
        item,
      })
      alert(
        'Item added to the cart. If you want to remove it, please, call Sanya +375333070505'
      )
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <ScrollView
      style={{
        backgroundColor: colors.bg,
        flex: 1,
        paddingTop: 30,
      }}
    >
      <View style={{ paddingHorizontal: 20 }}>
        <Logo direction="row" />
      </View>
      <Header setActive={setActive} active={active} />
      {isLoading ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={styles.text}>Loading...</Text>
        </View>
      ) : (
        data.map((el) => (
          <View
            style={{
              margin: 20,
              borderColor: colors.accent,
              borderWidth: 1,
              borderRadius: 10,
              padding: 15,
            }}
            key={uuid.v4()}
          >
            <Text style={styles.text}>{el.title}</Text>
            <Text
              style={{
                ...styles.text,
                fontWeight: '300',
                fontSize: 12,
                marginVertical: 20,
              }}
            >
              {el.description}
            </Text>
            <Text style={{ ...styles.text, fontWeight: '400' }}>
              Индигриенты:
            </Text>
            <View
              style={{ flexDirection: 'row', marginTop: 5, marginBottom: 15 }}
            >
              {el.ingredients.map((eng) => (
                <Text
                  key={uuid.v4()}
                  style={{
                    ...styles.text,
                    fontWeight: '300',
                    fontSize: 14,
                    marginRight: 5,
                    borderColor: colors.accent,
                    borderWidth: 1,
                    padding: 5,
                    paddingHorizontal: 10,
                    borderRadius: 15,
                  }}
                >
                  {eng}
                </Text>
              ))}
            </View>
            <Button
              color={colors.accent}
              title="Add to Cart"
              onPress={() => {
                addToCart(el)
              }}
            />
          </View>
        ))
      )}
    </ScrollView>
  )
}
