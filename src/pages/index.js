import React from "react"
import styled from 'styled-components'
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  </Layout>
)

const ButtonWrapper = styled.button`
background:var(--mainOrange);
color: orange;
`

export default IndexPage
