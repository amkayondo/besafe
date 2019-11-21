import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation-stack'

import TripMap from '../screens/Maps/TripMap'

const MapNavigator = createStackNavigator({
  TripMap: {
    screen: TripMap,
    navigationOptions: {
        gesturesEnabled: false,
        header: null,
    }
},
},
)

export default MapNavigator;
