import * as React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Site novo</h1>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage