import React from 'react'

const Welcome = ({user}) => {
    return (
        <>
            <div>
                <img src={user.profilePic} alt="" />
                <p>Welcome, {user.name}</p>
            </div>
        </>
    )
}

export default Welcome