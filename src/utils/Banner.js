import React from 'react'
import styled from 'styled-components'
import {styles} from '../utils'


export default function Banner({title, subtitle, children}) {
  return (
    <BannerWrapper>
      <h1 className="title">{title}</h1>
      <h3 className="subtitle">{subtitle}</h3>
      {children}
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
margin-bottom: 3rem;
text-align:center;
.title{
    color:${styles.colors.mainWhite};
    font-size: 2.5rem;
    text-transform:uppercase;
    ${styles.letterSpacing({spacing:'.4rem'})}
}
.subtitle{
    color:${styles.colors.mainWhite};
    font-weight: 300;
    font-size: 1.4rem;
    ${styles.textSlanted}
    ${styles.letterSpacing({spacing:'.2rem'})};
    text-transform:capitalize;
}
`

Banner.defaultProps = {
    title: 'default title'
}