import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"
import {styles, Section} from '../../utils'
import Img from "gatsby-image"

const SINGLE_IMAGE = graphql`
{
    img1: file(relativePath:{eq:"homeGallery/img-1.jpeg"}) {
        childImageSharp{
        fluid(maxWidth:500){
            ...GatsbyImageSharpFluid_tracedSVG
        }
        }
    }

    img2: file(relativePath:{eq:"homeGallery/img-2.jpeg"}) {
        childImageSharp{
        fluid(maxWidth:500){
            ...GatsbyImageSharpFluid_tracedSVG
        }
        }
    }
    img3: file(relativePath:{eq:"homeGallery/img-3.jpeg"}) {
        childImageSharp{
        fluid(maxWidth:500){
            ...GatsbyImageSharpFluid_tracedSVG
        }
        }
    }
}
`

export default function Gallery() {
  return (
    <StaticQuery
    query={SINGLE_IMAGE}
    render={data=>{
            const img1 = data.img1.childImageSharp.fluid;
            const img2 = data.img2.childImageSharp.fluid;
            const img3 = data.img3.childImageSharp.fluid;
            return(
                <Section>
                    <GalleryWrapper>
                        <div className="item item-1">
                            <Img fluid={img1} />
                            <p className="info">Unsere Pizzen</p>
                        </div>
                        <div className="item item-2">
                            <Img fluid={img2} />
                            <p className="info">Unser Schwein</p>
                        </div>
                        <div className="item item-3">
                            <Img fluid={img3} />
                            <p className="info">Unsere Steaks</p>
                        </div>
                    </GalleryWrapper>
                </Section>
            )
        }
    }
    >

    </StaticQuery>
  )
}


const GalleryWrapper = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-row-gap: .5rem;

    .item{
        position: relative;
    }

    .info{
        position: absolute;
        top:0;
        right:0;
        background: ${styles.colors.primaryColor};
        padding: 1vh 3%;
        text-transform: capitalize;
        opacity:.8;
        border-radius: 0px 0px 0px .4rem;
        -moz-border-radius: 0px 0px 0px .4rem;
        -webkit-border-radius: 0px 0px 0px .4rem;
    }
    @media(min-width:576px){
        grid-template-columns: 1fr 1fr;
        grid-column-gap: .5rem;
    }
    @media(min-width:768px){
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: .5rem;
    }
    @media(min-width:992px){
        .gatsby-image-wrapper{
            height:100%;
        }
        grid-template-areas:
        'one one two two'
        'one one three three';
        
        .item-1{
            grid-area: one;
        }
        .item-2{
            grid-area: two;
        }
        .item-3{
            grid-area: three;
        }
    }
`