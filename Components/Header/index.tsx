import React from 'react'
import styles from './Header.module.css'
import Image from 'next/image'

export default function Header() {

  return (
    <>
    <div className='body'>
      <div className={styles['bg-light']}>
        <div className="container">
          <div className="container-fluid">
            <div className="row align-items-center pt-5">
              <div className="col-5 text-start">
                <h1 className='text-warning'>Holla!
                <br/>
                <span> Enjoy and explore your App with your creativity</span>
                </h1><br/>
                <p className='fst-italic text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo deleniti totam et mollitia harum! Ad fuga minima minus eligendi corrupti.</p>
              </div>

              <div className="col-5 offset-2 pt-5">
                <Image src={'/Frame 19.png'} width={784} height={759} alt='phone'></Image>
              </div>
            </div>  
          </div>  
        </div>
      </div>
    </div>
    </>
    
  )
}