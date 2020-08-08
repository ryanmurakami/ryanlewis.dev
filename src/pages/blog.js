import React from 'react'
import { Helmet } from 'react-helmet'

import 'typeface-quicksand'
import styles from './blog.module.css'
import Header from '../components/header'
import Footer from '../components/footer'

export default () => <>
  <Helmet>
    <html lang="en" />
    <meta charSet="utf-8" />
    <title>Ryan Lewis - Blog</title>
    <link rel="canonical" href="https://ryanlewis.dev/blog/" />
  </Helmet>
  <Header />
  <main className={styles.container}>
    Nothing to see here yet! Come back soon.
  </main>
  <Footer />
</>
