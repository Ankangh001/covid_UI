
import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './Home';
import Mapscreen from './Map';
import Cart from './Cart';
import Menu from './Menu';
import ProfileScreen from './Profile';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import ProductContainer from '../../Screens/Products/ProductContainer';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();



export default function MainScreen() {

    const CustomBtn = ({ children, onPress }) => (
        <TouchableOpacity style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}
            onPress={onPress}
        >
            <View style={{
                height: 70,
                width: 70,
                borderRadius: 40,
                backgroundColor: '#ddd'
            }}>
                {children}

            </View>
        </TouchableOpacity>
    )

    return (


        <NavigationContainer independent={true}>
            <Tab.Navigator labeled={false}
                initialRouteName="Login"
                activeColor="#277abb"
                inactiveColor="#277abb70"
                barStyle={{
                    backgroundColor: '#fff',
                    position: 'absolute',
                    bottom: 12,
                    left: 10,
                    elevation: 8,
                    width: '95%',
                    borderRadius: 25,
                    overflow: 'hidden',
                    height: 70,
                    justifyContent: 'center'
                }}
            >

                <Tab.Screen name="Home" component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }} />

                <Tab.Screen name="Cart" component={ProductContainer}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="cart" color={color} size={26} />
                        ),

                    }} />

                <Tab.Screen name="Map" component={Mapscreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="map" color={color} size={26} />
                        ),

                    }} />


                <Tab.Screen name="Profile" component={ProfileScreen}   // Profile Screen
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                        ),
                        activeBackgroundColor: 'tomato',

                    }} />

                <Tab.Screen name="Menu" component={Menu}   // Profile Screen
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="menu" color={color} size={26} />
                        ),
                        activeBackgroundColor: 'tomato',

                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
const styles = StyleSheet.create({
    bannerText1: {
        paddingHorizontal: 20,
        marginBottom: 20,
        textAlign: 'left',
        fontSize: 28,
        color: '#666',
        fontWeight: 'bold',

    }
});
