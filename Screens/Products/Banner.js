import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';


const { width, height } = Dimensions.get('window');

const Banner = () => {

    const [banner, setBanner] = useState([])

    useEffect(() => {
        setBanner([
            "https://images.vexels.com/media/users/3/126443/preview2/ff9af1e1edfa2c4a46c43b0c2040ce52-macbook-pro-touch-bar-banner.jpg",
            "https://pbs.twimg.com/media/D7P_yLdX4AAvJWO.jpg",
            "https://www.yardproduct.com/blog/wp-content/uploads/2016/01/gardening-banner.jpg"
        ])

        return () => {
            setBanner([])
        }
    }, [])

    return (
        <ScrollView>
            <View style={styles.container}>
                <Swiper 
                    style={styles.wrapper} 
                    showsButtons= {false}
                    loop={true} 
                    autoplay={true}
                    dotColor='#ccc'
                    activeDotColor='#fff'
                >
                    {banner.map(item=>(
                        <Image 
                            key={item}
                            style={styles.image} 
                            source={{ uri: item }} 
                        />
                    ))}
                </Swiper>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:15,
        marginHorizontal:12,
        elevation:8,
        borderRadius:12,
        alignItems: 'center'
    },
    wrapper: {
        marginTop: 0,
        height: width / 2
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    image:{
        height: width/2
    }
})

export default Banner
