import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleSetAuthedUser } from '../actions/authedUser'

const LogOut = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(handleSetAuthedUser(null))
    });

    return (
        <Redirect to="/"/>
    )
}

export default LogOut