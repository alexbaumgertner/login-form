import styles from './Button.module.css'
import React from 'react'

interface ButtonProps {
  type?: 'submit' | 'reset'
  children: JSX.Element | string
}

const Button = (props: ButtonProps): JSX.Element => {
  return (
    <button className={styles.button} type={props.type}>
      {props.children}
    </button>
  )
}

export default Button
