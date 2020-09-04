import { saveAnswer } from '../utils/api'
import { addAnswerToQuestion } from '../actions/questions'
import {showLoading, hideLoading} from 'react-redux-loading'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_ANSWER_USER = 'ADD_ANSWER_USER'
export const ADD_QUESTION_USER = 'ADD_QUESTION_USER'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

function addAnswerToUser ({ authedUser, qid, answer}) {
  return {
    type: ADD_ANSWER_USER,
    authedUser,
    qid,
    answer
  }
}

export function addQuestionToUser ({ author, qid }) {
  return {
    type: ADD_QUESTION_USER,
    author,
    qid
  }
}


export function handleAnswerQuestion (info) {
  return (dispatch) => {
    const { authedUser, qid, answer } = info

    console.log(info);

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
