import React from 'react'
import { View, Text, FlatList, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';

const {width} = Dimensions.get('window')


const SearchedProduct = (props) => {

    const { productsFiltered } = props;

    return (
        <View style={{ width: width }}>
            {productsFiltered.length > 0 ? (
                productsFiltered.map((item) => (
                    <TouchableOpacity 
                        key={item._id}  
                        onPress={()=>{
                            props.navigation.navigate('Product Details', {item:item})
                        }}
                    >
                        <Text style={styles.item}>{item.name}</Text></TouchableOpacity>
                ))
            ) : <View><Text>No search Result</Text></View>}
        </View>
    )
}

const styles = StyleSheet.create({
    item: { 
        backgroundColor: '#eee', 
        color: '#000', 
        padding:10,
        marginVertical:5,
        marginHorizontal: 15
    }
})

export default SearchedProduct
