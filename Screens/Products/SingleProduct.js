import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const { width, height } = Dimensions.get('window')
const SingleProduct = (props) => {

    const [item, setItem] = useState(props.route.params.item);
    const [availability, setavAilability] = useState('');

    return (
        <View>
            <ScrollView >
                <View style={styles.container} >
                    <Image
                        style={styles.image}
                        resizeMode='contain'
                        source={{ uri: item.image ? item.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png' }}
                    />
                    <View style={styles.details}>
                        <Text style={styles.productName}>{item.name}</Text>

                        <View style={styles.brand}>
                            <Text style={styles.brandName}>{item.brand}</Text>
                            <Text style={styles.stock}>{item.countInStock > 0 ? null : 'Out of Stock'}</Text>
                        </View>

                        <Text style={styles.rating}>{item.rating} <MaterialIcons name='star' color={'#e9d80a'} size={20} /></Text>

                        <Text>{item.description}</Text>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.priceContainer}>
                <Text style={styles.price}>${item.price}</Text>
                <Button title="Add" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 200,
        height: 200
    },
    details: {
        backgroundColor: '#fff',
        padding: 25,
        width: width,
        height: height,
        alignItems: 'center'
    },
    productName: {
        fontSize: 24,
        marginBottom: 15

    },
    brand: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    brandName: {
        color: '#666',
        fontSize: 20,
        marginBottom: 5
    },
    rating: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5

    },
    priceContainer: {
        padding: 5,
        paddingHorizontal: 22,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width,
        borderColor: "blue",
        borderBottomWidth: 2,
        borderTopWidth: 1,
        position: 'absolute',
        bottom: 0
    },
    price: {
        color: 'orange',
        flexDirection: 'row',
        fontSize: 26,
        fontWeight: 'bold',
    },
})
export default SingleProduct
