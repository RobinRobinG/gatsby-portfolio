import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = () => {
  return (
    <Layout>
      <Head pageTitle="404"/>
      <section className='hero is-primary is-bold is-large'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section is-centered'>
                  <h1 className='title'>404: NOT FOUND</h1>
                  <h2 className='subtitle'>You just hit a route that doesn&#39;t exist... the sadness.</h2>
                  <Link className='navbar-item' to='/'>Home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>

  )
}
export default NotFound