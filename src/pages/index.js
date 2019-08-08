import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import Main from "../components/main"
import Container from "../components/container"
import "../styles/styles.scss"
import Img from "gatsby-image"

export default ({ data }) => {
    console.log(data.one.edges[0].node.frontmatter)
    const post = data.one.edges[0].node
    const postt = data.two.edges[0].node
    const imageCheck = post.frontmatter.imageCheck;
    var dataloop = post.frontmatter.dataLoop;

    return (
        <Main kkk={'utgyttrftf'}>
            {/* Page Content */}
            <h1>{post.frontmatter.title}</h1>
            <h1>dgjs</h1><h1>dgjs</h1>
            {imageCheck ?( <Img fluid={post.frontmatter.images.childImageSharp.fluid} alt="sample" />):('')}
            {imageCheck ?( <Img fluid={postt.frontmatter.images.childImageSharp.fluid} alt="sample" />):('')}
            {/* End: Page Content */}
        </Main>
    )
}


export const query = graphql`
  query {
    one: allMarkdownRemark(filter: {frontmatter: {title: {eq: "Index"}}}) {
    edges {
      node {
        id
        frontmatter {
          title
          date
             images {
          childImageSharp {
            fluid(toFormatBase64: PNG, fit: CONTAIN, base64Width: 1000) {
             ...GatsbyImageSharpFluid
              }
          }
        }
          template
          imageCheck
        }
      }
    }
  }
  two: allMarkdownRemark(filter: {frontmatter: {title: {eq: "About"}}}) {
    edges {
      node {
        id
        frontmatter {
          title
          date
             images {
          childImageSharp {
            fluid(toFormatBase64: PNG, fit: CONTAIN, base64Width: 1000) {
             ...GatsbyImageSharpFluid
              }
          }
        }
          template
          imageCheck
        }
      }
    }
  }
  
  
  }
`