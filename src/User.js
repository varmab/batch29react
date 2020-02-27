import React from 'react'

const User = function(props) {
    return (
        <div>
            <h1>{props.user.name}</h1>
            <h3>{props.user.phone}</h3>
            <p>{props.user.website}</p>
        </div>
    )
}

export default User;