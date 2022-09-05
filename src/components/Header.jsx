import React from 'react'

const Header = () => {
  return (
    <header>
      <div id="banner">
        <h1>spooky tree records</h1>
        <nav id="navbar">
          <ul>
            <li>
              <a href="index.html" className="selected-page">Releases</a>
            </li>
            <li>
              <a href="index.html">News</a>
            </li>
            <li>
              <a href="index.html">History</a>
            </li>
            <li>
              <a href="index.html">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header