import React from 'react'
import { View, Pressable, Text, TextInput, StyleSheet, Button } from 'react-native'
import Logo from '../components/Logo'
import gStyles, { colors } from '../constants/styles'


export const Login = ({ navigation }) => {
  return (
    <View style={gStyles.container}>
      <Logo />
      <Text style={gStyles.text}>Добро пожаловать!</Text>
      <Text style={gStyles.text}>Войдите в свой аккаунт</Text>
      <TextInput style={[gStyles.input, styles.input]} placeholder='Электронная почта' />
      <TextInput style={[gStyles.input, styles.input]} placeholder='Пароль' />
      <Pressable style={[gStyles.btn, { marginTop: 20 }]} >
        <Text style={gStyles.btnText}>Войти</Text>
      </Pressable>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <Text style={[gStyles.text, { fontSize: 12, fontWeight: 'bold', fontStyle: 'italic' }]}>У  Вас еще нет аккаунта? </Text>
        <Pressable onPress={() => navigation.navigate('Signup')}>

          <Text style={{ color: colors.accent, fontWeight: 'bold', fontSize: 12, fontStyle: 'italic' }} >Зарегистрируйтесь</Text>
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


