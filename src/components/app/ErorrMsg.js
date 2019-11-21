import { Text, StyleSheet, Dimensions } from 'react-native'

import React, { Component } from 'react'

export default class ErorrMsg extends Component {
    render() {
        return (
            <Text
            style={this.props.style}
            >
                {this.props.children}
            </Text>
        )
    }
}

