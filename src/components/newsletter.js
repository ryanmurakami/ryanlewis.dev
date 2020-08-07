import React from 'react'

import styles from './newsletter.module.css'

export default () => <>
  <div id="mc_embed_signup">
    <div className={styles.message}>
      Sign up for my newsletter!
    </div>
    <form
      action="https://ryanhlewis.us12.list-manage.com/subscribe/post?u=530c9cfe17a6f12da76cb0cd9&amp;id=27630695d3"
      id="mc-embedded-subscribe-form"
      method="post"
      name="mc-embedded-subscribe-form"
      noValidate
      target="_blank"
    >
      <div className={styles.container} id="mc_embed_signup_scroll">
        <div>
          <label
            className={styles.visuallyHidden}
            htmlFor="mce-EMAIL"
          >
            Email Address
          </label>
          <input
            className={styles.input}
            defaultValue=""
            id="mce-EMAIL"
            name="EMAIL"
            placeholder="Email Address"
            type="email"
          />
        </div>
        <div aria-hidden="true" className={styles.hidden}>
          <input
            defaultValue=""
            name="b_530c9cfe17a6f12da76cb0cd9_27630695d3"
            tabIndex="-1"
            type="text"
          />
        </div>
        <div>
          <input
            className={styles.button}
            id="mc-embedded-subscribe"
            name="subscribe"
            type="submit"
            value="SIGN UP"
          />
        </div>
      </div>
    </form>
  </div>
</>