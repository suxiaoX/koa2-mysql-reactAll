import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import BasicMenu from '../../components/BasicMenu';
const { Sider } = Layout;

const menus = [
  {
    name: '首页',
    id: '001',
    icon: 'home',
    url: 'home'
  },
  {
    name: '文章分类',
    id: '002',
    icon: 'layout',
    list: [
      {
        name: 'Node',
        id: '0021',
        url: 'category/node'
      }
    ]
  },
  {
    name: '个人标签',
    id: '003',
    icon: 'tag-o',
    url: 'tag'
  },
  {
    name: '个人中心',
    id: '004',
    icon: 'user',
    url: 'user'
  }
]

export default () =>
  <Sider style={{ overflowY: 'scroll', background: '#fff' }}>
    <div className="logo"></div>
    <BasicMenu
      menus={menus}
      theme="light"
      mode="inline"
    />
  </Sider>

// export default withRouter(LeftMenu);

