import React from 'react'
import { Link } from 'gatsby'
import styles from '../components/navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
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
      </ul>
    </nav>
  )
}

export default Navbar