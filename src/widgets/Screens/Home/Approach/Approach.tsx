import clsx from 'clsx'
import styles from './Approach.module.scss'
import { Ticker } from '../../../../shared/Ticker/Ticker'
import { approaches } from '../../../../data'
import { ApproachCard } from '../../../../entities/ApproachCard/ApproachCard'

export const Approach = () => {
  return (
    <section className={clsx(styles.approach, 'section')}>
      <div className={styles.approachHead}>
        <div className="container space-top">
          <div className="section-head">
            <div className="line"></div>
            <span>[ 02 ]</span>
            <div className="section-head-icon">
              <img src="/images/icons/blog-head-icon.svg" alt="" />
            </div>
          </div>
          <div className="section-text-group">
            <div className="section-title-block">
              <span className="section-label">// information security</span>
              <h2>
                Our <br /> Approach
              </h2>
            </div>
          </div>
          <div className={clsx('section-text-block', styles.approachTextBlock)}>
            <p>
              <div className="triangle"></div>
              leveraging best-in-class AI technology to protect and monitor
              blockchain protocols and smart ntracts.leveraging best-in-class AI
              technology to protect and monitor blockchain protocols and smart
              contracts.
            </p>
          </div>
        </div>
      </div>
      <Ticker />
      <div className="container">
        <div className={styles.approachCards}>
          {approaches.map((approach, idx) => (
            <ApproachCard
              id={idx + 1}
              title={approach.title}
              text={approach.text}
              icon={approach.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
