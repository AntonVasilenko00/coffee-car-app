import React from 'react'
import { View, Pressable, Text, TextInput, StyleSheet, Button } from 'react-native'
import Header from '../components/Header'
import Logo from '../components/Logo'
import gStyles, { colors } from '../constants/styles'


export const Home = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: colors.bg, flex: 1, paddingTop: 30 }}>
      <View style={{ paddingHorizontal: 20 }}>
        <Logo direction='row' />
      </View>
      <Header />
    </View >
  )
}



