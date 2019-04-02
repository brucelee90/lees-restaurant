import React from "react"
import styled from 'styled-components'
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import {PageHeader, Banner} from '../utils'
import img from '../images/bcg/contactBcg.jpeg'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={img}>
      <Banner title="reservieren" subtitle="wir freuen uns auf euch"/>
    </PageHeader>
  </Layout>
)

export default ContactPage
