import React from 'react'
import MouseTracker from './Components/MouseTracker'

const App = () => {
  return (
    <>
     <MouseTracker
     render={(position) => (
      <div>
        <p>Position of Mouse</p>
        <p>Mouse X: {position.x}</p>
        <p>Mouse Y: {position.y}</p>
      </div>
     )} 
     />
    </>
  )
}

export default App
