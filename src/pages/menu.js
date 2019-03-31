import React from "react"
import styled from 'styled-components'
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hello from MenuPage</h1>
  </Layout>
)

const ButtonWrapper = styled.button`
background:var(--mainOrange);
color: orange;
`

export default MenuPage
