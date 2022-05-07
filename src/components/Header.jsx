import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import gStyles, { colors } from '../constants/styles'
const logo = require('../assets/logo.png')
import uuid from 'react-native-uuid'

//generate array of 5 items with title
const items = [
  {
    title: 'hot',
  },
  {
    title: 'iced',
  },
  // {
  //   title: 'Чай',
  // },
  // {
  //   title: 'Холодные напитки',
  // },
  // {
  //   title: 'Сладости и закуски',
  // },
]

const Header = ({ active, setActive }) => {
  return (
    <View style={styles.container}>
      {items.map((item, i) => (
        <Pressable
          key={uuid.v4()}
          style={{ width: '50%' }}
          onPress={() => setActive(item.title)}
        >
          <Text
            style={[styles.item, item.title === active && styles.itemActive]}
          >
            {item.title}
          </Text>
        </Pressable>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '100%',
    backgroundColor: colors.accent,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  item: {
    ...gStyles.text,
    textTransform: 'capitalize',
    fontSize: 10,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
  itemActive: {
    backgroundColor: colors.drawerBg,
    color: colors.accent,
  },
})

export default Header
