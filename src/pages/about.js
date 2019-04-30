import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
      <Head pageTitle="About"/>
      <h1>About Me</h1>
      <p>my bio...</p>

      <Link to ="/contact">Contact Me</Link>
    </Layout>
  )
}
export default AboutPage