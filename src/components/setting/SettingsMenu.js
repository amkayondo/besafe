import React, { Component } from 'react'
import { View, StyleSheet, Alert, Text, TouchableOpacity } from 'react-native'
import { placeImg } from '../../constants/imgConstants'
import { RoundImg } from '../../packages/oneUi'
import { Button } from 'react-native-paper'
import { connect } from 'react-redux';


export class NotifyList extends Component {
    constructor(props){
        super(props);
        this.state = {}
        this.backHome = () => {
            Alert.alert("under development")
        }
    }
    render() {
        return (
            <View>
                {
                    console.log(this.props)
                }
            <TouchableOpacity style={seetingsStyle.jdf}>
            <View style={seetingsStyle.placeCtn}>
            <View style={seetingsStyle.userImgp}>
                <RoundImg
                src={placeImg}
                />
               </View>
            <View style={seetingsStyle.placeDeatils}>
                <Text 
                style={seetingsStyle.plaName}>
                Am Test User
                </Text>
                <Text
                style={seetingsStyle.jdsfk}
                >
                    General Settings, Password Reset
                </Text>
            </View>
            </View></TouchableOpacity>
            <View style={seetingsStyle.jkand}>
            <View
            style={seetingsStyle.sansdfd}
            >

            <Button
            onPress={
                this.backHome
            }
            style={seetingsStyle.bsdf}
            >LOGOUT</Button>
            </View>
            </View>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        SettingsMenu: state
    };
}
function mapDispatchToProps() {
    return {};
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotifyList);


const seetingsStyle = StyleSheet.create({
    bsdf: {
        backgroundColor: 'grey'
    },
    sansdfd: {
        backgroundColor: '#efefef',
        height: 400,
        width: "100%",
        marginTop: 15,
        borderRadius: 14
    },
    jkand: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5
    },
    userImgp:{
        height: 70,
        width: 70,
        marginTop: 15,
        marginLeft: 15,
    },
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
        height: 100,
        width: "100%",
        marginTop: 15,
        borderRadius: 14
    },
    plaName: {
        // backgroundColor: 'red',
        fontSize: 20,
        fontWeight: "900",
        width: 150,
        marginTop: -15
    },
    placeDeatils: {
        width: "70%",
        // backgroundColor: 'red',
        height: '60%',
        marginTop: 23,
        marginLeft: 100,
        position: 'absolute'
    }
})