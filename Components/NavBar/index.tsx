import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from './NavBar.module.css'
import Link from 'next/link'

export default function NavBar() {
  return (
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      </Head>
      
      <nav>
            <ul className={styles.ul}>
              <li>
                <a className="navbar-brand" href="#">
                  <span className={styles.logo}>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                  </span>
                </a>
              </li>
              <li className={styles.li}><Link href="/"><a className={styles.item}>Home</a ></Link></li>
              <li className={styles.li}><Link href="/News"><a className={styles.item}>News</a></Link></li>
              <li className={styles.li}><Link href="/Contact"><a className={styles.item}>Contact</a></Link></li>
              <li className={styles.li}><Link href="/About"><a className={styles.item}>About</a></Link></li>
            </ul>
      </nav>
    </>
  )
}