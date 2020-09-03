import React from 'react'
import CardSummary from './CardSummary'
import CardPoll from './CardPoll'
import CardResult from './CardResult'
import { Card } from 'antd'


const QuestionCard = (props) => {
  const { cardType, authorName, authorAvatar, question } = props

  let cardTitle = `${authorName} asks...`
  let cardData = null
  let cardWidth = 600

  switch(cardType){
    case 'summary':
      cardData = <CardSummary option={question.optionOne.text.substring(0,21)} questionId={question.id}/>
      cardWidth = '100%'
      break
    case 'poll':
      cardData = <CardPoll options={[question.optionOne, question.optionTwo]} questionId={question.id}/>
      break
    case 'result':
      cardTitle = `Asked by ${authorName}`
      cardData = <CardResult question={question}/>
      break
    default:
      cardData = "No data available"
      break
  }

  return (
    <Card title={cardTitle} style={{ minWidth: cardWidth }}>
      <div className="question-info">
        <img src={authorAvatar} alt="author avatar" style={{ width: '30%' }}></img>
        {
          cardData
        }
      </div>

    </Card>
  )
}

export default QuestionCard