import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

const height = Dimensions.get('window').height;

const ProfileScreen = () => {


    return (
        <View style={styles.container}>
            <LinearGradient style={{ marginBottom: 50, height: '100%' }} colors={['#62d0f630', '#62d0f625']}>
                <View style={styles.userInfoSection}>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Image style={styles.Image}
                            source={require('../../assets/man.png')} />
                        <View style={{ marginLeft: 30 }}>
                            <Text style={[styles.title, {
                                marginTop: 20,
                                marginBottom: 5,
                            }]}>John Doe</Text>
                            <Text style={styles.caption}>@j_doe</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.userInfoSection}>
                    <View style={styles.row}>
                        <Icon name="map-marker-radius" color="#777777" size={20} />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>Kolkata, India</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="phone" color="#777777" size={20} />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>+91-900000009</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="email" color="#777777" size={20} />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>john_doe@email.com</Text>
                    </View>
                </View>

                <View style={styles.infoBoxWrapper}>
                    <View style={[styles.infoBox, {
                        borderRightColor: '#fff'
                    }]}>
                        <Text>₹140.50</Text>
                        <Text>Wallet</Text>
                    </View>
                    <View style={styles.infoBox}>
                        <Text>12</Text>
                        <Text>Orders</Text>
                    </View>
                </View>

                <View style={styles.menuWrapper}>
                    <TouchableOpacity onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon name="heart-outline" color="#277abb" size={25} />
                            <Text style={styles.menuItemText}>Your Favorites</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon name="credit-card" color="#277abb" size={25} />
                            <Text style={styles.menuItemText}>Payment</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon name="share-outline" color="#277abb" size={25} />
                            <Text style={styles.menuItemText}>Tell Your Friends</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon name="account-check-outline" color="#277abb" size={25} />
                            <Text style={styles.menuItemText}>Support</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon name="account-settings-outline" color="#277abb" size={25} />
                            <Text style={styles.menuItemText}>Settings</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        paddingTop: 50,

    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 17,
        lineHeight: 17,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,

    },
    infoBoxWrapper: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        height: 80,
        paddingHorizontal: 10,
        marginTop: 20,
        marginBottom: 20

    },
    infoBox: {
        width: '47%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 30,
        elevation: 8,
        height:65

    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
    Image: {
        width: 100,
        height: 100,
    },
});