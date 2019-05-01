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

      <section className='hero is-primary is-bold is-medium'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <h1 className='title'>{props.data.contentfulProject.title}</h1>
                  <h3>{props.data.contentfulProject.createdDate}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section section--gradient'>
        <div className='container'>

          <div className='section'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='content'>
                  {documentToReactComponents(props.data.contentfulProject.body.json, options)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default Project