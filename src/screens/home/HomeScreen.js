import React, { Component } from 'react'
import { View,
    Platform, Text, Alert,
    Touchable
} from 'react-native'
import { LocationPermission } from '../../helpers'
import MapView, { Marker, Polyline } from 'react-native-maps'
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons'

import homeStyle from './homeStyle'

export default class HomeScreen extends Component {
    constructor() {
        super();
        this.showMap = () => {
            this.props.navigation.navigate('TripMap')
        }
    }
    render() {
        return (
            <>
            <Text
            style={homeStyle.tpFnt}
            >agent 24</Text>
           <Button
           onPress={this.showMap}
           style={homeStyle.nebtn}
           >new trip</Button>
           <View>
               <Text
               style={homeStyle.tpFnt}
               >Your History</Text>
           </View>
            </>
        )
    }
}
