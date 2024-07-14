import React from 'react'
import styles from './input.module.scss'
function Input(props) {
    const {type, value, onChange, title, placeholder, className, isDisable} = props
  return (
    <article className={`${styles.box}`}>
        {title && <h4>{title}</h4>}
        <input 
            type={type || 'text'}
            placeholder={placeholder || title}
            value={value}
            onChange={onChange}
            disabled={isDisable}
        />
    </article>
  )
}

export default Input