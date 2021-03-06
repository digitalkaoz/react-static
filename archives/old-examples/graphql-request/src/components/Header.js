import React from 'react'
import { NavLink } from 'react-router'

export default () => (
  <header className="header-header">
    <h1 className="header-h1">GraphCMS Starter blog</h1>
    <nav className="header-nav">
      <NavLink className="header-link" to="/">
        Home
      </NavLink>
      <NavLink className="header-link" to="/about">
        About
      </NavLink>
    </nav>
  </header>
)
