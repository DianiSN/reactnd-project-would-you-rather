import React, {Fragment} from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Layout, Menu, Avatar, Result, Button } from 'antd'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'

const Nav = () => {

  const { Header } = Layout

  const userName = useSelector(state => {
    if(state.authedUser){
      return state.users[state.authedUser].name
    }else{
      return false
    }
  });

  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      {
          userName &&
          <Fragment>
            <div className="logo">
                <Avatar icon={<UserOutlined />} />
                <span className="user-name">{userName}</span>
                <Button type="text" style={{ color: '#fff' }}>
                  <LogoutOutlined />
                </Button>
            </div>

            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="1">
                <NavLink to='/home' exact>
                  Home
                </NavLink>
              </Menu.Item>
              <Menu.Item key="2">New Question</Menu.Item>
              <Menu.Item key="3">Leader Board</Menu.Item>
            </Menu>
          </Fragment>
      }
    </Header>
  )
}

export default Nav
