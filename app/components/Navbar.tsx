'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#FF385C"/>
            <path d="M16 8C12.5 8 10 10.5 10 13.5C10 17.5 16 24 16 24C16 24 22 17.5 22 13.5C22 10.5 19.5 8 16 8ZM16 15.5C15.17 15.5 14.5 14.83 14.5 14C14.5 13.17 15.17 12.5 16 12.5C16.83 12.5 17.5 13.17 17.5 14C17.5 14.83 16.83 15.5 16 15.5Z" fill="white"/>
          </svg>
          <span className={styles.logoText}>OS Interview Prep</span>
        </Link>

        <div className={styles.nav}>
          <Link href="/" className={styles.navLink}>
            Articles
          </Link>
          <Link href="#topics" className={styles.navLink}>
            Topics
          </Link>
          <Link href="#about" className={styles.navLink}>
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}
