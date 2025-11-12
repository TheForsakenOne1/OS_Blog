import styles from '../article.module.css'

export const metadata = {
  title: 'Deadlock: Detection, Prevention & Recovery | OS Interview Prep',
}

export default function Deadlock() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.breadcrumb}>
            <a href="/">Home</a>
            <span>/</span>
            <span>Deadlock</span>
          </div>
          <h1 className={styles.title}>Deadlock: Detection, Prevention & Recovery</h1>
          <div className={styles.meta}>
            <span>12 min read</span>
            <span>•</span>
            <span>Deadlock</span>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <h2>Introduction</h2>
          <p>Deadlock occurs when a set of processes are blocked, each waiting for a resource held by another process in the set.</p>
          <div className={styles.infoBox}>
            <h4>Four Necessary Conditions</h4>
            <p>Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait</p>
          </div>
        </div>
        <div className={styles.section}>
          <h2>Deadlock Prevention & Avoidance</h2>
          <p>Learn about Banker's algorithm, resource allocation graphs, and prevention strategies.</p>
        </div>
      </div>
    </>
  )
}
