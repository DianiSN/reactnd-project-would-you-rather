import React, { useState } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleSetAuthedUser } from '../actions/authedUser'
import logo from '../app-logo.svg'
import { Card, Select, Button, Space } from 'antd'

const Login = (props) => {

  const { Option } = Select
  const dispatch = useDispatch()
  const [authedUser, setAuthedUser] = useState(null)
  const [disabled, setDisabled] = useState(true)

  const users = useSelector(state => {
    return {
      users: state.users,
      userIds: Object.keys(state.users),
    }
  },
  shallowEqual);

  const onUserChange = (userId) => {
    if(userId){
      setAuthedUser(userId)
      setDisabled(false)
    }else{
      setDisabled(true)
    }
  }

  const toLocation = (e) => {
    e.preventDefault()
    dispatch(handleSetAuthedUser(authedUser))
    console.log(props.history.location.pathname);
    if(props.history.location.pathname === '/'){
      props.history.push('/home')
    }else{
      props.history.push(`${props.history.location.pathname}`)
    }
  }

  return (
      <Card title={<div><div className="text-center">Welcome to Would You Rather...?</div><div className="login-sub text-center">Please log-in to continue</div></div>} style={{ width: 400, height: 450}}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <img src={logo} className="App-logo" alt="logo" style={{ width: '70%', margin: '0 0 10px 45px' }}/>
          <Select placeholder="Select a user" style={{ width: '100%' }} onChange={onUserChange}>
            {
              users.userIds.map(userId => (
                <Option key={userId} value={userId}>{users.users[userId].name}</Option>
              ))
            }
          </Select>
          <Button type="primary" style={{ width: '100%' }} disabled={disabled} onClick={toLocation}>Log In</Button>
        </Space>
      </Card>
  )

}

export default withRouter(Login)
