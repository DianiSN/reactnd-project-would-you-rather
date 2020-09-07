export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_ANSWER_USER = 'ADD_ANSWER_USER'
export const ADD_QUESTION_USER = 'ADD_QUESTION_USER'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function addAnswerToUser ({ authedUser, qid, answer}) {
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


