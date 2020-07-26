import React from 'react'
import { Card, Button } from 'antd'

const QuestionCard = (props) => {
  const { authorName, authorAvatar, question, } = props

  return (
    <Card title={`${authorName} asks...`} style={{ width: '100%' }}>
      <div className="question-info">
        <img src={authorAvatar} alt="author avatar" style={{ width: '30%' }}></img>
        <div>
          <h4> Would you rather</h4>
          <div>{question.optionOne.text.substring(0,21)}...</div>
          <Button block style={{marginTop: 10}}>Vew Poll</Button>
        </div>
      </div>

    </Card>
  )
}

export default QuestionCard
