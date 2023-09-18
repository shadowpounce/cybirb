import clsx from 'clsx'
import React, { FC, ReactNode } from 'react'
import styles from './Button.module.scss'

interface IProps {
  children: ReactNode
  size?: 'normal' | 'big'
}

export const Button: FC<IProps> = ({ children, size = 'normal' }) => {
  return (
    <button className={clsx(styles.button, styles[size])}>
      <div className={styles.content}>{children}</div>
    </button>
  )
}
