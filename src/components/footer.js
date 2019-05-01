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
      <div className='columns is-mobile is-centered'>

        <div class="column content has-text-centered">
        <span class="icon has-text-info">
          <i class="fas fa-info-circle"></i>
        </span> First column
        </div>
        <div class="column content has-text-centered">
          <p>Created with  by {data.site.siteMetadata.author} © 2019</p>
        </div>
        <div class="column content has-text-centered">
          <span class="icon has-text-success">
            <i class="fas fa-check-square"></i>
          </span> Third column
        </div>
      </div>
    </footer>
  )

}
export default Footer