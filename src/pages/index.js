import React from "react"
import Posts from "../components/posts"
import { graphql } from "gatsby"

const Index = ({ data, location }) => <Posts data={data} location={location} type="blog-post" />

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___published_on], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          published_on(formatString: "MMMM DD, YYYY")
          title
          description
          tags
          draft
          bookish
          type
        }
        fields {
          readingTime {
            text
          }
        }
      }
    }
  }
`
