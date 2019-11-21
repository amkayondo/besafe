import React, { Component } from 'react'
import { View, Text, StyleSheet, Alert, ScrollView, Image } from 'react-native'
import { SearchInput, RoundImg, Button } from '../../packages/oneUi'
import { userProfilePhoto } from '../../constants/imgConstants'
import NotifyList from '../../components/notifications/NotifyList'
import { plussymbol } from '../../assets'

export default class NotificationScreen extends Component {
    constructor(){
        super()
        this.state = {
            selectedIndex: '',
            places: []
        }
        this.onIndexChange = (selectedIndex) => {
            this.setState({ selectedIndex });
          };
        
        this.shouldLoadPageContent = (index) => {
            return index === this.state.selectedIndex;
        };
        this.onMagicTap = () => {
          return Alert.alert('Hello am profile')
      }
    }
    render() {
        return (
            <View style={plceStyle.ntCtn}>
            <View>
            <Text style={plceStyle.nttptext}>Notifications</Text>
            <View 
            style={plceStyle.usrImg}
            onTouchStart={this.onMagicTap}
            >
            <RoundImg
            src={userProfilePhoto}
            />              
            </View>
             <ScrollView style={plceStyle.sctol}>
            <NotifyList/>
            <NotifyList/>
             </ScrollView>
            </View>
            </View>
        )
    }
}
const plceStyle = StyleSheet.create({
  hbtn: { 
    backgroundColor: '#efefef',
    marginTop: 23,
    color: 'red',
    borderRadius: 23,
    // marginLeft: 12,
    position: 'absolute',
    right: 70,
    marginRight: 12,
    marginTop: 3,
    width: 100,
    height: 50,
    fontWeight: '900'
  },
  sctol: {
    height: "90%",
    marginTop: 30,
    // backgroundColor: 'red',
  },
  usrImg: {
    backgroundColor: 'green',
    // marginLeft: 2,
    height: 50,
    width: 50,
    position:"absolute",
    right: 12,
    borderRadius: 50
    // top: 

  },
  srINpt: {
    paddingLeft: 12,
    paddingRight: 12,
    marginTop: 30,
    height: 76
  },
  plsd: {
      width: '100%',
      backgroundColor: 'green',
      marginLeft: 2,
      height: 400,
      marginTop: 12,
  },
  ntCtn: {
    marginTop: 20,
    // padding: 5,
    marginLeft: 0 
  },
  nwtnavtctn:{
    marginTop: 23,
    marginLeft: 12
  },
  nttptext: {
    fontSize: 30,
    fontFamily: 'sans-serif',
    fontWeight: "900",
    marginLeft: 12
  },
  natodiv: {
    backgroundColor: 'grey',
    height: 50,
    width: 387,
    borderRadius: 7,
    marginTop: 20,
    padding: 54
},

})