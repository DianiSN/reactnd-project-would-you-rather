import React from 'react'
import logo from '../app-logo.svg'
import { Card, Select, Button, Space } from 'antd'

const Login = () => {

  const { Option } = Select

  return (
      <Card title={<div><div className="text-center">Welcome to Would you rather ...?</div><div className="login-sub text-center">Please log-in to continue</div></div>} style={{ width: 400, height: 450}}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <img src={logo} className="App-logo" alt="logo" style={{ width: '70%', margin: '0 0 10px 45px' }}/>
          <Select placeholder="Select a user" style={{ width: '100%' }}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </Select>
          <Button type="primary" style={{ width: '100%' }}>Log In</Button>
        </Space>
      </Card>
  )

}

export default Login
