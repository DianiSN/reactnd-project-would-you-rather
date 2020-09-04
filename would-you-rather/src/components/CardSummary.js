import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'antd'

const CardSummary = (props) => {

    const { option, questionId } = props

    const toQuestion = (e, id) => {
        e.preventDefault()
        props.history.push(`/question/${id}333`)
    }

    return (
        <div>
          <h4> Would you rather...</h4>
          <div>{option}...</div>
          <Button block style={{marginTop: 10}} onClick={(e) => toQuestion(e, questionId)}>View Poll</Button>
        </div>
    )
}

export default withRouter(CardSummary)