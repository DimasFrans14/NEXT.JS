import React from 'react'
import Image from 'next/image'
import styles from './Content.module.css'

export default function index() {
  return (
      <>
        <div className={styles['color-bg']}>
            <div className="container pt-5">
                <div className="container-fluid pt-3">
                    <div className="row align-items-center">
                        <br/><br/>
                        <div className="col-6">
                            <Image src={'/feature_3.png'} width={588} height={650} alt='phone'></Image>
                        </div>
                        <div className="col-4 offset-2">
                            <h1>Make It Easy With Us!</h1>
                            <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit provident asperiores optio a tempore quisquam! Distinctio sint, similique corporis aut cumque voluptas tempora maxime architecto.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles['color-bg-2']}>
            <div className="container pt-5">
                <div className="container-fluid pt-3">
                    <div className="row align-items-center">
                        <br/><br/>
                        <div className="col-5">
                            <h1 className='text-warning'>Increase you maximum Memory!</h1>
                            <p className='text-light fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit provident asperiores optio a tempore quisquam! Distinctio sint, similique corporis aut cumque voluptas tempora maxime architecto.</p>
                        </div>
                        <div className="col-4 offset-3">
                            <Image src={'/download.png'} width={784} height={759} alt='phone'></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles['color-bg-3']}>
            <div className="container">
                <div className="container-fluid pb-5">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <Image src={'/presentation2.png'} width={1366} height={768} alt='phone'></Image>
                            <h1 className='text-center'>Upgrade your App Performance!</h1>
                            <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, ratione. Quaerat, repellat culpa cupiditate quisquam nesciunt in iste illo suscipit repellendus vero exercitationem voluptate quasi vel totam magni illum adipisci a deleniti ut sit perspiciatis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
