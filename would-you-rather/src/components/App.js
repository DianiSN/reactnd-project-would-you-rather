import React, { useEffect, Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './Nav'
import Login from './Login'
import Home from './Home'
import { Layout } from 'antd'
import { handleInitialData } from '../actions/shared'


const App = () => {
  const { Content, Footer } = Layout
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleInitialData())
  },[dispatch])

  return (
    <Router>
      <Fragment>
        <Layout className="layout" style={{minHeight:"100vh"}}>
          <Nav />
          <Content className="center-layout" style={{ padding: '30px 50px', marginTop: 64}}>
            <Route path="/" exact component={Login} />
            <Route path="/home" exact component={Home} />
          </Content>
          <Footer style={{ textAlign: 'center' }}>React Udemy ND Project 2020 Created by <strong>Diana Sanabria Nieto</strong></Footer>
        </Layout>
      </Fragment>
    </Router>
  )
}

export default App

//// <div className="site-layout-content"  style={{ padding: 24, minHeight: 550 }}>Content</div>
