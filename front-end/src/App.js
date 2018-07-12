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
  async componentWillMount() {
    await this.props.getUserInfo();
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.history.location.pathname !== this.props.location.pathname && this.props.history.location.pathname === '/blog/user') {
      this.props.getUserInfo()
    }
  }
  render() {
    const { isLogin, isFetching } = this.props.userInfo;
    return (
      <div className="App">
        <PrimaryLayout isLogin={isLogin} isFetching={isFetching} />
      </div>
    );
  }
}

export default App;
