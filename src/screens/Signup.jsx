import React, {useState} from 'react'
import { View, Pressable, Text, TextInput, StyleSheet } from 'react-native'
import Logo from '../components/Logo'
import gStyles, { colors } from '../constants/styles'
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase';


export const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth,email, password).then(userCredentials=>{
      console.log(userCredentials)
      const user = userCredentials.user
      console.log(user.email)
    }).catch(err=>console.log(err.message))
  }

  return (
    <View style={gStyles.container}>
      <Logo />
      <Text style={gStyles.text}>Зарегистрируйтесь
        в один клик!</Text>
      <TextInput style={[gStyles.input, styles.input]} placeholder='Как к вам обращаться?' />
      <TextInput style={[gStyles.input, styles.input]} placeholder='Электронная почта' onChangeText={text=>setEmail(text)}/>
      <TextInput style={[gStyles.input, styles.input]} placeholder='Пароль' secureTextEntry onChangeText={text=>setPassword(text)}/>

      <Pressable style={[gStyles.btn, { marginTop: 20 }]} onPress={handleSignUp} >
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
