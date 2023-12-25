import React from 'react'

const UserProfile = (props) => {
  return (
    <div>
        <h1>User Profile</h1>
        <h5>Mr. {props.name}</h5>
        <h5>Age : {props.age}</h5>
    </div>
  )
}

export default UserProfile