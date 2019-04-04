import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Section, PageHeader, Banner } from "../utils"
import img from "../images/bcg/aboutBcg.jpeg"
import { styles } from "../utils"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={img}>
      <Section>
        <Banner title="über uns" subtitle="was wir machen" />
        <AboutWrapper>
          <p className="text">
          Bei Lee's Inn findet ihr die besten und frischesten Burger der Stadt. Wir wolfen unser Fleisch jeden Tag frisch bei uns und produzieren unsere Patties selbst in den Stores. Wir verwenden keinerlei vorgefertigte oder tiefgefrorene Produkte. Unsere Buns werden jeden Tag frisch bei uns und von uns selbst gebacken. Wir verwenden ausschliesslich Zutaten von regionalen Anbieter die wir persönlich kennen....
<br/>
<br/>
Du kannst dir bei uns jeden Burger mit individuellen Zutaten zu deinem persönlichen Lieblingsburger machen.
<br/>
<br/>
Unsere Fries werden ebenfalls frisch von uns im Laden produziert und wir verwenden keine vorproduzierten Produkte. Frische Kartoffeln von regionalen Lieferanten und jeden Tag frisch für euch produziert. Wir bieten euch eine Auswahl aus Fries, Sweet Potato Fries, Yuca Fries, Cheese Fries und Chili Cheese Fries an.
<br/>
<br/>
Unsere Shakes sind berühmt und berüchtigt. Sie runden euer Menü zu einem perfekten #cheatday Menü ab. Schaut euch auch unseren Shake of the Month an. Jeden Monat haben wir eine neue Kreation für euch!

          </p>

        </AboutWrapper>
      </Section>
    </PageHeader>
  </Layout>
)

const ButtonWrapper = styled.button`
  background: var(--mainOrange);
  color: orange;
`

const AboutWrapper = styled.div`
  color:
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 1.6rem;
    text-align: center;
    color: ${styles.colors.mainWhite};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`

export default AboutPage
