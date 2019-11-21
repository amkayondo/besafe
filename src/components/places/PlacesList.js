import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import PlaceView from './components/PlaceView'

export default class PlacesList extends Component {
    render() {
        return (
            <View>
            <PlaceView/>
            <PlaceView/>
            <PlaceView/>
            <PlaceView/>
            <PlaceView/>
            <PlaceView/>
            <PlaceView/>
            </View>
        )
    }
}
