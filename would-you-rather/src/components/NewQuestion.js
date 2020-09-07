import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/shared'
import { Card, Form, Button, Input } from 'antd'

const NewQuestion = () => {

    const [toHome, setToHome] = useState(false)

    const dispatch = useDispatch()

    const handleSubmitQuestion = (values) => {
        dispatch(handleAddQuestion(values))
        setToHome(true)
        document.getElementById('addTab').classList.remove('ant-menu-item-selected')
        document.getElementById('addTab').getElementsByTagName('a')[0].classList.remove('active')
        document.getElementById('homeTab').classList.add('ant-menu-item-selected')
        document.getElementById('homeTab').getElementsByTagName('a')[0].classList.add('active')
    }

    if(toHome){
        return <Redirect to="/home" />
    }

    return (
        <Card title="Create New Question" style={{ width: 600 }}>
            <h4 style={{fontWeight: 300}}>Complete the question:</h4>
            <h1>Would you rather...</h1>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={handleSubmitQuestion}
            >
                <Form.Item
                    name="optionOneText"
                    rules={[{ required: true, message: 'Please input your option!' }]}
                >
                    <Input placeholder="Enter option one"/>
                </Form.Item>

                <h2 style={{textAlign: 'center'}}>OR</h2>

                <Form.Item
                    name="optionTwoText"
                    rules={[{ required: true, message: 'Please input your option!' }]}
                >
                    <Input placeholder="Enter option two" />
                </Form.Item>

                <Form.Item style={{marginTop: 10}}>
                    <Button block type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        </Card>
    )
}

export default NewQuestion