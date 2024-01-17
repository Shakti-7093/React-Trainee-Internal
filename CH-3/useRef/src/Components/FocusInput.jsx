import React, { useEffect, useRef } from 'react';
import './FocusInput.css'

function FocusInput() {

    const firstInput = useRef(null);
    const lastInput = useRef(null);
    const submitInput = useRef(null);

    useEffect(()=>{
        firstInput.current.focus()
    },[])

    function firstKeyDown(e){
        if (e.key === "Enter") {
            lastInput.current.focus();
        }
    }

    function lastKeyDown(e){
        if (e.key === "Enter") {
            submitInput.current.focus();
        }
    }

    function submitKeyDown(e){
        alert('Hello')
    }

  return (
    <>
        <div className="container">
            <input type="text" ref={firstInput} onKeyDown={firstKeyDown} placeholder='First Name'/>
            <input type="text" ref={lastInput} onKeyDown={lastKeyDown} placeholder='Last Name'/>
            <button ref={submitInput} onKeyDown={submitKeyDown}>Submit</button>
        </div>
    </>
  )
}

export default FocusInput