import React from 'react'

function Home() {
    const handelLogOut = () => {
        localStorage.clear();
        window.location.reload();
    }
  return (
    <>
        <div>Home</div>
        <button onClick={handelLogOut}>LogOut</button>
    </>
  )
}

export default Home;