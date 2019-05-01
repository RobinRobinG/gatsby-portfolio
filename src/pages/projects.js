import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import projectStyles from './projects.module.scss'
import Head from '../components/head'

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject (
        sort: {
          fields: createdDate,
          order: DESC
        }
      ){
        edges {
          node {
            title
            slug
            createdDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  console.log(data);
  return (
    <Layout>
      <Head pageTitle="Projects"/>
      <section className='hero is-primary is-bold is-medium'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <h1 className='title'>
                    Projects
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <div className='content'>
                  <ol className={projectStyles.projects}>
                    {data.allContentfulProject.edges.map((edge) => {
                      return (
                        <li className={projectStyles.project} key={edge.node.slug}>
                          <Link to={`/project/${edge.node.slug}`}>
                            <h2>{edge.node.title}</h2>
                            <h3>{edge.node.createdDate}</h3>
                          </Link>
                        </li>
                      )
                    })}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default ProjectsPage