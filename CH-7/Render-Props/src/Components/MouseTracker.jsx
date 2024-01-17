import React, { useEffect, useState } from 'react'

const MouseTracker = ({render}) => {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })
    const handleMouse = (e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY
        })
    }

    useEffect(() => {
        window.addEventListener("mousemove", handleMouse)

        return () => {
            window.removeEventListener("mousemove", handleMouse)
        }
    }, [])
  return (
    <>
      <div>{render(position)}</div>
    </>
  )
}

export default MouseTracker
