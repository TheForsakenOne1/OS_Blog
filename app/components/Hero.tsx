import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Master Operating Systems for Your Next Interview
          </h1>
          <p className={styles.subtitle}>
            Comprehensive, interview-focused guides covering processes, threads, memory management,
            synchronization, and everything you need to ace your technical interviews.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>8</div>
              <div className={styles.statLabel}>In-depth Articles</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Key Concepts</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Interview Ready</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
