import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { LoginForm } from '../src/components'

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>React based form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <LoginForm />
      </main>
    </div>
  )
}
