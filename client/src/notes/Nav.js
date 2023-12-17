import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = ({setIsLogin}) => {
    const logoutSubmit = ()=>{
        localStorage.clear()
        setIsLogin(false)
    }
    return (
        <div>
            <div className='logo'>
                <h1><Link to='/'>Home</Link></h1>
            </div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/createNotes'>Create Notes</Link></li>
                <li onClick={logoutSubmit}><Link to='/'>Logout</Link></li>
            </ul>
        </div>
    )
}
