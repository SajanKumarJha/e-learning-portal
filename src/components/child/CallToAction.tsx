import React from 'react'
import laptop from "../../../public/image3.svg"
import { Link } from 'react-router-dom'
const CallToAction = () => {
    return (
        <div className='sl-calltoaction--main'>
            <div className="sl-calltoaction-image--area">
                <img src={laptop} alt='' className='sl-calltoaction--image' />
            </div>
            <div className="sl-calltoaction--title">
                <h6>Ready to begin your journey on Skylus?</h6>
                <Link to={"/register"} target='_blank' className='sl-calltoaction-auth-register--link'>
                    <i className='sl-icon--register' />
                    <span>Register</span>
                </Link>
            </div>
        </div>
    )
}

export default CallToAction