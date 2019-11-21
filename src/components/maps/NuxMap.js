import React, { Component } from 'react'
import { View, StyleSheet,
    Platform, Text, TouchableOpacity, Dimensions, Vibration } from 'react-native'
import MapView, { Marker, Polyline } from 'react-native-maps'

const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 18.7934829;
const LONGITUDE = 98.9867401;

export default class NuxMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
         latitude: LATITUDE,
         longitude: LONGITUDE,
         error: null,
         routeCoordinates: [],
        };
       }
       getMapRegion = () => ({
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
       });
       componentDidMount() {
        navigator.geolocation.getCurrentPosition(
         position => {
           console.log(position);
           this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
           error: null
          });
        },
        error => this.setState({ error: error.message }),
         { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 }
         );
         navigator.geolocation.watchPosition(
            position => {
                const { latitude, longitude } = position.coords;
                const { routeCoordinates } = this.state;
                const newCoordinate = {  latitude,  longitude  };
                this.setState({
                 latitude,
                 longitude,
                  routeCoordinates: routeCoordinates.concat([newCoordinate])
                });
            }
           );
       }
    render() {
        return (
            <MapView
            style={styles.map}
            region={this.getMapRegion()}
            >
               <Polyline coordinates={this.getMapRegion()} strokeWidth={2} />
                <Marker coordinate={this.getMapRegion()} /> 
            </MapView>
        )
    }
}
const styles = StyleSheet.create({
    map: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 1000, position: 'absolute', width:'100%'
    },
})