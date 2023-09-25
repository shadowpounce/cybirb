import { FC } from 'react'
import styles from './FeatureCard.module.scss'

interface IProps {
  icon: string
  title: string
  text: string[]
}

export const FeatureCard: FC<IProps> = ({ icon, title, text }) => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureCardContent}>
        <div className={styles.featureCardIcon}>
          <img src={icon} alt="" />
        </div>
        <span className={styles.featureCardTitle}>{title}</span>
        <div className={styles.featureCardText}>
          {text.map((text) => (
            <p>// {text}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
