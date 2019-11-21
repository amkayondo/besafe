import React, { Component } from 'react'
import { View, Text, Alert, Image } from 'react-native'
import { BleCtn, BlenImg } from '../../packages/oneUi'
import { adImg } from '../../constants/imgConstants'

export default class SmallAd extends Component {
    onClick = () => {
        Alert.alert('hahaha')
    }
    render() {
        return (
            <BleCtn
            onClick={this.onClick}
            >
            <BlenImg
            src={adImg}
            />
            </BleCtn>
        )
    }
}
