import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const VerticalScroll = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} horizontal={true} style={styles.container} >
            <TouchableOpacity>
                <View style={styles.box} >
                    <FontAwesome5 name="leaf" size={35} color="#277abb" />
                    <Text style={styles.boxText} >Oxygen</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.box} >
                    <FontAwesome5 name="pills" size={35} color="#277abb" />
                    <Text style={styles.boxText} >Medicine Shops</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.box} >
                    <Fontisto name="blood-drop" size={35} color="#277abb" />
                    <Text style={styles.boxText} >Blood Bank</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.box} >
                    <Fontisto name="blood-test" size={35} color="#277abb" />
                    <Text style={styles.boxText} >Covid Test</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.box} >
                    <Ionicons name="fast-food" size={35} color="#277abb" />
                    <Text style={styles.boxText} >Food Services</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.box} >
                    <FontAwesome5 name="hospital-user" size={35} color="#277abb" />
                    <Text style={styles.boxText} >Hospital Beds</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.box} >
                    <Fontisto name="injection-syringe" size={35} color="#277abb" />
                    <Text style={styles.boxText} >Vaccine Centre</Text>
                </View>
            </TouchableOpacity>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {

        flexDirection: 'row',
        paddingHorizontal: 20,
        height: 170,
    },
    boxText: {
        fontSize: 20,
        color: '#666',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    box: {
        backgroundColor: "#fff",
        elevation: 8,
        marginRight: 20,
        width: 200,
        height: 135,
        padding: 15,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 25
    }
});


export default VerticalScroll;