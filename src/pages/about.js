import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import 'typeface-quicksand'
import styles from './about.module.css'
import Header from '../components/header'
import Footer from '../components/footer'

export const query = graphql`
  query {
    about: file(relativePath: { eq: "img/about.jpg" }) {
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
  <div className={styles.container}>
    <div className={styles.image}>
      <Img fluid={data.about.childImageSharp.fluid} />
    </div>
    <div className={styles.text}>
      <div className={styles.title}>
        Hi, my name is Ryan!
      </div>
      <div className={styles.bio}>
        I’m a Cloud Architect and Instructor. I’ve architected and developed cloud applications, and led teams at Expedia, T-Mobile, and Kuali. I teach online with Pluralsight, O’Reilly, and LinkedIn Learning, and in person at Seattle Central College and the University of Washington.
        <br /><br />
        My path into software was a little different. I taught myself how to code over 20 years ago by building websites to promote the bands I played in and my Japanese music record label. After traveling around the world playing music, I transitioned into a software career. I grew my expertise in software development and expanded into the cloud with AWS. I currently hold the AWS Certified Architect and AWS Certified Developer Associate certifications.
        <br /><br />
        In my free time, I develop card games, run <a href="https://www.meatcube.com">MeatCubeLabel</a>, a record label that releases Japanese underground music, and co-host <a href="https://soundcloud.com/tabletennistalk">Table Tennis Talk</a>, a podcast about ping pong.
      </div>
    </div>
  </div>
  <Footer />
</>
