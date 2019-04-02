import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import {HomeHeader, Banner, BannerButton, Section} from '../utils'
import img from '../images/bcg/homeBcg.jpeg'
import Quickinfo from '../components/HomePageComponents/Quickinfo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title="LEE'S INN" subtitle="Gnesener Str. 97, 70374">
        <BannerButton style={{margin:'2rem auto'}}>
          Karte
        </BannerButton>
      </Banner>
    </HomeHeader>
    <Quickinfo/>
  </Layout>
)


export default IndexPage
