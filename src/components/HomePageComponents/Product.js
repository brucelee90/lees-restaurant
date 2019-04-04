import React, { Component } from 'react'
import {Section, Title, SectionButton} from '../../utils'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {styles} from '../../utils'
import Img from 'gatsby-image'

export default function Product({product}) {
  const {name, preis, zutaten} = product
  const {fixed} = product.img
  console.log(product.preis)
  
  return (
    <ProductWrapper>
      <Img fixed={fixed} className="img"/>
      <div className="text">
        <div className="product-content">
          <h4 className="name">{name}</h4>
          <h4 className="preis">{preis.toFixed(2)} €</h4>
        </div>
        <p className="allergene">
          Allergene:
        </p>
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
  font-weight: 400;
}

.preis{
  color: ${styles.colors.mainBlack};
  font-weight: 600;
  font-size: 1.2rem;

}
.allergene{
  margin-top: .3rem;
  word-spacing: .2rem;
  text-transform: capitalize;
  font-size: .8rem;
  color: ${styles.colors.mainBlack};
}
.info{
  /* margin-top: .5rem; */
  word-spacing: .2rem;
  text-transform: capitalize;
  font-size: .8rem;
  color: ${styles.colors.mainGrey};
}
`