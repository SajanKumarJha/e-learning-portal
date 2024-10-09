import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ link }: { link?: boolean }) => {
    return (
        <header className='sl-header-main'>
            <div className="sl-header--logo">
                <a href={"/"} className='sl-header-logo--link'>
                    <img src='./logo.svg' alt='Logo' className='sl-header-logo--image' />
                </a>
            </div>
            <div className="sl-header--auth">
                {!link && (
                    <>
                        <div className="sl-header-auth--login">
                            <Link to={"./"} target='_blank' className='sl-header-auth-login--link'>
                                <i className='sl-icon--login' />
                                <span>Login</span>
                            </Link>
                        </div>
                        <div className="sl-header-auth--register">
                            <Link to={"/register"} target='_blank' className='sl-header-auth-register--link'>
                                <i className='sl-icon--register' />
                                <span>Sign Up</span>
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </header>
    )
}

export default Header