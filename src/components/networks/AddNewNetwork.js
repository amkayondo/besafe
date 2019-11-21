import React, { Component } from 'react'
import { View, StyleSheet,  Input, Button, Text, ScrollView, Alert, TextInput } from 'react-native'
// import { Input, Button, Text } from 'galio-framework';
import Textarea from 'react-native-textarea';

export default class AddNewNetwork extends Component {
    constructor(){
        super()
        this.state = {
            value: 'Add a Network Description'
        }
    }
    onPress = () => {
        Alert.alert('Network Created')
    }
    render() {
        return (
            <View style={ntStyles.ntctn}>
                <Text style={ntStyles.nthd}>Add New Network Details</Text>
                <View style={ntStyles.inptC}>
                <Input
                color="#000"
                style={ntStyles.intpt}
                placeholder="Network Name" />
                <Input
                color="#000"
                style={ntStyles.intpt}
                placeholder="Location" />
                <View style={ntStyles.container}>

                <Textarea
                containerStyle={ntStyles.textareaContainer}
                style={ntStyles.textarea}
                onChangeText={this.onChange}
                defaultValue={this.state.text}
                // maxLength={120}
                placeholder={'Add a description for your network'}
                placeholderTextColor={'#000'}
                underlineColorAndroid={'transparent'}
                />

                </View>
                <View style={ntStyles.termsCtn}>
                    <Text style={ntStyles.trnsDetails}>
                    By Pressing Create 
                    Network means that you
                    agree to all the terms and conditions
                    of Agent 24 Networks</Text>
                </View>
                <Button
                title="Create Network"
                style={ntStyles.ntbtn}
                onPress={this.onPress}
                />
                </View>
            </View>
        )
    }
}

const ntStyles = StyleSheet.create({
    termsCtn: {
        fontWeight: "900",
        padding: 12
    },
    trnsDetails: {
        fontSize: 12,
        fontFamily: 'sans-serif',
        fontWeight: "900",
        textAlign: 'center'
    },
    ntctn: {
        marginTop: 32,
    },
    nthd: {
        fontSize: 27,
        fontFamily: 'sans-serif',
        fontWeight: "900",
        textAlign: 'center'
    },
    intpt:{
        height: 56,
        fontSize: 12,
        fontWeight: "900",
        borderRadius: 50,
    },
    inptC: {
        // backgroundColor: 'orange',
        width: 350,
        marginLeft: 25,
        marginTop: 23,
    },
    ntbtn: {
        width: '100%',
        height: 56,
        borderRadius: 50,
        marginTop: 12,
        backgroundColor: 'grey'
    },
    container: {
        flex: 1,
        padding: 8,
        borderRadius: 23,
        marginTop: 12,
        // backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'grey',
        borderWidth: 1
      },
      textareaContainer: {
        height: '100%',
        padding: 5,
        borderColor: 'red',
        backgroundColor: '#fff',
      },
      textarea: {
        textAlignVertical: 'top',  // hack android
        height: 170,
        fontSize: 14,
        color: '#333',
      },
      crBtn: {
          backgroundColor: 'grey'
      }
})