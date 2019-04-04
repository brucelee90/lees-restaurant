import React, { Component } from 'react'
import {Section, Title, SectionButton} from '../../utils'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {styles} from '../../utils'

export default class Quickinfo extends Component {
  render() {
    return (
      <Section>
        <Title title="Lee's" subtitle="BEEF BURGER, FRIES & SHAKES"/>
        <QuickinfoWrapper>
          <p className="text">
Bei Lee's Inn findet ihr die besten und frischesten Burger der Stadt. Wir wolfen unser Fleisch jeden Tag frisch bei uns und produzieren unsere Patties selbst in den Stores. Wir verwenden keinerlei vorgefertigte oder tiefgefrorene Produkte. Unsere Buns werden jeden Tag frisch bei uns und von uns selbst gebacken. Wir verwenden ausschliesslich Zutaten von regionalen Anbieter die wir persönlich kennen....
          </p>
          <Link to="/about" style={{textDecoration:'none'}} >
            <SectionButton style={{margin: '2rem auto'}} >Mehr</SectionButton>
          </Link>
        </QuickinfoWrapper>
      </Section>
    )
  }
}

const QuickinfoWrapper = styled.div`
width: 90%;
margin: 2rem auto;
.text{
  line-height: 1.6rem;
  text-align: center;
  color: ${styles.colors.thirdColor};
  word-spacing: 0.2rem;
}
@media (min-width:768px){
  width: 70%;
}
@media (min-width:992px){
  width: 60%;
}
`