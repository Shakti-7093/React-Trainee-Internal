import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Contact() {
    return (
        <>
            <h2>Contact us page</h2>
            <div>
                <NavLink style={{padding:"15px"}} to='hardik' >Hardik</NavLink>
                <NavLink to='pavan' >Pavan</NavLink>
                <Outlet />
            </div>
        </>
    )
}