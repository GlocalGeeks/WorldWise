import React from 'react'
import styles from './AppNav.module.css'
import { NavLink } from 'react-router-dom'

const AppNav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">CITIES</NavLink>
          
        </li>
        <li><NavLink to="countries">COUNTRIES</NavLink></li>
      </ul>
    </nav>
  )
}

export default AppNav