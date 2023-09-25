import clsx from 'clsx'
import styles from './PlatformOffers.module.scss'
import { Button } from '../../../../shared/Button/Button'
import { platformOffers } from '../../../../data'
import { FeatureCard } from '../../../../entities/FeatureCard/FeatureCard'
import { Banner } from '../../../../entities/Banner/Banner'

export const PlatformOffers = () => {
  return (
    <>
      <section className={clsx('section', styles.platformOffers)}>
        <div className="container space-top space-bottom">
          <div className="section-head">
            <div className="line"></div>
            <span>[ 01 ]</span>
            <div className="section-head-icon">
              <img src="/images/icons/blog-head-icon.svg" alt="" />
            </div>
          </div>
          <div className="section-text-group">
            <div className="section-title-block">
              <span className="section-label">// Bug Bounty Platform</span>
              <h2>Cybirb’s Bug Bounty Platform offers.</h2>
            </div>
            <div className={clsx('section-text-block')}>
              <div className={styles.platformOffersStatistics}>
                <div className={styles.platformOffersStatistic}>
                  <span className={styles.platformOffersStatisticTitle}>
                    123 B+
                  </span>
                  <span className={styles.platformOffersStatisticText}>
                    Projecting userfund
                  </span>
                </div>
                <div className={styles.platformOffersStatistic}>
                  <span className={styles.platformOffersStatisticTitle}>
                    13 +
                  </span>
                  <span className={styles.platformOffersStatisticText}>
                    hackers on the team
                  </span>
                </div>
              </div>
              <Button size="big" type="link" href="/blog">
                join now
              </Button>
            </div>
          </div>
          <div className={styles.platformOffersFeatures}>
            {platformOffers.map((offer) => (
              <FeatureCard
                title={offer.title}
                text={offer.text}
                icon={offer.icon}
              />
            ))}
          </div>
        </div>
      </section>
      <Banner
        buttonTitle="Join now"
        href="/"
        title={'Ready to Join the Bug Bounty?'}
      />
    </>
  )
}
