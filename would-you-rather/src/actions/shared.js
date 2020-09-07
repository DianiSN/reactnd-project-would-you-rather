import { getInitialData, saveNewQuestion, saveAnswer } from '../utils/api'
import { receiveUsers, addQuestionToUser, addAnswerToUser } from '../actions/users'
import { receiveQuestions, addQuestion, addAnswerToQuestion } from '../actions/questions'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData().then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
    })
  }
}

export function handleAnswerQuestion (info) {
  return (dispatch) => {
    const { authedUser, qid, answer } = info

    dispatch(showLoading())

    return saveAnswer({
      authedUser,
      qid,
      answer
    })
    .then(() => {
      dispatch(addAnswerToUser(info))
      dispatch(addAnswerToQuestion(info))
    })
    .then(() => dispatch(hideLoading()))
    .catch((e) => {
      console.log(e);
      console.warn('Error in answerQuestion')
      alert('There was an error while answering the question. Please try again.')
    })
  }
}



export function handleAddQuestion({ optionOneText, optionTwoText }) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveNewQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
    .then((question) =>{
      dispatch(addQuestion(question))
      dispatch(addQuestionToUser({
        author: question.author,
        qid:question.id
      }))
    })
    .then(() => dispatch(hideLoading()))
  }
}

