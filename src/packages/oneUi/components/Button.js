import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class OneButton extends Component {
    render() {
        return (
           <TouchableOpacity
           style={this.props.style}
           onPress={this.props.onPress}
           >
            <Text style={btnSty.txt}>
            {this.props.children}
            </Text>
           </TouchableOpacity>
        )
    }
}
const btnSty = StyleSheet.create({
    txt: {
        fontSize: 23,
        fontWeight: '900',
        marginTop: 5,
        textAlign: 'center',
    }
})