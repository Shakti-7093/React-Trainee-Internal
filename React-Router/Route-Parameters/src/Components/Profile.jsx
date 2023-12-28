import React from 'react'
import { Link } from 'react-router-dom'

function Profile({ userData, error }) {
    console.log(userData);
  return (
    <>
        {error && <p>{error}</p>}
        {userData && (
            <div>
                <img src={userData.avatar_url} alt="avatar" />
                <h1>{userData.login}</h1>
                <p>{userData.bio}</p>
                <h1>See The Repos of {userData.name} here: <Link to={`https://github.com/${userData.login}?tab=repositories`}>Repos</Link></h1>
            </div>
        )}
    </>
  )
}

export default Profile