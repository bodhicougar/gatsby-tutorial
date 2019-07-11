import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getHData = graphql`
query FirstQuery {
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

const HeaderHook = () => {
  const {
    site: { siteMetadata: info },
  } = useStaticQuery(getHData)
  // console.log(info)

  return (
    <div>
      {/* <h1>author : {data.site.siteMetadata.author}</h1> */}
      <h1>author : {info.author}</h1>
      <h1>title : {info.title}</h1>
    </div>
  )
}

export default HeaderHook
