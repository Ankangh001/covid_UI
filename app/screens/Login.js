import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from
    'react-native-vector-icons/MaterialCommunityIcons';
import { Dimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height + 50;
const Login = () => {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <LinearGradient style={{ height: windowHeight }} colors={['#62d0f630', '#62d0f625']}>
                <View style={styles.container}>
                    <View style={styles.view}>
                        <Image style={styles.image} source={require('../../assets/image3.png')} />
                        <Text style={styles.heading}>Login Here</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Register')}
                            style={{ marginBottom: 25, marginTop: 10, flexDirection: 'row' }}>
                            <Text style={{ justifyContent: 'center', alignItems: 'center', color: '#62d0f6', fontSize: 18 }}>
                                I am new here</Text>
                            <MaterialCommunityIcons name="arrow-right" color={"#62d0f6"} size={25} />
                        </TouchableOpacity>
                        <TextInput style={styles.input} placeholder='Email' />
                        <TextInput secureTextEntry={true} style={styles.input} placeholder='Password' />
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Let's Go</Text>
                        </TouchableOpacity>
                        <View style={{ marginVertical: 25, }}>

                            <TouchableOpacity
                                onPress={() => navigation.replace('Home')}
                                style={{ position: 'absolute', left: '18%', flexDirection: 'row', }}
                            >
                                <Text style={{ justifyContent: 'center', alignItems: 'center', color: '#66666695', fontSize: 18, marginRight: 5 }}>
                                    Skip
                                </Text>
                                <MaterialCommunityIcons name="arrow-right-drop-circle" color={"#66666695"} size={25} />
                            </TouchableOpacity>

                        </View>
                    </View>

                </View>
            </LinearGradient>
        </ScrollView>
    )

}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: windowHeight
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: '70%',
        width: '80%',
        elevation: 10,
        borderRadius: 35
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: -20
    },
    heading: {
        backgroundColor: '#fff',
        fontSize: 35,
        color: '#666',
    },
    input: {
        borderWidth: 3,
        marginBottom: 30,
        borderColor: '#62d0f680',
        paddingVertical: 8,
        paddingHorizontal: 20,
        width: '80%',
        borderRadius: 25,
        color: '#666',
        fontSize: 18,
        backgroundColor: '#ffffff'
    },
    button: {
        width: '50%',
        paddingVertical: 8,
        elevation: 5,
        borderRadius: 50,
        textAlign: 'center',
        backgroundColor: '#62d0f6'
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 25,
        color: '#fff'
    }
});

export default Login
