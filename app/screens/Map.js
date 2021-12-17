import React, { useState } from 'react'
import {
    SafeAreaView,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    View,
    TouchableWithoutFeedback,
    Platform,
    TextInput

} from 'react-native';

import MapView, { Callout, Marker } from 'react-native-maps';
import { LinearGradient } from 'expo-linear-gradient';


const response = [
    {
        id: '1',
        coordinates: {
            latitude: 22.5722,
            longitude: 88.3639
        },
        callout: "Place Name",
        icon: require('../../assets/map.png'),
        image: require('../../assets/image1.png'),
        description: 'this is a small description about place... '
    },
    {
        id: '2',
        coordinates: {
            latitude: 22.5629,
            longitude: 88.3962,
        },
        callout: 'Place Name 2',
        icon: require('../../assets/hospital.png'),
        image: require('../../assets/image2.png'),
        description: 'Welcome to the best hospital this is a great place.. '


    }
]

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default function Mapscreen() {

    const [spot, setSpot] = useState(null);
    const [visible, setVisible] = useState(false);
    const [card, setCard] = useState('');

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <View style={{ backgroundColor: '#62d0f695', paddingTop: Platform.OS == 'android' ? 30 : 0 }} />

            <View style={styles.searchbox}>
                <TextInput style={styles.searchInput} placeholder="Search" />
            </View>
            <MapView
                onPress={(event) => {
                    setVisible(false)
                }}
                style={styles.map}
                loadingEnabled={true}
                initialRegion={{
                    longitude: 88.3639,
                    latitude: 22.5722,
                    latitudeDelta: 0.05,
                    longitudeDelta: 1,
                }}
            >
                {response.map((item) => (

                    <MapView.Marker
                        key={item.id}
                        coordinate={item.coordinates}
                        title={item.callout}
                        onPress={(event) => {
                            setSpot(event._targetInst.return.key);
                            setVisible(true);
                        }}
                        showUserLocation={true}

                    >
                        <Image
                            style={{ width: 50, height: 32 }}
                            source={require('../../assets/hospital.png')}
                            resizeMode='cover'
                        />
                    </MapView.Marker>
                ))}
            </MapView>

            {spot && visible ? (
                <TouchableWithoutFeedback onPress={() => { setVisible(true) }} >
                    <View style={styles.mapbox}>
                        {
                            response.filter(
                                (item) =>
                                    item.id == spot
                            ).map(
                                (it) =>
                                (<>
                                    <Image style={styles.mapboxImage} resizeMode='cover' source={it.image}/>
                                    <View style={styles.mapboxText}>
                                        <Text style={styles.mapboxhead}>{it.callout}</Text>
                                        <Text style={styles.mapboxDesc}>{it.description} </Text>
                                    </View>
                                </>)
                            )
                        }

                    </View>
                </TouchableWithoutFeedback>
            ) : <View />}
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
        height: height - 80,
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
        bottom: 20,
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