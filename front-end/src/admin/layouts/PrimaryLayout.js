import React, { Component } from 'react';
import { Switch, BrowserRouter, Redirect, Route, Router } from 'react-router-dom';
import routes from '../router/index';

import RHeader from '../view/Header/Header'
import RFooter from '../view/Footer/Footer'
import LeftMenu from '../view/LeftMenu/Menu'
import User from '../view/User/index'
import PrivateRoute from '../Hoc/PrivateRoute'

import { Layout } from 'antd';

const { Content } = Layout;

const primaryRoutes = [];
routes.filter(({ path }) => path !== '/blog/user').forEach(({ path, component, children }) => {
  // routes.forEach(({ path, component, children }) => {
  if (children && children.length) {
    // 扁平化
    children.forEach(subRoute => {
      primaryRoutes.push({
        path: `${path}${subRoute.path}`,
        component: subRoute.component
      })
    })
  } else {
    primaryRoutes.push({
      path,
      component: component
    })
  }
})
export default class PrimaryLayout extends Component {
  render() {
    const { isLogin, isFetching } = this.props;
    return (
      <div className="App">
        <Layout>
          <RHeader />
          <Content style={{ padding: '0 50px' }}>
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
              <LeftMenu />
              <Content style={{ padding: '0 24px', minHeight: 280 }}>
                <Switch>
                  <PrivateRoute isLogin={isLogin} isFetching={isFetching} path="/blog/user" component={User} />
                  {
                    primaryRoutes.map(route =>
                      <Route exact key={route.path || 'notfind'} {...route} />
                    )
                  }
                </Switch>
              </Content>
            </Layout>
          </Content>
          <RFooter />
        </Layout>
      </div>
    );
  }
}
