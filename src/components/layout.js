/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import Navbar from '../components/globals/Navbar'
import Footer from '../components/globals/Footer/Footer'

const Layout = ({ children }) => {
  return <>
  <Navbar/>
    {children}
  <Footer />
  </>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout