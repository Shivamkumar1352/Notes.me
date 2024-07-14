import React from 'react'
import Left from './sections/left'
import Form from './sections/form'

import styles from './login.module.scss'

function Login() {
  return (
    <main className={styles.container}>
      <Left />
      <Form />
      <h1></h1>
    </main>

  )
}

export default Login