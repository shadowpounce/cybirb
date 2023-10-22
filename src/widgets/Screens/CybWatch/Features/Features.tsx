import clsx from 'clsx'
import styles from './Features.module.scss'

export const Features = () => {
  return (
    <section className={clsx('section', styles.features)}>
      <div className="container space-top space-bottom">
        <div className="section-head">
          <div className="line"></div>
          <span>[ 02 ]</span>
          <div className="section-head-icon">
            <img src="/images/icons/blog-head-icon.svg" alt="" />
          </div>
        </div>
        <div className="section-text-group">
          <div className="section-title-block">
            <span className="section-label">// Blockchain Audit </span>
            <h3>
              Blockchain Protocol <br /> Audit Features
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
