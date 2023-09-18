import { FC, useRef } from 'react'

import styles from './Logo.module.scss'

export const Logo = () => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div ref={ref} className={styles.logo}>
      <img src="/images/logo.svg" alt="" />
    </div>
  )
}
