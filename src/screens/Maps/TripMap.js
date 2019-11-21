import React, { Component } from 'react'
import { View, StyleSheet,
    Platform, Text, TouchableOpacity, Alert, Dimensions, Vibration
} from 'react-native'
import { LocationPermission } from '../../helpers'
import MapView, { Marker, Polyline } from 'react-native-maps'
import { Button } from 'react-native-paper';
import Geolocation from '@react-native-community/geolocation';

import mapStyles from './mapStyles'

const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 18.7934829;
const LONGITUDE = 98.9867401;

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        cods : {
            latitude: 51.5033640, 
            longitude: -0.1276250, 
            latitudeDelta: 0.0922, 
            longitudeDelta: 0.0421,
        },
         error: null,
         routeCoordinates: [],
        };
        this.backHome = () => {
            this.props.navigation.navigate('Home')
        }
        this.getLocation = () => {
            Geolocation.getCurrentPosition((coords)=>{
                const {latitude, longitude } = coords.coords;
                this.setState({
                    cods: {
                        latitude,
                        longitude,
                        latitudeDelta: 0.0922, 
                        longitudeDelta: 0.0421,
                    }
                })
            }, async (error) => {
                // console.log(error.message)
                return await LocationPermission();
            });
        }
       }
      async grantLocationPermission (){
        return  await LocationPermission();
       }
       getMapRegion = () => ({
        latitude: 51.5033640,
        longitude: -0.1276250,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    async componentDidMount(){
       await this.grantLocationPermission();
    }
    
    render() {
        return (
            <>
            
           <View style={mapStyles.tpvg}>
                <Button
                style={mapStyles.cbtn}
                onPress={this.backHome}
                >
                    back
                </Button>
                <Button
                style={mapStyles.ntpBtn}
                onPress={this.getLocation}
                >
                 FIND ME
                </Button>
            </View>
            <MapView
            showsUserLocation={true}
            zoomEnabled={true}
            zoomControlEnabled={true}
            style={styles.map}
            // region
            
            region={this.state.cods}
            >
            </MapView>
            
            </>
        )
    }
}
const styles = StyleSheet.create({
    map: {
        // justifyContent: 'flex-end',
        // alignItems: 'center',
        height: 1000,
        // position: 'absolute', 
        width:'100%'
    },
})