import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
  `)
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='content has-text-centered'>
          <p>Created by {data.site.siteMetadata.author} © 2019</p>
        </div>
      </div>
    </footer>
  )

}
export default Footer