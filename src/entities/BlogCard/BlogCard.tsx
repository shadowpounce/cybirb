import { FC } from 'react'
import styles from './BlogCard.module.scss'

interface IProps {
  title: string
  thumbnail: string
  id: number
}

export const BlogCard: FC<IProps> = ({ title, thumbnail, id }) => {
  return (
    <div className={styles.blogCard}>
      <img src={thumbnail} alt="" className={styles.blogCardThumbnail} />
      <div className={styles.blogCardContent}>
        <div className={styles.blogCardInfo}>
          <div className="card-number">[ 0{id} ]</div>
          <span className={styles.blogCardTitle}>{title}</span>
        </div>
        <a href="" className={styles.blogCardLink}>
          Read details
          <div className="link-arrow"></div>
        </a>
      </div>
    </div>
  )
}
