import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
  return (
    <Layout>
      <Head pageTitle="Contact"/>
      <h1>Contact Me</h1>
      <p>Email: <a href="mailto:hello@robinguan.com">Hello@robinguan.com</a></p>
    </Layout>
  )
}

export default ContactPage