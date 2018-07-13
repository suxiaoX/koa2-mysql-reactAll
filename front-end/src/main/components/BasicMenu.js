import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const renderMenuItem = ({ id, name, icon, url, ...props }) =>
  <Menu.Item key={id} style={{ textAlign: 'left' }}>
    <Link to={`/blog/${url}`}>
      {icon && <Icon type={icon} />}
      <span className="nav-text">{name}</span>
    </Link>
  </Menu.Item>


const renderSubMenu = ({ name, icon, id, list, ...props }) =>
  <Menu.SubMenu
    key={id}
    style={{ textAlign: 'left' }}
    title={
      <span>
        {icon && <Icon type={icon} />}
        <span className="nav-text">{name}</span>
      </span>
    }
    {...props}
  >
    {list && list.map(item => renderMenuItem(item))}
  </Menu.SubMenu>;

export default ({ menus, theme, mode, ...props }) =>
  <Menu theme={theme} mode={mode} {...props} style={{ minHeight: '100%' }}>
    {menus && menus.map(
      item => item.list && item.list.length ?
        renderSubMenu(item) : renderMenuItem(item)
    )}
  </Menu>;