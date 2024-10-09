import React from 'react'
import Globe from '../magicui/Globe'
import { Link } from 'react-router-dom'


const WhyChooseUs = () => {
    return (
        <div className='sl-whychooseus--main'>
            <div className="sl-whychooseus--title">
                <h6>Why Choose Us?</h6>
                <ul>
                    <li><strong>Scalable Infrastructure</strong> Scale your resources on demand, whether it's compute, storage, or network capacity.</li>
                    <li><strong>Top-Tier Security</strong> Protect your data with advanced security features, including encryption, firewalls, and identity management.</li>
                    <li><strong>Cost-Efficient</strong> Pay only for what you use, with transparent pricing and no hidden fees.</li>
                    <li><strong>24/7 Support</strong> Get expert help anytime with our round-the-clock customer support.</li>
                </ul>
                <Link to={"/register"} target='_blank' className='sl-calltoaction-auth-register--link'>
                    <i className='sl-icon--register' />
                    <span>Register</span>
                </Link>
            </div>
            <div className="sl-whychooseus--globe">
                <Globe />
            </div>

        </div>
    )
}

export default WhyChooseUs