import React from 'react'
import { NavLink } from 'react-router-dom'
import { Layout, Menu, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const Nav = () => {

  const { Header } = Layout

  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo">
          <Avatar icon={<UserOutlined />} />
          <span className="user-name">Diana</span>
      </div>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">New Question</Menu.Item>
        <Menu.Item key="3">Leader Board</Menu.Item>
      </Menu>
    </Header>
  )
}

export default Nav
