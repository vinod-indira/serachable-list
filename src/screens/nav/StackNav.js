import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home';

const Stack = createStackNavigator(); 

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default StackNav