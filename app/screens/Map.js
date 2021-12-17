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

} from 'react-native';
import { TextInput } from 'react-native-paper';

import MapView, { Callout, Marker } from 'react-native-maps';
import { FontAwesome } from '@expo/vector-icons';

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
                                    <Image key={it.id} style={styles.mapboxImage} resizeMode='cover' source={it.image} />
                                    <View style={styles.mapboxText}>
                                        <Text style={styles.mapboxhead}>{it.callout}</Text>
                                        <Text style={styles.mapboxDesc}>{it.description} </Text>
                                    
                                </View></>)
                            )
                        }

                    </View>
                </TouchableWithoutFeedback>
            ) : <View />}

            <View style={styles.container} >
                
                <TextInput
                    style={styles.search}
                    label="Search In Map"
                    right={<TextInput.Icon name="magnify" />}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 22,
        position: 'absolute',
        top: '5%',
        width: width,
    },
    search: {
        width: '90%',
        borderColor: '#62d0f6',
        borderWidth: 2,
        textAlign: 'left',
        fontSize: 18,
        color: '#666',
        backgroundColor: '#fff',
        elevation: 3,
        height:50,
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
        height: 120,
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


