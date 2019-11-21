import React, { Component } from 'react'
import { View, StyleSheet,
    Platform, Text, TouchableOpacity, Dimensions, Vibration } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import unSafePlaces from '../../data'
import checkIfUserIsSafe from '../../util/maps/checkIfUserIsSafe'

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class HomeMap extends Component {
    constructor(props){
        super(props);
        this.state = {
            markers: unSafePlaces,
            location: null,
            errorMessage: null,
          };
    }
    
      componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
          this.setState({
            errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
          });
        } else {
          this._getLocationAsync();
        }
      }
    
      _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied',
          });
        }
    
        const mylocation = await Location.getCurrentPositionAsync({});
        this.setState({ location: {
            latitude: mylocation.coords.latitude,
            longitude:  mylocation.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        } });
      };
      getUserLocation = () => {
        const data = {
            latitude: this.state.location.latitude,
            longitude: this.state.location.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        }
        checkIfUserIsSafe(this.state, data)
        this.setState({ location: data})
      }
      
      showMarkers = () => {
        return (this.state.markers.map(marker => (
                <Marker
                  key={marker.id}
                  coordinate={{
                      latitude: marker.coordinates.latitute,
                      longitude: marker.coordinates.longitude,
                  }}
                  title={marker.title}
                />
        )))

      }
      
    render() {
        return (
        <View>
           <MapView
           style={styles.map}
           region={ this.state.location }
           showsUserLocation
           >
         {this.showMarkers()}
           </MapView>
         <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => this.getUserLocation()}
                style={[styles.bubble, styles.button]}
              >
                <Text>Get My Location</Text>
              </TouchableOpacity>
            </View>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    map: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 1000, position: 'absolute', width:'100%'
    },
    bubble: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 18,
      paddingVertical: 12,
      borderRadius: 20,
      marginRight: 20,
    },
    button: {
      width: 80,
      paddingHorizontal: 12,
      alignItems: 'center',
      marginHorizontal: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      marginVertical: 20,
      position: 'absolute',
      top: 700,
      backgroundColor: 'transparent',
    },
    
  });