import React, { Component } from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
// import NetworkCards from './NetworkCards';

export default class NetworkList extends Component {
    render() {
        return (
            <ScrollView>
            <View>
                <View style={{ marginTop: 19, fontWeight: '900', marginLeft: 9}}>
                    <Text style={{fontSize: 30,
                            fontFamily: 'sans-serif',
                            fontWeight: "900",}}>By You</Text>
                </View>
                 <View style={netStyle.natodiv}></View>
                 <View style={netStyle.natodiv}></View>
                 <View style={netStyle.natodiv}></View>
                 <View style={netStyle.natodiv}></View>
                 <View style={netStyle.natodiv}></View>
                
                 <View style={{ marginTop: 19, fontWeight: 900,}}>
                    <Text style={{fontSize: 30,
                            fontFamily: 'sans-serif',
                            fontWeight: "900", marginLeft: 9}}>With You</Text>
                </View>

                 <View style={netStyle.natodiv}></View>
                 <View style={netStyle.natodiv}></View>
                 <View style={netStyle.natodiv}></View>
                 
                 <View style={netStyle.natodiv}></View>
                 <View style={netStyle.natodiv}></View>
                 <View style={netStyle.natodiv}></View>
                 <View style={netStyle.natodiv}></View>
                 <View style={netStyle.natodiv}></View>
            </View>
            </ScrollView>
        )
    }
}
const netStyle = StyleSheet.create({
    natodiv: {
      backgroundColor: '#E1ECF4',
      height: 50,
      // position: "absolute",
      // left: 0,
      width: 387,
      borderRadius: 7,
      marginTop: 20,
      padding: 54,
      marginLeft: 9
  }
  })