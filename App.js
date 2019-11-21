import NavSwitcher from './src/navigation'
import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import store from './server/store'

export default class App extends Component {
    render() {
      return (
        <>
        <Provider store={store}>
        <NavSwitcher/>
        </Provider>
        </>
      )
    }
  }
  