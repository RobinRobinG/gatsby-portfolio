import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head'

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: {eq: $slug}) {
      title
      createdDate (formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
   }
`

const Project = (props) => {
  const options = {
    renderNode: {
      'embedded-asset-block': (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      }
    }
  }
  return (
    <Layout>
      <Head pageTitle={props.data.contentfulProject.title}/>
      <h1>{props.data.contentfulProject.title}</h1>
      <h3>{props.data.contentfulProject.createdDate}</h3>
      {documentToReactComponents(props.data.contentfulProject.body.json, options)}
    </Layout>
  )
}
export default Project