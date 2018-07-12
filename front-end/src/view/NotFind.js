import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Icon } from 'antd';

@withRouter
export default class extends Component {
  render() {
    let { pathname } = this.props.location;
    return (
      pathname === '/' ?
        '' :
        <div>
          <div><Icon style={{ fontSize: 60, color: 'red' }} type="file-text" /></div>
          <p>页面不存在，<Link to={'/'}>回到首页</Link></p>
        </div>
    )
  }
}