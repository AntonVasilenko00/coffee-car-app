import React from 'react'
import { View, Pressable, Text, TextInput, StyleSheet } from 'react-native'
import Logo from '../components/Logo'
import gStyles, { colors } from '../constants/styles'


export const Signup = ({ navigation }) => {
  return (
    <View style={gStyles.container}>
      <Logo />
      <Text style={gStyles.text}>Зарегистрируйтесь
        в один клик!</Text>
      <TextInput style={[gStyles.input, styles.input]} placeholder='Как к вам обращаться?' />
      <TextInput style={[gStyles.input, styles.input]} placeholder='Электронная почта' />
      <TextInput style={[gStyles.input, styles.input]} placeholder='Пароль' />

      <Pressable style={[gStyles.btn, { marginTop: 20 }]} >
        <Text style={gStyles.btnText}>Зарегистрироваться</Text>
      </Pressable>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <Text style={[gStyles.text, { fontSize: 12, fontWeight: 'bold', fontStyle: 'italic' }]}>У меня уже есть аккаунт.  </Text>
        <Pressable onPress={() => navigation.navigate('Login')}>

          <Text style={{ color: colors.accent, fontWeight: 'bold', fontSize: 12, fontStyle: 'italic' }} >Войти</Text>
        </Pressable>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
  }
})

