import React from "react"
import { Link } from "gatsby"
import Nav from "../components/navbar"
import Layout from "../components/layout"
import Container from "../components/container"
import "../styles/styles.scss"

export default () => (
<div>
<Link to="/contact/">Contact</Link>
    <Layout>
<h1 className={"title"}>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
<p>
What do I like to do? Lots of course but definitely enjoy building
websites.
</p>
<p>What a world.</p>
<img src="https://source.unsplash.com/random/400x200" alt="" />
    </Layout>
    <Container>
    <h1>About CSS Modules</h1>
<p>CSS Modules are cool</p>
</Container>
</div>
)