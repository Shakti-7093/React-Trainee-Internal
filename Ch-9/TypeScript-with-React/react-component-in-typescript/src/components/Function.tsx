import React from 'react'

type PropsComp = {
    name: String,
    age: Number
}

export const Function: React.FC<PropsComp> = (Props) => {
    const {name, age} = Props
  return (
    <div>
        <h2>{name}</h2>
        <p>{`age: ${age}`}</p>
    </div>
  )
}