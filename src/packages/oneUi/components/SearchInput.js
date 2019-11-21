import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default class OneSearch extends Component {
    render() {
        return (
           <TextInput
           placeholderTextColor="black"
           placeholder={this.props.placeholder || 'search input'}
           style={searchStyle.input}
           />
        )
    }
}

const searchStyle = StyleSheet.create({
    input: {
        backgroundColor:'#efefef',
        height: 50,
        width: '100%',
        fontFamily: 'sans-serif',
        // marginLeft: 23,
        borderRadius: 20,
        paddingLeft: 12,
        fontSize: 16
    }
})