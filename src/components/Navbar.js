import React from 'react'
import { Link } from 'gatsby'
// import styles from '../components/navbar.module.scss'

const Navbar = () => {
  return (
    <nav>
      <h2>Company</h2>
      <ul>
        <li>
          <Link to="/">Start</Link>
        </li>
        <li>
          <Link to="/blog/">Blog</Link>
        </li>
        <li>
          <Link to="/products/">Products</Link>
        </li>
        <li>
          <Link to="/examples/">Examples</Link>
        </li>
        <li>
          <Link to="/images/">Images</Link>
        </li>
        <li>
          <Link to="/tours/">Tours</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
