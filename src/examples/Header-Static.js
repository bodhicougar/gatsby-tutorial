import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

const getSData = graphql`
query SecondQuery {
  site {
    siteMetadata {
      description
      author
      title
      data {
        age
        name
      }
    }
  }
}
`

const HeaderStatic = () => {
  return (
    <StaticQuery
      query={getSData} render=
      {data => {
        console.log(data)
        return (
          <div>
            <h2>{data.site.siteMetadata.description}</h2>
          </div>
        )
      }}
      >
    </StaticQuery>
  )
}

export default HeaderStatic
