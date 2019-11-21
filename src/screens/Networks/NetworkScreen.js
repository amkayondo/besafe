import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import NetworkList from '../../components/networks/NetworkList'
import AddNewNetwork from '../../components/networks/AddNewNetwork'
import SwipeablePanel from 'rn-swipeable-panel';
import { userProfilePhoto } from '../../constants/imgConstants'
import { SearchInput, RoundImg, Button } from '../../packages/oneUi'

export default class NetworksScreen extends Component {
  constructor(props) {
        super(props);
        this.state = {
            swipeablePanelActive: false
        };
    }

    onMagicTap = () => {
      return Alert.alert('Hello am profile')
    }

    // closePanel = () => {
    //     this.setState({ swipeablePanelActive: false });
    // };
  onPress = () => {
    //   this.setState({ swipeablePanelActive: true })
  }
  render() {
      return (
        <View>
        <View style={netStyle.ntCtn}>
          <View style={netStyle.nwtnavtctn}>
            <View>
            <Text style={netStyle.nttptext}>Communities</Text>
            <View 
            style={netStyle.usrImg}
            onTouchStart={this.onMagicTap}
            >
            <RoundImg
            src={userProfilePhoto}
            />              
            </View>
            <Button
            // onPress={this.onPress}
            style={netStyle.hbtn}
            >
              <Text>New</Text>
            </Button>
            </View>
            <View style={netStyle.srINpt}>
            <SearchInput
            placeholder="Search Networks"
            />
            </View>
          </View>
          <NetworkList/>
        </View>
        <SwipeablePanel
          fullWidth
          isActive={this.state.swipeablePanelActive}
          onClose={this.closePanel}
          onPressCloseButton={this.closePanel}
        >
					<View>
            <AddNewNetwork/>
          </View>
				</SwipeablePanel>
        </View>
      )
  }
}

const netStyle = StyleSheet.create({
  ntCtn: {
    // backgroundColor: 'red',
    // height: '23%',
    marginTop: 20,
    // padding: 5
  },
  nwtnavtctn:{
    // backgroundColor: 'red',
    // marginTop: 23,
    height: 140,
    zIndex: 0
    // marginLeft: 12
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
    // position: "absolute",
    // left: 0,
    width: 387,
    borderRadius: 7,
    marginTop: 20,
    padding: 54
  },
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
  }
})
