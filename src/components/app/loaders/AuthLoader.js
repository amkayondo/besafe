import { StyleSheet, Text, View, 
    Dimensions,
    ActivityIndicator,
    } from 'react-native';

import React, { Component } from 'react'

const { height, width } = Dimensions.get('window');

export default class AuthLoader extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <>
            <View style={Authstyle.div}>
            <ActivityIndicator
            style={Authstyle.spin}
            size="large" color="#9500fc" />
            </View>
            
            </>
        )
    }
}
const Authstyle = StyleSheet.create({
    div: {
        backgroundColor: '#fff',
        height,
        width,
        justifyContent: 'center',
    },
    spin: {
       
    }
})