import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import gStyles, { colors } from '../constants/styles'
const logo = require('../assets/logo.png')

const Logo = ({ direction }) => {
  return (
    <View style={{ flexDirection: direction, alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
      <Image source={logo} />
      <View style={styles.logoLine} >
        <Text style={styles.textLogo} >Coffee Car</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  logoLine: {
    borderBottomColor: colors.accent,
    borderBottomWidth: 4,
    width: '60%',
    marginBottom: 10,
  },
  textLogo: {
    textAlign: 'center',

    fontSize: 32,
    color: colors.textPrimary,
    fontWeight: 'bold',
  },
})

export default Logo