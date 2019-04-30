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
      <h1>Projects</h1>
      <hr />
      <ol className={projectStyles.projects}>
        {data.allContentfulProject.edges.map((edge) => {
          return (
            <li className={projectStyles.project}>
              <Link to={`/project/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <h3>{edge.node.createdDate}</h3>
              </Link>
            </li>
          )
        })}
    </ol>
    </Layout>
  )
}
export default ProjectsPage