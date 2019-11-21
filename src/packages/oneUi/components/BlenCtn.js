import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class BlenCtn extends Component {
    render() {
        return (
            <View 
            onTouchStart={this.props.onClick}
            style={blenStyle.blCtn}>
                {this.props.children}
            </View>
        )
    }
}
const blenStyle = StyleSheet.create({
    blCtn: {
        backgroundColor: '#e0dfdf',
        height: 150,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 10,
    }
})