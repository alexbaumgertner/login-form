import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  type?: 'submit' | 'reset'
  children: JSX.Element | string
  className: string | null
}

const Button: React.FunctionComponent<ButtonProps> = ({
  type,
  className,
  children,
}): JSX.Element => {
  let currentClassName = styles.button

  if (className) {
    currentClassName = `${currentClassName} ${className}`
  }

  return (
    <button className={currentClassName} type={type}>
      {children}
    </button>
  )
}

export default Button
