import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'

export default class BlenImg extends Component {
    render() {
        return (
            <Image
            source={this.props.src}
            style={imgStyle.img}
            />
        )
    }
}
const imgStyle = StyleSheet.create({
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    }
})