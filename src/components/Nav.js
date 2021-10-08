import * as React from 'react'
import { navContainer, navLogo, navMenu, navLinks, navLinkItem, navLinkText } from './nav.module.css'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

export const Nav = () => {
   return (
       <div className={navContainer}>
           <Link className={navLogo} to="/"> 
            <StaticImage
                alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                src="../images/logo-desktop.svg"
            />
           </Link>
            <nav className={navMenu}>
                <ul className={navLinks}>
                
                <li className={navLinkItem}>
                    <Link className={navLinkText} to="/">Home</Link>
                    </li>
                <li className={navLinkItem}>
                    <Link className={navLinkText} to="/about">About</Link>
                    </li>
                <li className={navLinkItem}>
                    <Link className={navLinkText} to="/blog">Blog</Link>
                    </li>
                    <li className={navLinkItem}>
                    <Link className={navLinkText} to="/products">Products</Link>
                    </li>
                </ul>
             </nav>
       
      
       </div>
   ) 
}


export default Nav