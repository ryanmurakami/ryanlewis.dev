import React from 'react'
import { Link } from 'gatsby'

import 'typeface-quicksand'
import styles from './footer.module.css'

export default () => <>
  <footer className={styles.footer}>
    Copyright 2020 | Ryan H Lewis | <Link to="contact">Contact</Link>
  </footer>
</>
