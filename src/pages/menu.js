import React from "react"
import styled from 'styled-components'
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import {PageHeader, Banner} from '../utils'
import img from '../images/bcg/menuBcg.jpeg'

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={img}>
      <Banner title="unsere karte" subtitle="100% handmade with love"/>
    </PageHeader>
    
  </Layout>
)

const ButtonWrapper = styled.button`
background:var(--mainOrange);
color: orange;
`

export default MenuPage
