import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, Button } from 'react-native'

// import { connect } from 'react-redux'
// import * as actions from '../../Redux/Actios/cartActions'

const { width } = Dimensions.get("window");
const ProductCard = (props) => {

    const { name, price, image, countInStock } = props
    return (
        <View style={styles.container}>
            <View style={styles.card} >
                <Image
                    style={styles.image}
                    resizeMode='contain'
                    source={{ uri: image ? image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png' }}
                />
            </View>
            <Text style={styles.title}>
                {name.length > 15 ? name.substring(0, 12) + '...' : name}
            </Text>
            <Text style={styles.price}>${price}</Text>
            {countInStock > 0 ? (
                <View style={{ marginBottom: 60 }}>
                    <Button
                        title='Add'
                        color={'green'}
                        onPress={() => {
                            props.addItemToCart(props)
                        }}
                    />
                </View>
            ) : <Text style={{ marginBottom: 10 }}>Currently Not in Stock</Text>}
        </View>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => {
            dispatch(actions.addToCart({ quantity: 1, product }))
        }
    }
}

const styles = StyleSheet.create({
    container: {
        width: width / 2.2,
        height: width / 1.7,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: width / 2 - 22,
        height: width / 2,
    },
    card: {
        width: width / 2 - 20,
        height: width / 2,
        backgroundColor: '#ddd',
        marginBottom: 20,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    // title: {
    //     fontWeight: "bold",
    //     fontSize: 14,
    //     color: '#666',
    //     textAlign: "center"
    // },
    // price: {
    //     fontSize: 20,
    //     color: 'orange',
    //     marginVertical: 12
    // }
});


export default ProductCard
