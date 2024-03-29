import React from "react"
import { graphql } from "gatsby"
import GatsbyImage from 'gatsby-image'
import Layout from "../components/layout"

export default ({ data }) => {
    const post = data.markdownRemark
    const imageCheck = post.frontmatter.imageCheck;
    var dataloop = post.frontmatter.dataLoop;
    console.log(post)

    return (
    <div>
        <Layout>
            <h1>{post.frontmatter.title}</h1>
            {imageCheck ?( <img src={post.frontmatter.images.childImageSharp.fluid.base64} />):('')}
            <div dangerouslySetInnerHTML={{__html: post.frontmatter.codeTm}}></div>
            <div className={"myPOst"} dangerouslySetInnerHTML={{ __html: post.html }} />
            <div className={"Dasam"}>
                <hr/>
                <h1>Dasam</h1>
            </div>
                {dataloop.map(({dataLoop}, i)=>
                <h2 key={i} className={"tag is-primary is-medium"} >{dataloop[i]}</h2>
                )}
        </Layout>
    </div>
)
}


export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        codeTm
             images {
          childImageSharp {
                          fluid(toFormatBase64: PNG, fit: CONTAIN, base64Width: 1000) {
                base64
                srcSet
                src
                sizes
              }
          }
        }
        imageCheck
        dataLoop
      }
    }
  }
`
