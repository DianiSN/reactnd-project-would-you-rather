import React from 'react'
import { Card, Form, Button, Input } from 'antd'

const NewQuestion = () => {
    return (
        <Card title="Create New Question" style={{ width: 600 }}>
            <h4 style={{fontWeight: 300}}>Complete the question:</h4>
            <h1>Would you rather...</h1>
            <Form
                name="basic"
                initialValues={{ remember: true }}
            >
                <Form.Item
                    name="optionOne"
                    rules={[{ required: true, message: 'Please input your option!' }]}
                >
                    <Input placeholder="Enter option one"/>
                </Form.Item>

                <h2 style={{textAlign: 'center'}}>OR</h2>

                <Form.Item
                    name="optionTwo"
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