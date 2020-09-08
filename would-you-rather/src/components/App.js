import React, { useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import Login from './Login'
import Home from './Home'
import Leaderboard from './Leaderboard'
import QuestionView from './QuestionView'
import NewQuestion from './NewQuestion'
import LogOut from './LogOut'
import Page404 from './Page404'
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
  })

  return (
    <Router>
      <Fragment>
        <Layout className="layout" style={{minHeight:"100vh"}}>
          <Nav/>
          <LoadingBar style={{marginTop: 65, backgroundColor: '#1890ff'}}/>
          <Content className="center-layout" style={{ padding: '30px 50px', marginTop: 64}}>
            {
              loggedOut === true
              ?
                <Login/>
              : 
              <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/home" exact component={Home} />
                <Route path="/add" exact component={NewQuestion} />
                <Route path="/question/:id" exact component={QuestionView} />
                <Route path="/leaderboard" exact component={Leaderboard} />
                <Route path="/logout" exact component={LogOut} />
                <Route path="/notFound" exact component={Page404} />
                <Route component={Page404} />
              </Switch>
            }
          </Content>
          <Footer style={{ textAlign: 'center' }}>React Udemy ND Project 2020 Created by <strong>Diana Sanabria Nieto</strong></Footer>
        </Layout>
      </Fragment>
    </Router>
  )
}

export default App

