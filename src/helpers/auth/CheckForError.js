import { Text, StyleSheet, Dimensions } from 'react-native'
import AuthMssg from '../../components/app/ErorrMsg'

import React from 'react'

const { height, width } = Dimensions.get('window');

const authMsg = (data) => {
    const { error, message } = data.data;
    if(error){
        return <AuthMssg
        style={authStyle.err}
        >
            {error}
        </AuthMssg>
    }
       return <AuthMssg
        style={authStyle.success}
        >
            {message}
        </AuthMssg>
}

const authStyle = StyleSheet.create({
    err: {
        color: 'red',
        width: width,
        textAlign: 'center',
        marginTop: 6
    },
    success: {
        color: 'green',
        width: width,
        textAlign: 'center',
        marginTop: 6
    }
})

export default authMsg;
