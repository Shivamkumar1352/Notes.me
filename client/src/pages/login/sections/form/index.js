import React from 'react'
import styles from './form.module.scss'
import BrandLogo from '../../../../components/shared/brand'
import { Icon } from '@iconify/react'

function Form() {
  return (
    <section className={styles["form-container"]}>
      <BrandLogo />
      <div className={styles.form}>
        <article>
          <Icon icon={"ri:google-fill"} />
          <h3>Join with Google</h3>
        </article>
        <div className={styles.optiom}>
        <span>or Join with email address</span>  
        </div>
      </div>
    </section>
  )
}

export default Form