import styles from '../article.module.css'

export default function Article() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.breadcrumb}>
            <a href="/">Home</a>
            <span>/</span>
            <span>Article</span>
          </div>
          <h1 className={styles.title}>Coming Soon</h1>
          <div className={styles.meta}>
            <span>OS Interview Prep</span>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <h2>Article Content</h2>
          <p>Comprehensive content for this topic is coming soon!</p>
        </div>
      </div>
    </>
  )
}
