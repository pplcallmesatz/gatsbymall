import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
    const post = data.markdownRemark
    const imageCheck = post.frontmatter.imageCheck;
    var dataloop = post.frontmatter.dataLoop;
    return (
    <div>
        <Layout>
            <h1>{post.frontmatter.title}</h1>
            {imageCheck ?( <img src={post.frontmatter.image.publicURL} />):('')}
            <div className={"myPOst"} dangerouslySetInnerHTML={{ __html: post.html }} />
            <div className={"Dasam"}>
                <hr/>
                <h1>Dasam</h1>
            </div>
                {dataloop.map(dataLoop =>
                <h2 className={"tag is-primary is-medium"} >{dataLoop}</h2>
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
        image {
            publicURL
            base
        }
        imageCheck
        dataLoop
      }
    }
  }
`
