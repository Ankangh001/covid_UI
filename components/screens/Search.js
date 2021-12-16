import React from 'react';
import { StyleSheet, TextInput, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Search = () => {
    return (
        <View style={styles.container} >
            <TextInput
                placeholder={"Ask a Doctor !"}
                style={styles.search}
            />
            <View style={styles.searchIcon}>
                <FontAwesome name="search" size={24} color="#277abb" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 22,
        paddingTop: 50,
        paddingBottom: 30,
    },
    searchIcon: {
        position: 'absolute',
        right: '20%',
        bottom: '80%'
    },
    search: {
        width: '90%',
        padding: 20,
        borderRadius: 30,
        borderColor: '#62d0f660',
        borderWidth: 5,
        textAlign: 'left',
        fontSize: 20,
        color: '#666',
        paddingVertical: 12,
        backgroundColor: '#fff'
    }
});


export default Search;