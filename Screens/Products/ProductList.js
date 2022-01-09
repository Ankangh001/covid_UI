import React from 'react'
import { View, Text, TouchableOpacity, Dimensions, TouchableOpacityBase } from 'react-native'
import ProductCard from './ProductCard';

const { width } = Dimensions.get('window');

const ProductList = (props) => {

    const { item } = props;

    return (
        <TouchableOpacity
            onPress={() => {
                props.navigation.navigate('Product Details', { item: item })
            }}
            style={{ width: '50%' }}
        >
            <View style={{ width: width / 2, backgroundColor: 'transparent' }}>
                <ProductCard {...item} />
            </View>
        </TouchableOpacity>
    )
}

export default ProductList
