import React from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native'

const Cart = () => {
    return (
        <SafeAreaView style={styles.header} >
            <Image
                source={require('../../assets/logo.png')}
                resizeMode='contain'
                style={{ height: 150 }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        backgroundColor: '#fff',
        marginTop: 22,
        marginBottom: 0
    }
})
export default Cart
