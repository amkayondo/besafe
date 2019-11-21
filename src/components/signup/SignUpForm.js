import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Input, Button } from 'galio-framework';
import AppStyles from '../../assets/css/AppStyles'

export default class SignUpForm extends Component {
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
            <ScrollView>
                <Text style={AppStyles.lgnlogo}>agent24</Text>
                <View>
                    <Text style={AppStyles.smallHding}>Create account</Text>
                </View>
                <View style={signupStyle.layoutInputs}>
                <Input style={AppStyles.input}
                color="#000"
                placeholder="Frist Name" />
                <Input style={AppStyles.input}
                color="#000"
                placeholder="Other Name" />
                <Input style={AppStyles.input}
                color="#000"
                placeholder="Email" />
                <Input style={AppStyles.input}
                color="#000"
                placeholder="Username" />
                <Input style={AppStyles.input}
                color="#000"
                placeholder="Phone Number" 
                keyboardType={'numeric'}
                />
                <Input style={AppStyles.input} 
                color="#000"
                placeholder="Password" password/>
                <Button
                style={signupStyle.lgbtn}
                >Create new account</Button>
                </View>
                <View style={signupStyle.layoutInputs}>
                <Button
                style={signupStyle.crtbtn}
                >Already Have an account</Button>
                </View>
            </ScrollView>
        )
    }
}
const signupStyle = StyleSheet.create({
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