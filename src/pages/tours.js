// import React, { Component } from 'react'
import React from 'react'
import Layout from '../components/layout'
import Tours from '../components/Tours/Tours'

const tours = () => {
  return (
    <Layout>
      Hello from tours page
      <Tours />
    </Layout>
  )
}

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
