import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Abertura from './screens/Abertura';
import Login from './screens/Login';
import Registro from './screens/Registro';
import { Header } from 'semantic-ui-react';

export default function App() {
  return (
    <NavigationContainer>
      <MeuStack />
    </NavigationContainer>
  );
}



function MeuStack() {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen  name="Abertura" component={Abertura} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registro" component={Registro} />
    </Stack.Navigator>
  )
}
