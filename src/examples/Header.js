import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          author
          titel
          data
        }
      }
    }
  `)
  console.log(data)

  return (
    <div>
      <h1>author : {data.site.siteMetadata.author}</h1>
      <h1>title</h1>
    </div>
  )
}

export default Header
