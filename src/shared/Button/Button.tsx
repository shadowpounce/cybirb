import clsx from 'clsx'
import React, { FC, ReactNode } from 'react'
import styles from './Button.module.scss'

interface IProps {
  children: ReactNode
  handleClick?: () => void
  size?: 'normal' | 'big'
  type?: 'button' | 'link'
  href?: string
}

export const Button: FC<IProps> = ({
  children,
  size = 'normal',
  handleClick,
  type = 'button',
  href,
}) => {
  return type === 'button' ? (
    <button
      onClick={() => {
        handleClick && handleClick()
      }}
      className={clsx(styles.button, styles[size])}
    >
      <div className={styles.content}>{children}</div>
    </button>
  ) : (
    <a
      href={href}
      onClick={() => {
        handleClick && handleClick()
      }}
      className={clsx(styles.button, styles[size])}
    >
      <div className={styles.content}>{children}</div>
    </a>
  )
}
