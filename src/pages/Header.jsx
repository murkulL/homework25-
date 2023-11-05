import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
    <div>logo</div>
      <nav>
      <Link to="/posts">Main</Link> 
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    </div>
  )
}

export default Header;