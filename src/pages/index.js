import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import {HomeHeader, Banner, BannerButton, Section} from '../utils'
import img from '../images/bcg/homeBcg.jpeg'
import Quickinfo from '../components/HomePageComponents/Quickinfo'
import Menu from '../components/HomePageComponents/Menu'
import Gallery from '../components/HomePageComponents/Gallery_new'
import {Link} from 'gatsby'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title="Lee's Inn" subtitle="Gnesener Str. 97, 70374">
      <Link to="/menu" style={{textDecoration:'none'}} >
        <BannerButton style={{margin:'2rem auto'}}>
          Karte
        </BannerButton>
        </Link>
      </Banner>
    </HomeHeader>
    <Quickinfo/>
    <Gallery/>
    <Menu/>
  </Layout>
)


export default IndexPage
