import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import Header from '../components/Header'
import Logo from '../components/Logo'
import styles from '../constants/styles'
import gStyles, { colors } from '../constants/styles'

const baseURL = 'https://api.sampleapis.com/coffee/hot'

export const Home = ({ navigation }) => {
  const [data, setData] = useState()

  useEffect(() => {
    fetch(baseURL)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  return (
    <ScrollView style={{ backgroundColor: colors.bg, flex: 1, paddingTop: 30 }}>
      <View style={{ paddingHorizontal: 20 }}>
        <Logo direction="row" />
      </View>
      <Header />
      {data &&
        data.map((el) => (
          <View
            style={{
              margin: 20,
              borderColor: colors.accent,
              borderWidth: 1,
              borderRadius: 10,
              padding: 15,
            }}
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
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              {el.ingredients.map((eng) => (
                <Text
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
          </View>
        ))}
    </ScrollView>
  )
}
