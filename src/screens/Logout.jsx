import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'

import { UserContext } from '../../App'

export const Logout = ({ navigation }) => {
  const context = useContext(UserContext)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Вы точно хотите выйти?</Text>
      <Button
        onPress={() => {
          context.setUser({})
          context.setIsSignedIn(false)
        }}
        title="Выйти"
      />
    </View>
  )
}
