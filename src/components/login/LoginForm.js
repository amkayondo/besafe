import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button } from 'galio-framework';
import AppStyles from '../../assets/css/AppStyles'

export default class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData:{
                email: '',
                password: ''
            }
        }
        
    }
    render() {
        return (
            <View>
                <Text style={AppStyles.lgnlogo}>agent24</Text>
                <View>
                    <Text style={AppStyles.smallHding}>Login to continue</Text>
                </View>
                <View style={loginForm.layoutInputs}>
                <Input style={AppStyles.input}
                color="#000"
                placeholder="Email" />
                <Input style={AppStyles.input} 
                color="#000"
                placeholder="Password" password/>
                <Button
                style={loginForm.lgbtn}
                >Login</Button>
                </View>
                <View style={loginForm.layoutInputs}>
                <Button
                style={loginForm.crtbtn}
                onPress={
                    () => 
                    this.props.navigation.navigate('Signup')
                }
                >Create new account</Button>
                </View>
            </View>
        )
    }
}
const loginForm = StyleSheet.create({
    layoutInputs: {
        padding: 12
    },
    lgbtn:{
            backgroundColor: '#9d00ff',
            marginTop: 10,
            borderRadius: 15,
            fontWeight: '900',
            width: '100%',
            height: 49,
    },
    crtbtn: {
        backgroundColor: 'grey',
        color:'yellow',
        borderRadius: 15,
        fontWeight: '900',
        width: '100%',
        height: 49,
    }
})