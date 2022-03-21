import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../Components/Header'
import styles from '../styles/Home.module.css'
import Content from '../Components/Content';
import Layout from '../Components/Layout'
import Footer from '../Components/Footer'

const Home: NextPage = () => {
  return (
    <>
    <div>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>

    <div>
      <Layout pageTitle='Landing Page'>
        <Header/>
        <Content/>
      </Layout>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
    </>
  )
}

export default Home
