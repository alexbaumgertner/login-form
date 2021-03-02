import Head from 'next/head'
import styles from '../styles/Home.module.css'

import {
  Form,
} from '../src/components'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React based form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to React based form!
        </h1>
        <Form />
      </main>
    </div>
  )
}
