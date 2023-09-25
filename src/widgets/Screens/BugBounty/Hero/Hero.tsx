import clsx from 'clsx'
import styles from './Hero.module.scss'
import { Button } from '../../../../shared/Button/Button'
import { HeroBg } from './components/HeroBg'

export const Hero = () => {
  return (
    <section className={clsx('section', styles.hero)}>
      <div className={styles.heroBg}>
        <HeroBg />
      </div>
      <div className="container space-top space-bottom">
        <div className="section-text-group">
          <div className="section-title-block">
            <span className="section-label">// Cybirb’s Bug Bounty</span>
            <h2>CybNest: Building a Secure Web3 together</h2>
          </div>
          <div className={clsx('section-text-block', styles.heroTextBlock)}>
            <p>
              <div className="triangle"></div>
              Providing a hub for project owners and hackers to collaborate,
              identify vulnerabilities, and improve the security of Web3 and
              Blockchain projects.
            </p>
            <p>
              Harness the Collective Expertise of the World's Leading Ethical
              Hackers, offering Continuous Assessment to Uncover Vulnerabilities
              Ahead of the Curve.
            </p>
            <Button size="big">Join now</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
