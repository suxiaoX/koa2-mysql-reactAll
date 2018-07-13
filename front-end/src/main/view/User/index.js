import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserInfo } from '../../redux/actions/user';
import { Link } from 'react-router-dom';
import Login from './Login';
import user from '../../api/user';

@connect(
  (state) => ({ userInfo: state.userInfo }),
  (dispatch) => bindActionCreators({ getUserInfo }, dispatch)
)

export default class User extends React.Component {
  /* async componentWillMount() {
    await this.props.getUserInfo();
    // if (!this.props.userInfo.isFetching && JSON.stringify(this.props.userInfo.data === '{}')) {
    //   this.props.history.push('/login')
    // }
    console.log(this.props.userInfo)
  } */

  /* componentWillReceiveProps(nextProps) {
    if (this.props.history.location.pathname !== this.props.location.pathname) {
      this.props.getUserInfo()
    }
  } */
  logout = () => {
    user.logout().then(res => {
      if (!res.code) {
        this.props.history.push('/login')
      }
    })
  }
  render() {
    const { isFetching, data } = this.props.userInfo;
    // const user = data[0];
    return (
      <div style={{ textAlign: 'center' }}>
        <Button onClick={this.logout}>退出</Button>
        {/* <Button>
          <Link to='/login'>登陆</Link>
        </Button>
        <Button>
          <Link to='/register'>注册</Link>
        </Button> */}
        {/* {
          (!isFetching && JSON.stringify(this.props.userInfo.data !== '{}')) &&
          <div>
            <p>name: {data.data[0].name}</p>
            <Button onClick={this.logout}>退出</Button>
          </div>
        } */}
      </div>
    )
  }
}