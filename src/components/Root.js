import React, {Component} from 'react';
import {init as firebaseInit} from 'javascripts/firebase';
import {browserHistory} from 'react-router';
import Routes from './routes';
import ConfigureStore from './ConfigureStore';
import {Provider} from 'react-redux';

export default class Root extends Component {
  constructor(props) {
    super(props)
    firebaseInit()
    this.store = ConfigureStore()
  }
render() {
    return (
      <Provider store={this.store}>
        <Routes history={browserHistory}/>
      </Provider>
      
    )
  }
}