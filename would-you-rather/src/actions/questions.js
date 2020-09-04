export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_ANSWER_QUESTION = 'ADD_ANSWER_QUESTION'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function addAnswerToQuestion ({ authedUser, qid, answer}) {
  return {
    type: ADD_ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  }
}

