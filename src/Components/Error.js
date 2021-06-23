import React from 'react'
import {useLocation} from 'react-router-dom'
const Error = () => {

    const location = useLocation()

    return (
        <>
            <div style={{textAlign: 'center'}}>
            <h1>This page not found</h1><br/>
            <h3 style={{color: 'tomato'}}>No match for <cade>{location.pathname}</cade></h3>
            </div>
        </>
    )
}

export default Error




