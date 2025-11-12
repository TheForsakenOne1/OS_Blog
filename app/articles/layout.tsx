import Navbar from '../components/Navbar'
import styles from './article.module.css'
import Link from 'next/link'

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <div className={styles.articleLayout}>
        {children}
        <div className={styles.backContainer}>
          <Link href="/" className={styles.backLink}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to all articles
          </Link>
        </div>
      </div>
    </>
  )
}
