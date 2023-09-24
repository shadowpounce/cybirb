import { useContext, useEffect, useRef } from 'react'
import clsx from 'clsx'
import { Logo } from '../../shared/Logo/Logo'
import styles from './Header.module.scss'
import { Button } from '../../shared/Button/Button'
import { MainContext } from '../../app/providers/MainContext'

const Header = () => {
  const { menuActive, setMenuActive } = useContext(MainContext)

  return (
    <header className={clsx(styles.header, menuActive && styles.menuActive)}>
      <div className="container">
        <nav className={styles.headerNav}>
          <div className={styles.headerLogo}>
            <Logo />
          </div>
          <div className={styles.headerGroup}>
            <Button>Request Aduit</Button>
            <button
              onClick={() =>
                !menuActive ? setMenuActive(true) : setMenuActive(false)
              }
              className={clsx(
                styles.headerMenuButton,
                menuActive && styles.active
              )}
            >
              <span>menu</span>
              <span className={styles.icon}>
                [ <span className={styles.first}>/</span>
                <span className={styles.second}>/</span> ]
              </span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
