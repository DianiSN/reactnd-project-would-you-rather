import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import QuestionCard from './QuestionCard'
import { Redirect } from 'react-router-dom'

const QuestionView = (props) => {

  const { id } = props.match.params
  const question = useSelector((state) => {
    if(Object.keys(state.questions).includes(id)){
      return {
        ...state.questions[id],
        authorName: state.users[state.questions[id].author].name,
        authorAvatar: '../'+state.users[state.questions[id].author].avatarURL,
        //either poll (not answered) or result (answered)
        cardType: Object.keys(state.users[state.authedUser].answers).includes(id) ? 'result' : 'poll' 
      }
    }else{
      return false
    }
  })

  return (
    <Fragment>
    {
      (question) ? 
      <QuestionCard cardType={question.cardType} authorName={question.authorName} authorAvatar={question.authorAvatar} question={question}/> :
      <Redirect to="/notFound"/>
    }
    </Fragment>
  )
}

export default QuestionView
