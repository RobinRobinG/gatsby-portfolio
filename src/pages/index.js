import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head pageTitle="Home"/>
      <h1>Hello</h1>
      <h2>I am Robin, a full-stack developer from Seattle.</h2>
      <hr />
      <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
    </Layout>
  )
}

export default IndexPage