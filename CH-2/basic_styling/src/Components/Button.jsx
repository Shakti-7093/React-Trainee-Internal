import React from 'react'

const Button = (props) => {
  return (
    <>
     <div>
        <button type='button' className={props.className}>{props.btn_name}</button>    
    </div> 
    </>
  )
}

export default Button
