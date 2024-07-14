import React, { useState } from 'react'
import styles from './form.module.scss'
import BrandLogo from '../../../../components/shared/brand'
import { Icon } from '@iconify/react'
import Input from '../../../../components/atoms/input'
import Button from '../../../../components/atoms/button'

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <section className={styles["form-container"]}>
      <BrandLogo />
      <div className={styles.form}>

        <Button text='Join with Google' icon='ri:google-fill' />

        <div className={styles.option}>
          <span>or Join with email address</span>
        </div>

        <article className={styles.details}>
          <Input type={'email'} placeholder={'Enter your Email Id'} value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input type={'password'} placeholder={'Enter your password'} value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button text='Join with email' icon='material-symbols:login' className={styles.loginBtn} />
        </article>
      </div>
    </section>
  )
}

export default Form