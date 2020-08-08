import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'

import 'typeface-quicksand'
import styles from './header.module.css'

export default () => <>
  <header className={styles.header}>
    <div className={styles.menu}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link to="/">RYANLEWIS.dev</Link>
        </div>
        <div className={styles.item}>
          <Link to="/courses/">COURSES</Link>
        </div>
        <div className={styles.item}>
          <Link to="/blog/">BLOG</Link>
        </div>
        <div className={styles.item}>
          <a href="https://twitter.com/search?q=ryanmurakami%20%23100daysofcloud">100 DAYS OF CLOUD</a>
        </div>
        <div className={styles.item}>
          <Link to="/about/">ABOUT</Link>
        </div>
      </div>
      <div className={styles.right}>
        <div>
          <a aria-label="Twitter" href="https://twitter.com/ryanmurakami">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
        <div>
          <a aria-label="GitHub" href="https://github.com/ryanmurakami">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/ryan-h-lewis/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  </header>
</>
