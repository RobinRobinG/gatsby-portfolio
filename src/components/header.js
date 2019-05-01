import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = ({toggleNavbar, isActive}) => {
  
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (

    <nav className='navbar is-fixed-top' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item'>
          <strong className={headerStyles.siteTitle}>{data.site.siteMetadata.title}</strong>
        </Link>
        <button
          className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
          data-target='navMenu'
          onClick={toggleNavbar}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navMenu'>

        <div className='navbar-end'>
          <Link className='navbar-item' to='/'>Home</Link>
          <Link className='navbar-item' to='/about'>About</Link>
          <Link className='navbar-item' to='/projects'>Projects</Link>
        </div>
      </div>
    </nav>
  )
}
export default Header