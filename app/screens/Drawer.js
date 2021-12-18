import * as React from 'react';
import { View, Text, Platform } from 'react-native';
import 'react-native-gesture-handler';
import TabNavigator from './TabNavigator';
import HomeScreen from './Home';
import ProfileScreen from './Profile';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator 
      initialRouteName='HomeScreen' 
      screenOptions={{
        headerShown:false,
        drawerStyle:{
          marginTop: Platform.OS == 'android' ? 30 : 0,
          backgroundColor: '#fff',
          color: '#fff',
        }, 
      
      }}
     
    >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default function AppDrawer() {
  return (
    <NavigationContainer  independent={true}>
      <MyDrawer />
    </NavigationContainer>
  );
}
