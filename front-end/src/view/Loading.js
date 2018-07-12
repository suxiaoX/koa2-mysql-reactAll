import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Icon } from 'antd';

@withRouter
export default class extends Component {
  render() {
    return (
      <div>
        <Icon type="loading" />
      </div>
    )
  }
}