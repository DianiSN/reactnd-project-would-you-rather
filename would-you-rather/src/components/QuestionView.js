import React from 'react'
import { useSelector } from 'react-redux'
import QuestionCard from './QuestionCard'

const QuestionView = (props) => {

  const { id } = props.match.params
  const question = useSelector((state) => {
    return {
      ...state.questions[id],
      authorName: state.users[state.questions[id].author].name,
      authorAvatar: '../'+state.users[state.questions[id].author].avatarURL,
      //either poll (not answered) or result (answered)
      cardType: Object.keys(state.users[state.authedUser].answers).includes(id) ? 'result' : 'poll' 
    }
  })

  return (
    <QuestionCard cardType={question.cardType} authorName={question.authorName} authorAvatar={question.authorAvatar} question={question}/>
  )
}

export default QuestionView