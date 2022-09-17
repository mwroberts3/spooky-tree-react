import React from 'react'
import { Link } from 'react-router-dom'
import HeaderLogo from '../logo-1.jpg'

const HeaderNav = () => {
  return (
    <header>
      <img className="logo" src={HeaderLogo} alt="Spooky Tree Records" />
      <div id="banner">
        <h1>spooky tree records</h1>
        <nav id="navbar">
          <ul>
            <li>
              <Link to="/">Releases</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/history">History</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default HeaderNav