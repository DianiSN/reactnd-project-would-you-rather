import React from 'react'
import { useSelector } from 'react-redux'
import { Progress, Space } from 'antd'

const CardResult = (props) => {
    const { question } = props
    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
    const authedUser = useSelector((state) => state.authedUser)
    console.log((question.optionOne.votes.length/totalVotes) * 100);
    return (
        <div style={{margin: 20}}>
            <h2>Results:</h2>
            <div style={{margin: 10}}>
                <span>
                    <strong>
                        {
                            `Would you rather ${question.optionOne.text}?`
                        }
                    </strong>
                    <div style={{textAlign: 'center'}}>{question.optionOne.votes.length} of {totalVotes}</div>
                    <Progress percent={(question.optionOne.votes.length/totalVotes) * 100} status="normal"/>
                </span>
            </div>
            <div style={{margin: 10}}>
                <span>
                    <strong>
                        {
                            `Would you rather ${question.optionTwo.text}?`
                        }
                    </strong>
                    <div style={{textAlign: 'center'}}>{question.optionTwo.votes.length} of {totalVotes}</div>
                    <Progress percent={(question.optionTwo.votes.length/totalVotes) * 100} status="normal"/>
                </span>
            </div>
        </div>
    )
}

export default CardResult