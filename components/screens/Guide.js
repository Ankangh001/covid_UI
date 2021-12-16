import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const Guide = () => {

    return (
        <View style={styles.container}>
            <LinearGradient
                style={styles.banner}
                colors={['#83c7fd', '#deedf9']}
                start={{ x: 0.0, y: 1 }}
                end={{ x: 1, y: 1.0 }}
            >
                <View>
                    <Text style={styles.bannerText1}>Avoid the</Text>
                    <Text style={styles.bannerText1}><Text style={{ color: '#277abb' }}>Corona</Text> Scare</Text>
                    <Text style={styles.bannerText2}>Get your symptoms assesed</Text>
                </View>
                <Image style={styles.image} source={require('../../assets/image2.png')} />

            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        flexDirection: 'row',
        padding: 20,

    },
    image: {
        width: "45%",
        height: "100%",
    },
    banner: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "#2596be",
        width: '90%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 20,
        borderRadius: 20,
        elevation: 8,
    },
    bannerText1: {

        borderRadius: 25,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 24,
    },
    bannerText2: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
        marginVertical: 15,
    }
});

export default Guide;