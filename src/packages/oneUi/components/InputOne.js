import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default class InputOne extends Component {
    render() {
        return (
            <TextInput
            onChange={this.props.onChange}
            placeholder={this.props.placeholder}
            style={inptStyle.btnX}
            textContentType={this.props.textContentType}
            />
        )
    }
}
const inptStyle = StyleSheet.create({
    btnX: {
        backgroundColor: '#efefef',
        width: '100%',
        height: '100%',
        borderRadius: 30,
        paddingLeft: 12,
        fontWeight: '900',
        paddingRight: 12
    }
})