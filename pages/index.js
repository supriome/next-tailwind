import Head from 'next/head'
import UserLists from "../components/UserLists";
import GraphQLUserLists from "../components/GraphQLUserLists";
import Cookie from "../components/Cookie";
import People from "../components/People";
import Cors from '../components/Cors'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className="md:flex">
          <People />
        </div>

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-2">
          <div className="md:flex md:flex-col">
            <div className="p-8">
              <p className="mt-2 text-gray-500">
                <Cookie />
              </p>
            </div>
          </div>
        </div>

        <div className={styles.grid}>

          <div className={styles.card}>
            <Cors />
          </div>
          <div className={styles.card}>
            <UserLists />
          </div>
          <div className={styles.card}>
            <GraphQLUserLists />
          </div>
           
          <div className={styles.card}>
            <GraphQLUserLists />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
