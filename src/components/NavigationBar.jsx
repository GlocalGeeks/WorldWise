import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <nav>
        <ul>
            <li>
                <NavLink path='/'> Home </NavLink>
            </li>

            <li>
                <NavLink path='/Product'> Product </NavLink>
            </li>

            <li>
                <NavLink path='/Pricing'> Pricing </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavigationBar