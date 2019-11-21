import React, { Component } from 'react'
import { StyleSheet, Text, View, 
    Dimensions,
    ActivityIndicator,
    AsyncStorage, Alert, TouchableOpacity } from 'react-native';
import { TextInput,  Button } from 'react-native-paper';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ErorrMsg from '../../components/app/ErorrMsg'
import { CheckForError } from '../../helpers'
import AppStyles from '../../assets/css/AppStyles'
// import { arrowLeft } from '../../assets'
import { loginAction } from '../../../server/actions';

import AuthLoader from '../../components/app/loaders/AuthLoader'

const { height, width } = Dimensions.get('window');

class LoginScreen extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            msgdata : 'sdsdsd',
            icons: {},
            text: ''
        }
        this.saveToken = async (token) => {
            try {
                await AsyncStorage.setItem('agToken', token);
              } catch (error) {
                console.log(error)
            }
        }
        this.showSpin = () => {
            <ActivityIndicator size="large" color="#0000ff" />
        }

        this.getStatus = () => {
            const { status, token } = this.props.userdata.userdata.data;
            // if(status === 200){
            //     return setTimeout(() => {
                    // this.saveToken(token)
                    // this.props.navigation.navigate('Login')
                // }, 40)
                // return 
            // }
        }
        this.onChangeEmail = (Email) => {
            const myEmail = Email.trim();
            this.setState({ email: myEmail })
        }
        this.onChangePassword = (Password) => {
            this.setState({ password: Password })
        }
        this.onPress = () => {
            const data = {
                email: this.state.email,
                password: this.state.password
            }
            this.props.loginAction(data);
        }
        this.checkIfloggedIn = () => {
            console.log(this.props.userdata.userdata.data)
            const { status } = this.props.userdata.userdata.data;
            if(status === 200){
                return (
                // <AuthLoader/>
                this.props.navigation.navigate('MainNavigation')
                )
            } return null;
            
        }
        this.navTosignup = () => {
            this.props.navigation.navigate('SignUp')
        }
    }
    
   
    render() {
        return (
            <>
            {this.checkIfloggedIn()}
           
            {
                this.getStatus()
            }
            
            <TouchableOpacity
             onPress={
                () => 
                this.props.navigation.navigate('SplashScreen')
                }
             style={lStyl.lgod}>
               <Text 
               style={lStyl.dfn}
               >back</Text>
            </TouchableOpacity>
            <View style={lStyl.thsk}>
            <Text style={lStyl.tasd}>
            Log In to continue  
            </Text>
            <View>
            {
                CheckForError(this.props.userdata.userdata)
            }
            </View>
                <View style={lStyl.jsnd}>
                    <TextInput
                    label='Email'
                    mode='outlined'
                    style={AppStyles.autinpt}
                    value={this.state.email}
                    onChangeText={this.onChangeEmail}
                    />
                    <TextInput
                    label='Password'
                    textContentType='password'
                    secureTextEntry={true}
                    mode='outlined'
                    value={this.state.password}
                    onChangeText={this.onChangePassword}
                    />
                    <View >
                    </View>
                    <View style={{
                        marginTop: 10,
                        marginLeft: '.1%'
                    }}>
                    <Button
                    style={AppStyles.aubtn}
                    mode="contained"
                    onPress={this.onPress}
                    >login</Button>
                    </View>
                    <Button
                    style={AppStyles.dhtoie}
                    mode="contained"
                    onPress={this.navTosignup}
                    >CREATE NEW ACCOUNT</Button>
                </View>
            </View>
           </>
        )
    }
}

const lStyl = StyleSheet.create({
    tasd: {
        // backgroundColor: 'red',
        textAlign: 'center',
        fontSize: 23,
        fontWeight: '900',
        paddingBottom: 12,
        fontWeight: 'bold',

    },
    erod: {
        width: width,
        textAlign: 'center'
    },
    jsnd: {
        // marginLeft: 12
        width: '100%'
    },
    thsk: {
        // backgroundColor: 'grey',
        height: 150,
        marginTop: '30%',
        width: 385,
        marginLeft: 12
        
    },
    lgod: {
        backgroundColor: 'transparent',
        marginTop: 45,
        marginLeft: 12,
        width: 70
    },
    dfn: {
        fontSize: 23,
        fontWeight: 'bold',
        fontFamily: 'Comfortaa_Bold'
    }
})


LoginScreen.propTypes = {
    userdata: PropTypes.object.isRequired
}

const MapStateToProps = state => ({
    userdata: state.user
})

export default connect(MapStateToProps, { loginAction })(LoginScreen)