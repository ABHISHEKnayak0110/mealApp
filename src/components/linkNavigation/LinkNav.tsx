import React from 'react'
import style from "./LinkNav.module.scss"
import Link from 'next/link';
import { FaFacebookF, FaTwitter ,FaInstagram, FaYoutube, FaPinterest, FaWifi } from 'react-icons/fa'

function LinkNav() {
  return (
    <div className={style.linkNavWrapper}>
     <div className={style.containerLinkName}>
            <Link href="/">
            <p className="">HOME</p>
            </Link>
            <Link href="/">
              <p className="">CATEGORIES</p>
            </Link>
            <Link href="/">
              <p className="">RECIPES</p>
            </Link>
            <Link href="/contact">
              <p className="">CONTACT</p>
            </Link>
            <Link href="/about">
              <p className="">ABOUT</p>
            </Link>
     </div>
     <div className={`${style.icons}` } >
      <span className='cursor-pointer'>
      <FaInstagram size={15} />
      </span>
      <span className='cursor-pointer'><FaTwitter size={15} /></span>
      <span className='cursor-pointer'><FaFacebookF size={15} /></span>
      <span className='cursor-pointer'><FaPinterest size={15} /></span>
      <span className='cursor-pointer'><FaWifi size={15} /></span>
      <span className='cursor-pointer'> <FaYoutube size={15} /></span>
     
      
     </div>
    </div>
  )
}

export default LinkNav