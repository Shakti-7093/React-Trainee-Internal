import React, { useState } from 'react';
import "./Counter.css"

const Counter = () => {

    const [count,setCount] = useState(0)

    const Decrese = () => {
        setCount(count - 1)
    }

    const Increse = () => {
        setCount(count + 1)
    }

    const Reset = () => {
        setCount(0)
    }

  return (

    <div className='counter'>
        <button onClick={Increse}>Increment</button><br />
        <div className='font'>{count}</div><br />
        <button onClick={Decrese} style={{marginTop: "5px"}}>Decrement</button><br />
        <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default Counter;