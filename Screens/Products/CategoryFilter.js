import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native'

const CategoryFilter = (props) => {
    return (
        <ScrollView
            bounces={true}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.container}
        >

            <TouchableOpacity
                key={1}
                onPress={() => {
                    props.CategoryFilter('all'),
                        props.setActive(-1)
                }}
            >
                <View style={
                    props.active == -1
                        ? styles.inactiveView
                        : styles.activeView}
                >
                    <Text style={props.active == -1 ? styles.activeText : styles.inActiveText}>All</Text>
                </View>
            </TouchableOpacity>

            {props.categories.map((item) => (

                <TouchableOpacity
                    key={item._id}
                    onPress={() => {
                        props.CategoryFilter(item._id),
                            props.setActive(props.categories.indexOf(item))
                    }}
                >
                    <View
                        key={item._id}
                        style={props.active == props.categories.indexOf(item) ? styles.inactiveView : styles.activeView
                        }>
                        <Text
                            style={props.active == props.categories.indexOf(item)
                                ? styles.activeText : styles.inActiveText}
                        > {item.name}</Text>
                    </View>
                </TouchableOpacity>
            ))}

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        paddingVertical: 15,
        paddingHorizontal: 12,
        marginTop: 12,

    },
    activeView: {
        padding: 10,
        paddingHorizontal: 15,
        marginRight: 15,
        backgroundColor: '#fff',
        borderRadius: 30,
        elevation: 5,
        marginVertical: 10
    },
    inactiveView: {
        backgroundColor: '#277abb',
        padding: 10,
        paddingHorizontal: 15,

        borderRadius: 30,
        marginRight: 15,
        elevation: 5,
        marginVertical: 10
    },
    activeText: {
        color: '#fff',
        fontSize: 18,
    },
    inActiveText: {
        color: '#808080',
        fontSize: 18,
    }
})
export default CategoryFilter
