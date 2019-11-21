import {
    createStackNavigator
  } from 'react-navigation-stack'
  import {
    createAppContainer
  } from 'react-navigation'
  import {
    LoginScreen, SignUpScreen, ResetPassword, SplashScreen
   } from '../screens'
  
  const RootStack = createStackNavigator({
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        header: null
      }
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: {
        header: null
      }
    },
  }, {
    initialRouteName: 'Login',
  })
  
  const LoggedOutNav = createAppContainer(RootStack);
  
  export default LoggedOutNav;