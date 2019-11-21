import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

const mapStyles = StyleSheet.create({
    tpvg: {
        position: 'absolute',
        // backgroundColor: 'red',
        top: 15,
        zIndex: 1,
        width: '100%'
    },
    ntpBtn: {
         width: 120,
         backgroundColor: 'rgba(115, 115, 115, 0.36)',
         borderRadius: 30,
         position: 'absolute',
         right: 10,
    },
    cbtn: {
        // position: 'absolute',
        backgroundColor: 'rgba(115, 115, 115, 0.36)',
        borderRadius: 50,
        width: 120,
        fontSize: 18,
        height: 40,
        left: 10,
        color: 'rgb(118, 0, 255)'
    }
});

export default mapStyles;
