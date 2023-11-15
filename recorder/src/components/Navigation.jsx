import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <header>
        <nav>
            <h1>Rave Audio</h1>
            <ul>
                <li className='navbutton'><Link to='/'>Home</Link></li>
                <li className='navbutton'><Link to='/record'>Record</Link></li>
                <li className='navbutton'><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navigation
