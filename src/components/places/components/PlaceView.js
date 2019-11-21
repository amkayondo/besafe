import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { placeImg } from '../../../constants/imgConstants'
import { RoundImg } from '../../../packages/oneUi'

export default class PlaceView extends Component {
    render() {
        return (
            <View style={placeListStyle.jdf}>
            <View style={placeListStyle.placeCtn}>
            <View style={placeListStyle.placeimg}>
                <RoundImg
                src={placeImg}
                />
            </View>
            <View style={placeListStyle.placeDeatils}>
                <Text 
                style={placeListStyle.plaName}>
                Kawempe
                </Text>
                <Text
                style={placeListStyle.jdsfk}
                >
                    Added on thur 23, Oct 2019
                </Text>
            </View>
            <View style={placeListStyle.seeplc}>
                <TouchableOpacity
                style={[placeListStyle.bubble, placeListStyle.button]}
                >
                <Text style={{fontWeight: '900'}}>GO</Text>
                </TouchableOpacity>
            </View>
            </View></View>
        )
    }
}
const placeListStyle = StyleSheet.create({
    jdsfk: {
        marginTop: 12
    },
    jdf: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5

    },
    bubble: {
    //   flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 18,
      paddingVertical: 12,
      borderRadius: 20,
    //   marginRight: 20,
    },
    button: {
      width: "100%",
      paddingHorizontal: 12,
      alignItems: 'center',
      marginHorizontal: 10,
    },
    seeplc: {
        // backgroundColor: "red",
        width: 50,
        height: 30,
        marginTop: 25,
        marginRight: 32,
        position: 'absolute',
        right: 0
    },
    placeCtn: {
        backgroundColor: '#efefef',
        height: 50,
        width: "100%",
        marginTop: 15,
        padding: 54,
        borderRadius: 14
    },
    placeimg:{
        height: 70,
        width: 70,
        marginTop: -35,
        marginLeft: -32,
    },
    plaName: {
        // backgroundColor: 'red',
        fontSize: 20,
        fontWeight: "900",
        width: 150,
        marginTop: -15
    },
    placeDeatils: {
        width: "auto",
        height: 40,
        marginTop: -50,
        marginLeft: 50,       
    }
})