import React from 'react'
import HeaderHook from '../examples/Header-Hooks'
import HeaderStatic from '../examples/Header-Static'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const examples = (props) => {
  const { name, age } = props.data.site.siteMetadata.person

  return (
    <Layout>
      Examples page
      <HeaderHook />
      <HeaderStatic />
      <div>This is our person</div>
      <h4>Name : {name}</h4>
      <h4>Age : {age}</h4>
    </Layout>
  )
}

export const getData = graphql`
  query ThirdQuery {
    site {
      siteMetadata {
        description
        author
        siteTitle: title
        person: data {
          age
          name
        }
      }
    }
  }
`

export default examples
