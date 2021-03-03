import React from 'react'
import Link from 'next/link'
import { Button } from '../../components'

import styles from './LoginForm.module.css'

const LoginForm: React.FunctionComponent = (): JSX.Element => {
  return (
    <form className={styles.form} method="post" action="/login/enter">
      <input
        className={styles.login}
        type="text"
        name="login"
        placeholder="login or email"
      />
      <input
        className={styles.password}
        type="password"
        name="password"
        placeholder="password"
      />

      <div className={styles.captcha} />

      <div className={styles.enter}>
        <Button className={styles.submit} type="submit">
          Log in
        </Button>

        <label htmlFor="remember_me">
          <span>Remember me</span>
          <input type="checkbox" name="remember_me" id="remember_me" />
        </label>
      </div>

      <div className={styles.other}>
        <p>
          <Link href="/login/restore">
            <a>Forgot your password?</a>
          </Link>
        </p>
        <p>
          <Link href="/login/register">
            <a>Register</a>
          </Link>
        </p>
      </div>
    </form>
  )
}

export default LoginForm
