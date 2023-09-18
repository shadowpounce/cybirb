import styles from './Ticker.module.scss'

export const Ticker = () => {
  return (
    <div className={styles.ticker}>
      <div className={styles.tickerRow}>
        <big className={styles.tickerText}>
          \\ Smart Contract =^DAppsy; ^Cybersecurity * \\Web3 \\ Audit * \\ ZK
          proof =^Privacy
        </big>
        <big className={styles.tickerText}>
          \\ Smart Contract =^DAppsy; ^Cybersecurity * \\Web3 \\ Audit * \\ ZK
          proof =^Privacy
        </big>
      </div>
      <div className={styles.tickerBackground}></div>
    </div>
  )
}
