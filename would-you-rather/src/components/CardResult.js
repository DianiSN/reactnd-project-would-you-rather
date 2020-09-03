import React from 'react'
import { useSelector } from 'react-redux'
import { Progress, Space } from 'antd'
import { CheckCircleTwoTone } from '@ant-design/icons';


const CardResult = (props) => {
    const { question } = props
    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
    const authedUser = useSelector((state) => state.authedUser)
    console.log((question.optionOne.votes.includes(authedUser)))
    return (
        <div style={{margin: 20}}>
            <h2>Results:</h2>
            <div style={{margin: 10}}>
                <span>
                    <strong>
                        <span>
                            {
                                `Would you rather ${question.optionOne.text}?`
                            }
                        </span>
                        <span style={{marginLeft: 10}}>
                            {
                                question.optionOne.votes.includes(authedUser) && <CheckCircleTwoTone twoToneColor="#52c41a" style={{fontSize: 24}} />
                            }
                        </span>
                    </strong>
                    <div style={{textAlign: 'center'}}>{question.optionOne.votes.length} of {totalVotes}</div>
                    <Progress percent={(question.optionOne.votes.length/totalVotes) * 100} status="normal"/>
                </span>
            </div>
            <div style={{margin: 10}}>
                <span>
                    <strong>
                        <span>
                            {
                                `Would you rather ${question.optionTwo.text}?`
                            }
                        </span>
                        <span style={{marginLeft: 10}}>
                            {
                                question.optionTwo.votes.includes(authedUser) && <CheckCircleTwoTone twoToneColor="#52c41a" style={{fontSize: 24}}/>
                            }
                        </span>
                    </strong>
                    <div style={{textAlign: 'center'}}>{question.optionTwo.votes.length} of {totalVotes}</div>
                    <Progress percent={(question.optionTwo.votes.length/totalVotes) * 100} status="normal"/>
                </span>
            </div>
        </div>
    )
}

export default CardResult