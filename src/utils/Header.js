import React from 'react'
import styled from 'styled-components'
import img from '../images/bcg/homeBcg.jpeg'

function HomeHeader({img, children}) {
  return (
    <IndexHeader img={img}>
      {children}
    </IndexHeader>
  )
}
export {HomeHeader}

function PageHeader({img, children}) {
  return (
    <DefaultHeader img={img}>
      {children}
    </DefaultHeader>
  )
}
export {PageHeader}

const IndexHeader = styled.header`
min-height: calc(100vh - 60px);
background:linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${props => props.img})center/cover fixed no-repeat;
display: flex;
justify-content: center;
align-items: center;
`
const DefaultHeader = styled(IndexHeader)`
min-height: 60vh;
`

// Falls props nicht korrekt übergeben werden, wird immer dieses standard Bild ausgegeben
HomeHeader.defaultProps ={
  img:img
}