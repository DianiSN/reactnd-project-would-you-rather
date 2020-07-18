import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Nav from './Nav'
import Login from './Login'
import { Layout } from 'antd'
import { handleInitialData } from '../actions/shared'


const App = () => {
  const { Content, Footer } = Layout
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(handleInitialData())
  }, [])

  return (
    <Layout className="layout" style={{minHeight:"100vh"}}>
    <Nav />
    <Content className="center-layout" style={{ padding: '30px 50px', marginTop: 64}}>
      <Login/>
    </Content>
    <Footer style={{ textAlign: 'center' }}>React Udemy ND Project 2020 Created by <strong>Diana Sanabria Nieto</strong></Footer>
  </Layout>
  )
}

export default App

//// <div className="site-layout-content"  style={{ padding: 24, minHeight: 550 }}>Content</div>
