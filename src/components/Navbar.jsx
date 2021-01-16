import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
    <nav className="navbar">
      <div className="nav-center">
        <ul className="nav-links">
            <li>
                <Link to="/">JuiceBar</Link>
            </li>
        </ul>
        <ul className="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </div>
    </nav>
    )
}

export default Navbar
