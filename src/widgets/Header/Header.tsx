import { useContext, useEffect, useRef } from 'react'
import clsx from 'clsx'
import { Logo } from '../../shared/Logo/Logo'
import styles from './Header.module.scss'
import { Button } from '../../shared/Button/Button'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.headerNav}>
          <div className={styles.headerLogo}>
            <Logo />
          </div>
          <div className={styles.headerGroup}>
            <Button>Request Aduit</Button>
            <button className={styles.headerMenuButton}>
              <span>menu</span>
              <span>[ // ]</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
