import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from './src/screens/SplashScreen'
import LoginScreen from './src/screens/LoginScreen'
import SignupScreen from './src/screens/SignupScreen'

const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen'>
        <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name='SignupScreen' component={SignupScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App 