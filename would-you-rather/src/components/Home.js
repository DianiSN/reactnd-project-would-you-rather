import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Home = () => {

  const authedUser = useSelector(state => {
    return state.authedUser
  });

  return (
    authedUser ?
    <div>HOME</div> :
    <Redirect to="/"/>
  )
}

export default Home
