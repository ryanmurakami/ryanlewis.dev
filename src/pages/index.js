import React from 'react'
import Img from 'gatsby-image'
import { graphql, Link } from 'gatsby'

import 'typeface-quicksand'
import styles from './index.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import Newsletter from '../components/newsletter'

export const query = graphql`
  query {
    self: file(relativePath: { eq: "img/self.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ({ data }) => <>
  <Header />
  <div className={styles.main}>
    <div className={styles.image}>
      <Img fluid={data.self.childImageSharp.fluid} />
    </div>
    <div className={styles.text}>
      <div className={styles.line}>
        Hi, I'm Ryan, a <a href="https://www.linkedin.com/in/ryan-h-lewis/">Cloud Architect</a>.
      </div>
      <div className={styles.line}>
        I love <Link to="/courses">helping others learn</Link> about AWS.
      </div>
      <div className={styles.line}>
        Over 300,000 awesome people have <br />
        taken my courses at <a href="https://app.pluralsight.com/profile/author/ryan-lewis">Pluralsight</a> and <br />
        <a href="https://www.oreilly.com/search/?query=ryan%20lewis">O'Reilly</a>.
      </div>
      <div className={styles.line}>
        <div className={styles.newsletter}>
          <Newsletter />
        </div>
      </div>
    </div>
  </div>
  <Footer />
</>
