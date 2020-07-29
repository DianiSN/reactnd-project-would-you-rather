import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import QuestionCard from './QuestionCard'
import { Space, Card } from 'antd'

const Home = () => {
  const [activeTab, setActiveTab] = useState('unanswered')
  const {users, questions, answeredQs, unansweredQs } =  useSelector(state => {
      const answeredIds = Object.keys(state.users[state.authedUser].answers)
      const questionIds = Object.keys(state.questions)
      return {
        users: state.users,
        questions: state.questions,
        answeredQs: questionIds.filter(questionId => answeredIds.includes(questionId)),
        unansweredQs: questionIds.filter(questionId => !answeredIds.includes(questionId))
      }
  })
  const tabs = [
    {
      key: 'unanswered',
      tab: 'Unanswered',
    },
    {
      key: 'answered',
      tab: 'Answered',
    },
  ];

  const onTabChange = (key) => {
      setActiveTab(key)
      // this.onTabChange(key, 'noTitleKey');
  }

  return (
    <Card
      style={{ width: '100%' }}
      tabList={tabs}
      activeTabKey={activeTab}
      onTabChange={onTabChange}
    >
      <Space direction="vertical">
        {
          activeTab === 'unanswered' ?
          unansweredQs.map((questionId) => (
            <QuestionCard key={questionId} authorName={users[questions[questionId].author].name} authorAvatar={users[questions[questionId].author].avatarURL} question={questions[questionId]}/>
          )) :
          answeredQs.map((questionId) => (
            <QuestionCard key={questionId} authorName={users[questions[questionId].author].name} authorAvatar={users[questions[questionId].author].avatarURL} question={questions[questionId]}/>
          ))
        }
      </Space>
    </Card>
  )
}

export default Home
