import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
const getData = graphql`
  query BasicQuery {
    site {
      siteMetadata {
        description
        author
        title
        data {
          age
        }
      }
    }
  }
`

const Header = () => {
  const {
    site: { siteMetadata: info },
  } = useStaticQuery(getData)
  console.log(info)

  return (
    <div>
      {/* <h1>author : {data.site.siteMetadata.author}</h1> */}
      <h1>author : {info.author}</h1>
      <h1>title : {info.title}</h1>
    </div>
  )
}

export default Header
