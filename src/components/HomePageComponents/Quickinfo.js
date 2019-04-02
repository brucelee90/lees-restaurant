import React, { Component } from 'react'
import {Section, Title, SectionButton} from '../../utils'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {styles} from '../../utils'

export default class Quickinfo extends Component {
  render() {
    return (
      <Section>
        <Title title="let us tell you" subtitle="our mission"/>
        <QuickinfoWrapper>
          <p className="text">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolores recusandae odit atque accusantium asperiores natus commodi, consequatur vero totam corporis et fugit placeat, harum voluptatem quam, nisi saepe. Animi omnis, accusantium optio fuga sunt hic, tenetur ipsam provident aspernatur eos ut est praesentium. Voluptatibus, maiores. Nulla praesentium expedita necessitatibus?
          </p>
          <Link to="/about" style={{textDecoration:'none'}} >
            <SectionButton style={{margin: '2rem auto'}} >About</SectionButton>
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