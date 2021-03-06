import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import 'typeface-quicksand'
import styles from './contact.module.css'
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
  <Helmet>
    <html lang="en" />
    <meta charSet="utf-8" />
    <title>Ryan Lewis - Contact</title>
    <link rel="canonical" href="https://ryanlewis.dev/contact/" />
  </Helmet>
  <Header />
  <main className={styles.container}>
    <div className={styles.image}>
      <Img fluid={data.about.childImageSharp.fluid} />
    </div>
    <div className={styles.text}>
      <div className={styles.title}>
        Well, hello there!
      </div>
      <div className={styles.bio}>
        Send me a message on Twitter: <a href="https://www.twitter.com/ryanmurakami">@ryanmurakami</a>
        <br /><br />
        Send me an email: ryan (at) ryanlewis.dev
      </div>
    </div>
  </main>
  <Footer />
</>
