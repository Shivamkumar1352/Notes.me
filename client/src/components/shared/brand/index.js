import React from 'react'
import styles from './brand.module.scss'
import BrandImg from '../../../assets/brand.svg'
function BrandLogo() {
  return (
    <article className={styles.brand}>
        <img src={BrandImg} alt='brand-logo'/>
        <h1>NOTE.<span>me</span></h1>
    </article>
  )
}

export default BrandLogo