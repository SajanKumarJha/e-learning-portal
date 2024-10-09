import React from 'react'
import Header from '../base/Header'
const Hero = () => {
    return (
        <>
            <div className="sl-hero-main">
                <Header />

                <div className="sl-hero-main--area">
                    <div className="sl-hero-main--content">
                        <h1 className="sl-hero-main-content--title">Unleash the Power of the Cloud with Our All-in-One Platform</h1>
                        <p>Our public cloud platform offers businesses scalable infrastructure, tools for innovation, and robust security, supporting startups to enterprises with the flexibility and performance needed to manage any workload efficiently.</p>
                        <div className="sl-hero-main--subscribe">
                            <div className="sl-hero-subscribe-input--area">
                                <i className='sl-icon--email' />
                                <input type='email' placeholder='Enter E-mail' className='sl-hero-subscribe--input' />
                            </div>
                            <div className="sl-hero-subscribe-btn--area">
                                <button type='button' className='sl-hero-subscribe--btn'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero