import React, { useState, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Layout, Menu, Avatar, Button } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'

const Nav = () => {

  const { Header } = Layout
  const [activeKey, setActiveKey] = useState('home')
  const user = useSelector(state => {
    if(state.authedUser){
      return state.users[state.authedUser]
    }else{
      return false
    }
  });

  const onPageChange = (e) => {
    setActiveKey(e.key)
  }

  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      {
          user &&
          <Fragment>
            <div className="logo">
                <Avatar src={user.avatarURL}/>
                <span className="user-name">{user.name}</span>
                <Button type="text" style={{ color: '#fff' }}>
                  <LogoutOutlined />
                </Button>
            </div>

            <Menu theme="dark" mode="horizontal" onClick={onPageChange} selectedKeys={activeKey}>
              <Menu.Item key="home">
                <NavLink to='/home' exact>
                  Home
                </NavLink>
              </Menu.Item>
              <Menu.Item key="2">New Question</Menu.Item>
              <Menu.Item key="3">
                <NavLink to='/leaderboard' exact>
                  Leader Board
                </NavLink>
              </Menu.Item>
            </Menu>
          </Fragment>
      }
    </Header>
  )
}

export default Nav
