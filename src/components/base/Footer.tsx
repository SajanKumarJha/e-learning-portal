import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({ logo }: { logo?: boolean }) => {
  return (
    <div className='sl-footer--main'>
      <div className="sl-footer--logo">
        {!logo && (
          <Link to={'https://skyluscloud.com/'} target='_blank'>
            <img src='./logo.svg' alt="Skylus Logo" />
          </Link>
        )}
      </div>
      <div className="sl-footer--copyright">
        <div className="sl-footer-logo--list">
          <Link to={'https://www.netwebindia.com/makeinindia/'} target='_blank'>
            <img src='./mklogo.svg' alt="Make In India Logo" />
          </Link>
          <Link to={'https://tyronesystems.com/'} target='_blank'>
            <img src='./tylogo.svg' alt="Tyrone Logo" />
          </Link>
          <Link to={'https://netwebindia.com/'} target='_blank'>
            <img src='./nwlogo.svg' alt="Netweb Logo" />
          </Link>
        </div>
        <p>Copyright © 2024 <span className='text-blue-600 font-black tracking-wider'>Skylus</span> All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer