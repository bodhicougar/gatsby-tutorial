// import React, { Component } from 'react'
import React from 'react'
import Layout from '../components/layout'
import Tours from '../components/Tours/Tours'
import { graphql } from 'gatsby'

const tours = ({ data }) => {
  return (
    <Layout>
      Hello from tours page
      <Tours tours={data.tours.edges} />
    </Layout>
  )
}

export const getTours = graphql`
  query {
    tours: allContentfulTour {
      edges {
        node {
          name
          price
          slug
          country
          id: contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default tours

// export default class tours extends Component {
//     render() {
//       return (
//         <Layout>
//           <h1 className="title">This is our tours page.</h1>
//         </Layout>
//       )
//     }
//   }
