import React, { Component } from 'react'
import { Image, StyleSheet, Alert } from 'react-native'

export default class AppCircleImage extends Component {
    render() {
        return (
            <Image
            style={ImgStyle.imgDiv}
            source={this.props.src}
            />
        )
    }
}
const ImgStyle = StyleSheet.create({
    imgDiv: {
        width: '100%',
        height: '100%',
        borderRadius: 50
    }
})