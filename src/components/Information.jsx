import React from 'react'
import mail from '../images/mail.png'

export const Information = () => {
    return (
        <div className='information'>
            <h1 className='info-title' id='info'>Information</h1>
            <div className='info'>
                <article>
                    <figure>
                        <a href="https://aventura-se.com/sato/MailForm01_utf8/">
                            <img src={mail} alt="info" />
                        </a>
                        <figcaption className='caption'>
                            <p className='caption-title'></p>
                            <p className='caption-info'></p>
                        </figcaption>
                    </figure>
                </article>
            </div>
        </div>
    )
}