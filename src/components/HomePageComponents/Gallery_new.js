import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"
import {styles, Section} from '../../utils'
import Img from "gatsby-image"

// Neue GraphQL Query, mit Loops!!
// Mit der Abfrage erhalten wir ein Array aller Bilder
const GET_IMAGES = graphql`
{
    getImages:allFile(filter:{relativeDirectory:{eq:"homeGallery"}}){
      edges {
        node {
          childImageSharp {
            fluid(maxWidth:500){
                ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function Gallery() {
  return (
    <StaticQuery
    query={GET_IMAGES}
    render={data=>{
            const images = data.getImages.edges
            return(
                <Section>
                    <GalleryWrapper>
                        {images.map(({node}, index ) => {
                            return( <div key={index} className={`item item-${index+1}`}>
                                <Img fluid={node.childImageSharp.fluid} />
                                <p className="info">awesome pizza</p>
                            </div> )
                        })}
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