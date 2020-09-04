import React from 'react'
import { Radio, Button } from 'antd'

const CardPoll = (props) => {

    const { options } = props
    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px'
    }
    return (
        <div>
            <h2>Would You Rather</h2>
            <Radio.Group>
                <Radio style={radioStyle} value={1}>
                {
                    options[0].text
                }
                </Radio>
                <Radio style={radioStyle} value={2}>
                {
                    options[1].text
                }
                </Radio>
            </Radio.Group>
            <Button type="primary" style={{ marginTop: 20 }} block>Submit</Button>
        </div>
    )
}

export default CardPoll