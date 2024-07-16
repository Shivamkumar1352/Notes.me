import React from 'react'
import styles from './notes.module.scss'
import Wrapper from '../../components/hoc/wrapper'

function Notes() {
  return (
    <section className={styles.container}>
        Notes Dashboard
    </section>
  )
}

export default Wrapper (Notes)