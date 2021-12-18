import React from 'react';
import Login from './app/screens/Login';
import Register from './app/screens/Register';
import MainScreen from './app/screens/MainScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 300,
    damping: 500,
    mass: 3,
    duration: 500,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          transitionSpec: {
            open: config,
            close: config
          },
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


