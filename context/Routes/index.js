import "react-native-gesture-handler";
import { View, Text } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Pages/Home";
import Contatos from "../Pages/Contatos";
import Abertura from "../Pages/Abertura";
import { TemaProvider } from "../common/Tema";

export default function Routes() {
  return (
    <NavigationContainer>
      <TemaProvider>
      <MeuStack />
      </TemaProvider>
    </NavigationContainer>
  );

  //para podermos usar props em navigation temos que fazer uma destruturação do que vai vir
  // dentro de cada stack com uma fuction anonima com o retorno daquele componente e para passar as props temos que passar todas as props e as novas por isso ...(de todas as props e props depois que vai ser as props novas)

  function MeuStack() {
    const Stack = createStackNavigator();

    return (
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => (
            <Home
              {...props}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Abertura">
          {(props) => (
            <Abertura
              {...props}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Contatos">
          {(props) => (
            <Contatos
              {...props}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    );
  }
}
