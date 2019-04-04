import React, { Component } from 'react'
import {Section, Title, SectionButton} from '../../utils'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {styles} from '../../utils'
import Img from 'gatsby-image'

export default function Product({product}) {
  const {name, preis, zutaten} = product
  const {fixed} = product.img
  console.log(product);
  
  return (
    <ProductWrapper>
      <Img fixed={fixed} className="img"/>
      <div className="text">
        <div className="product-content">
          <h3 className="name">{name}</h3>
          <h3 className="preis">{preis}</h3>
        </div>
        <p className="info">{zutaten}</p>
      </div>
    </ProductWrapper>
  )
}

const ProductWrapper = styled.div `
@media(min-width:576px){
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1rem;
}
.img{
  border-radius: .3rem;
}
.product-content{
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  text-transform: uppercase;
}

.name{
  color: ${styles.colors.primaryColor};
  margin-top: .5rem;
}

.preis{
  color: ${styles.colors.primaryColor};
}
.info{
  margin-top: .5rem;
  word-spacing: .2rem;
  text-transform: lowercase;
}
`