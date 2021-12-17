import React, { useState } from 'react'
import { SafeAreaView, Text, Image, StyleSheet, Dimensions, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MapView, { Callout, Marker } from 'react-native-maps';

export default function Mapscreen() {

    const [pin, setPin] = useState({
        latitude: 22.6258,
        longitude: 88.4348,

    })
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <MapView
                style={styles.map}
                loadingEnabled={true}
                initialRegion={{
                    longitude: 88.3639,
                    latitude: 22.5722,
                    latitudeDelta: 0.03,
                    longitudeDelta: 0.05,
                }}
            >
                <MapView.Marker
                    coordinate={{
                        latitude: 22.6258,
                        longitude: 88.4348,
                    }}
                    onSelect={() => console.log('onSelect', arguments)}
                    onDrag={() => console.log('onDrag', arguments)}
                    onDragStart={() => console.log('onDragStart', arguments)}
                    draggable
                >
                    <Image
                        style={{ width: 50, height: 32 }}
                        source={require('../../assets/map.png')} resizeMode='cover' />

                </MapView.Marker>

                <MapView.Marker
                    coordinate={{
                        longitude: 88.3639,
                        latitude: 22.5722,
                    }}
                    onSelect={() => console.log('onSelect', arguments)}
                    onDrag={() => console.log('onDrag', arguments)}
                    onDragStart={() => console.log('onDragStart', arguments)}
                    draggable
                >
                    <View>
                        <Image
                            style={{ width: 50, height: 32 }}
                            source={require('../../assets/hospital.png')} 
                            resizeMode='cover'
                        />                
                    </View>
                    <Callout style={styles.callout}>
                        <ScrollView>
                        <Text>test testtest testtest testtest testtest testtest test</Text>
                        </ScrollView>

                    </Callout>
                   
                </MapView.Marker>
            </MapView>
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
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    callout:{
        backgroundColor:'#fff',
        padding:'10%',
        alignItems:'center',
        borderRadius:50
    }
});



// home cart  map profile menu s