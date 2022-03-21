import React, { ReactNode } from 'react'
import Head from 'next/head'
import NavBar from '../NavBar';
import Footer from '../Footer';

interface LayoutProps{
  children: ReactNode;
  pageTitle: string;
}

export default function Layout(props: LayoutProps) {
  
  const {children, pageTitle} = props;

  return (
    <>
      <Head>
        <title>NextJS | {' '} {pageTitle}</title>
        <meta name="description" content="NextJS Landing Page" />
      </Head>
      <NavBar/>
      <div>{children}</div>
      <Footer />
    </>
  )
}
