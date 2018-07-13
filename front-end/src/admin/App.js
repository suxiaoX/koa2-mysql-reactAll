import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUserInfo } from './redux/actions/user';
import './App.css';

import PrimaryLayout from './layouts/PrimaryLayout';
@connect(
  (state) => ({ userInfo: state.userInfo }),
  (dispatch) => bindActionCreators({ getUserInfo }, dispatch)
)
class App extends Component {
  render() {
    return (
      <div className="App">
        Admin
      </div>
    );
  }
}

export default App;
