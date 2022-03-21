import React from 'react'
import Head from 'next/head'
import styles from './Footer.module.css'

export default function index() {
  return (
     <>
      <Head>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

      </Head>
    <div>
        <footer className={styles['color-bg']}>
        <div className="container">
          <div className="container-fluid">
            <div className="row mt-5 pt-5">
              <div className="col-md-3 col-lg-3 col-xl-3">
                <h5 className="text-warning text-uppercase mb-4 fw-bold">Vercel | App</h5>
                <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos explicabo minus odit, dicta ducimus dolore soluta, autem similique, neque error eveniet dolorum provident eaque debitis iste quas doloremque. Eum itaque sint dolorum odio quis?</p>
              </div>
              <div className="col-lg-2 offset-lg-1 col-md-2 col-xl-2">
                <h5 className="text-warning text-uppercase mb-4 fw-bold">Product</h5>
                <p>
                  <a href="#" className="text-light">Packet 1</a>
                </p>
                <p>
                  <a href="#" className="text-light">Packet 2</a>
                </p>
                <p>
                  <a href="#" className="text-light">Packet 3</a>
                </p>
                <p>
                  <a href="#" className="text-light">Packet 4</a>
                </p>
              </div>
              <div className="col-lg-2 col-md-2 col-xl-2">
                <h5 className="text-warning text-uppercase mb-4 fw-bold">Usefull Link</h5>
                <p>
                  <a href="#" className="text-light">Your Account</a>
                </p>
                <p>
                  <a href="#" className="text-light">About Me</a>
                </p>
                <p>
                  <a href="#" className="text-light">Careers</a>
                </p>
                <p>
                  <a href="#" className="text-light">Info</a>
                </p>
              </div>
              <div className="col-lg-3 offset-lg-1 col-md-3 col-xl-3">
                <h5 className="text-warning text-uppercase mb-4 fw-bold">Contact</h5>
                <p className='text-light'>
                  New York, NY 2333 US
                </p>
                <p className='text-light'>
                  dimasfranss@gmail.com
                </p>
                <p className='text-light'>
                  +62 812 3456 7890
                </p>
                <p className='text-light'>
                  +62 812 3456 7890
                </p>
              </div>
            </div>
            
            <div className="row align-item-center pb-4 mt-4">
              <div className="col-md-7 col-lg-8 col-lg-12">
                <p className='text-light text-center'>
                  Copyright @2022 All Rights Reserved by: <a href="#" className="text-warning fw-bold">VeApp</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}
