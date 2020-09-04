import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { handleAnswerQuestion } from '../actions/users'
import { Radio, Button } from 'antd'

const CardPoll = (props) => {

    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px'
    }

    const { options, questionId } = props

    const dispatch = useDispatch()


    const [toQuestion, setToQuestion] = useState(false)
    const [answer, setAnswer] = useState(null)

    const authedUser = useSelector(state => {
        return state.authedUser
    })

    const handleSetAnswer = (e) => {
        setAnswer(e.target.value)
    }

    const handleSelectAnswer = (e) => {
        e.preventDefault()
        dispatch(handleAnswerQuestion({
            authedUser,
            qid: questionId,
            answer
        }))
        setToQuestion(true)
    }

    if(toQuestion){
        return <Redirect to={`/question/${questionId}`} />
    }

    return (
        <div>
            <h2>Would You Rather</h2>
            <Radio.Group>
                <Radio style={radioStyle} value={'optionOne'} onChange={handleSetAnswer}>
                {
                    options[0].text
                }
                </Radio>
                <Radio style={radioStyle} value={'optionTwo'} onChange={handleSetAnswer}>
                {
                    options[1].text
                }
                </Radio>
            </Radio.Group>
            <Button type="primary" style={{ marginTop: 20 }} disabled={answer == null} onClick={handleSelectAnswer} block>Submit</Button>
        </div>
    )
}

export default CardPoll