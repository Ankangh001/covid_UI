import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Merriweather_300Light,
    Merriweather_300Light_Italic,
    Merriweather_400Regular,
    Merriweather_400Regular_Italic,
    Merriweather_700Bold,
    Merriweather_700Bold_Italic,
    Merriweather_900Black,
    Merriweather_900Black_Italic
} from '@expo-google-fonts/merriweather';



const Header = () => {
    let [fontsLoaded, error] = useFonts({ Merriweather_900Black_Italic, });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <LinearGradient
            style={styles.banner}
            colors={['#277abb', '#62d0f6']}
            start={{ x: 0.0, y: 1 }}
            end={{ x: 1, y: 1.0 }}
        >
            <View style={styles.left}>
                <Image style={styles.image} source={require('../../assets/image1.png')} />
            </View>
            <View style={styles.right}>
                <Text style={styles.bannerText1}>CovidYodhya</Text>
                <Text style={styles.bannerText2}>Get all your Reasources here !</Text>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    left: {
        flex: 1,
    },
    right: {
        flex: 1,
    },
    image: {
        width: 150,
        height: 150
    },
    banner: {
        flexDirection: 'row',
        backgroundColor: "#2596be",
        width: '100%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 20,
        paddingVertical: 50,
        borderBottomRightRadius: 90,
        borderBottomLeftRadius: 90,
        elevation: 8,
    },
    bannerText1: {
        fontFamily: "Merriweather_900Black_Italic",
        backgroundColor: '#fff',
        borderRadius: 25,
        padding: 10,
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 15,

    },
    bannerText2: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 15,
    }
});

export default Header;