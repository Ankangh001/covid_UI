import React, { useState } from 'react'
import { SafeAreaView, Text, Image, StyleSheet, Dimensions, View } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';

const response = [
    {
        id: '1',
        coordinates: {
            latitude: 22.5722,
            longitude: 88.3639
        },
        callout: "Place Name",
        icon: require('../../assets/hospital.png'),
    },
    {
        id: '2',
        coordinates: {
            latitude: 22.5629,
            longitude: 88.3962,
        },
        callout: 'Place Name',
        icon: require('../../assets/hospital.png'),
    }
]

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default function Mapscreen() {

    const [spot, setSpot] = useState(null);
    const [visible, setVisible] = useState(false)
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <MapView
                onPress={(event) => {
                    setVisible(false)
                }}
                style={styles.map}
                loadingEnabled={true}
                initialRegion={{
                    longitude: 88.3639,
                    latitude: 22.5722,
                    latitudeDelta: 10,
                    longitudeDelta: 1,
                }}
            >
                {response.map((item) => (

                    <MapView.Marker
                        key={item.id}
                        coordinate={item.coordinates}
                        title={item.callout}
                        
                    >
                        <Image
                            style={{ width: 50, height: 32 }}
                            source={require('../../assets/hospital.png')}
                            resizeMode='cover'
                        />
                    </MapView.Marker>
                ))}


            </MapView>

            <View style={styles.mapbox}>
                <Image style={styles.mapboxImage} resizeMode='cover' source={require('../../assets/logo.png')} />
                <View style={styles.mapboxText}>
                    <Text style={styles.mapboxhead}>Place Name</Text>
                    <Text style={styles.mapboxDesc}>Place NamePlace NamePlace NamePlace NamePlace NamePlace NamePlace Name </Text>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 22
    },
    map: {
        width: width,
        height: height + 30,
    },
    mapbox: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: width - 20,
        marginHorizontal: 10,
        padding: '5%',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 10,
        height: 100,
        overflow: 'hidden',
        position: 'absolute',
        bottom: height / 8,
        elevation: 10
    },
    mapboxImage: {
        width: 100,
        height: 100
    },
    mapboxText: {
        width: width / 2,
        alignItems: "center",
        justifyContent: "center"
    },
    mapboxhead: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 12
    },
    mapboxDesc: {
        fontSize: 12
    }
});



// home cart  map profile menu s