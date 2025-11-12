import Link from 'next/link'
import styles from './ArticleCard.module.css'

interface ArticleCardProps {
  title: string
  description: string
  readTime: string
  category: string
  badge: string
  href: string
  gradient: string
  icon: string
}

export default function ArticleCard({
  title,
  description,
  readTime,
  category,
  badge,
  href,
  gradient,
  icon
}: ArticleCardProps) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.imageContainer} style={{ background: gradient }}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.badge}>{badge}</div>
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.category}>{category}</span>
          <span className={styles.readTime}>{readTime}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.link}>
          Read article
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </Link>
  )
}
