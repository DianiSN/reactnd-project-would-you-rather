import React from 'react'
import { Badge, Card } from 'antd'

const StandingsCard = (props) => {
  const { name, avatar, answered, created, place } = props
  const { Meta } = Card;

  const ordinalNum = (num) => {
    let ending = 'th'
    switch (num % 10) {
      case 1:
        ending = "st"
        break
      case 2:
        ending = "nd"
        break
      case 3:
        ending = "rd"
        break
      default:
        ending = "th"
        break
    }
    return `${num}${ending}`
  }

  return (
      <Badge.Ribbon text={ordinalNum(place)}>
        <Card
          hoverable
          style={{ width: 260, textAlign: 'center' }}
          cover={<div style={{marginTop: 20}}><img alt="userAvatar" src={avatar} style={{width: '70%'}}/></div>}
        >
          <Meta
            title={name}
            description={
              <div className="question-info">
                <div>
                  <strong style={{fontSize: 16}}>{answered+created}</strong>
                  <div>score</div>
                </div>
                <div>
                  <div>Answered: {answered}</div>
                  <div>Created: {created}</div>
                </div>
              </div>
            }
          />
        </Card>
      </Badge.Ribbon>
  )
}

export default StandingsCard
