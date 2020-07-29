import React from 'react'
import { useSelector } from 'react-redux'
import StandingsCard from './StandingsCard'
import { Space } from 'antd'

const Leaderboard = () => {

    const users = useSelector((state) => {
        let usersPlace = []
        usersPlace = Object.keys(state.users).map((userId) => {
          return {
            userId: userId,
            score: Object.keys(state.users[userId].answers).length + state.users[userId].questions.length
          }
        })
        usersPlace.sort((a,b) => b.score - a.score)

        return usersPlace.map((place) => state.users[place.userId])
    })

    return (
      <div style={{textAlign: 'center'}}>
        <h1>Leaderboard</h1>
        <Space direction="vertical">
          {
            Object.keys(users).map((userId, index) => (
              <StandingsCard
                key={index}
                name={users[userId].name}
                avatar={users[userId].avatarURL}
                answered={Object.keys(users[userId].answers).length}
                created={users[userId].questions.length}
                place={index+1}
              />
            ))
          }
        </Space>
      </div>
      
    )
}

export default Leaderboard
