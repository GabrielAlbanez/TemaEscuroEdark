import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

export default function Login({navigation}) {
  return (
    <View>
      <Text>Login</Text>
      <Button title='Voltar'onPress={()=>{
            navigation.navigate("Abertura")
        }}></Button>
    </View>
  )
}