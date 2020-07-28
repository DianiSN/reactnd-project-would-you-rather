import React, { useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Nav from './Nav'
import Login from './Login'
import Home from './Home'
import Leaderboard from './Leaderboard'
import { Layout } from 'antd'
import { handleInitialData } from '../actions/shared'

const App = () => {
  const { Content, Footer } = Layout
  const dispatch = useDispatch()
  const loggedOut = useSelector(state => {
    return state.authedUser === null
  });

  useEffect(() => {
    dispatch(handleInitialData())
  },[dispatch])

  return (
    <Router>
      <Fragment>
        <Layout className="layout" style={{minHeight:"100vh"}}>
          <Nav />
          <Content className="center-layout" style={{ padding: '30px 50px', marginTop: 64}}>
            {
              loggedOut === true
              ? <div>
                  <Route path="/" exact component={Login} />
                  <Redirect to="/"/>
                </div>
              : <div>
                  <Route path="/" exact component={Login} />
                  <Route path="/home" exact component={Home} />
                  <Route path="/leaderboard" exact component={Leaderboard} />
                </div>
            }
          </Content>
          <Footer style={{ textAlign: 'center' }}>React Udemy ND Project 2020 Created by <strong>Diana Sanabria Nieto</strong></Footer>
        </Layout>
      </Fragment>
    </Router>
  )
}

export default App

//<Route path="/question/:id" exact component={QuestionView} />
