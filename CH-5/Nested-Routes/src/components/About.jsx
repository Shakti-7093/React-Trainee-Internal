import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function About() {
  const [searchpara, setSearchpara] = useSearchParams()
  console.warn(searchpara.get("age"))
  console.warn(searchpara.get("city"))
  const age = searchpara.get("age")
  const city = searchpara.get("city")
  return (
    <>
    <h2>About</h2>
    <h2>Age is : {age}</h2>
    <h2>Age is : {city}</h2>
    <input type="text" onChange={(e)=>setSearchpara({text:e.target.value})} placeholder='hi'/>
    <button onClick={()=>setSearchpara({age:40})}>set age</button>
    </>
  )
}