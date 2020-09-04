import React from 'react'
import { Result, Button } from 'antd'
import { Link, withRouter } from 'react-router-dom'

const Page404 = () => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Link to={'/home'}><Button type="primary">Back Home</Button></Link>}
        />
    )
}

export default withRouter(Page404)