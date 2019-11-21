import React from 'react';
import { createAppContainer,
    createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import BottomTabNavigation from './LoggedInNav';
import LoggedOutNav from './LoggedOutNav'
import AppsNavigation from './AppsNavigation'


const state = {
    islogged: false
}

const MainNavigation = createStackNavigator(
    {
        BottomTabNavigation: {
            screen: BottomTabNavigation,
            navigationOptions: {
                gesturesEnabled: false
            }
        },
        AppsNavigation: {
            screen: AppsNavigation,
            navigationOptions: { gesturesEnabled: false, header: null }
        }
        
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
);

const AppNavSwitcher = createAppContainer(createSwitchNavigator({
    MainNavigation: {
        screen: MainNavigation,
        navigationOptions: { gesturesEnabled: false, header: null }
    },
    LoggedOutNav: {
        screen: LoggedOutNav,
        navigationOptions: { gesturesEnabled: false }
    }
},{
    initialRouteName: state.islogged ? "MainNavigation" : "LoggedOutNav"
},
{
    mode: 'modal',
    headerMode: 'none'
}
))

const NavSwitcher = AppNavSwitcher;
export default NavSwitcher;
