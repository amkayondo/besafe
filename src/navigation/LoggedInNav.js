import React from 'react'

import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import Icon from 'react-native-ionicons'
import { HomeScreen, PlacesScreen, 
  NetworkScreen, NotificationScreen,
  SettingsScreen
} from '../screens'

const LoggedInNav = createBottomTabNavigator({
  Home: { 
    screen: HomeScreen,
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" color={tintColor} size={25} />
    )
    },
},
Networks: { 
  screen: NetworkScreen,
  navigationOptions: {
    gesturesEnabled: false,
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <Icon name="hand" color={tintColor} size={25} />
  )
  },
},
Places: { screen: PlacesScreen,
  navigationOptions: {
    gesturesEnabled: false,
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <Icon name="map" color={tintColor} size={25} />
  )
  },
},
Notifications: { screen: NotificationScreen,
  navigationOptions: {
    gesturesEnabled: false,
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <Icon name="notifications" color={tintColor} size={25} />
  )
  },
},
Profile: { screen: SettingsScreen,
  navigationOptions: {
    gesturesEnabled: false,
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <Icon name="contact" color={tintColor} size={25} />
  )
  },
},
});


export default createAppContainer(LoggedInNav);