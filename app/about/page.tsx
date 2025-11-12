import styles from './about.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'About - OS Interview Prep',
  description: 'Learn about OS Interview Prep - your comprehensive guide to mastering operating systems concepts for technical interviews.',
}

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>About OS Interview Prep</h1>
          <p className={styles.subtitle}>
            Your comprehensive guide to mastering operating systems for technical interviews
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <section className={styles.section}>
          <h2>Our Mission</h2>
          <p>
            OS Interview Prep was created to bridge the gap between theoretical operating systems knowledge
            and practical interview preparation. We believe that understanding OS concepts shouldn't be
            intimidating or overwhelming.
          </p>
          <p>
            Our mission is to provide clear, comprehensive, and interview-focused content that helps you
            master operating systems concepts and ace your technical interviews with confidence.
          </p>
        </section>

        <section className={styles.section}>
          <h2>What Makes Us Different</h2>
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🎯</div>
              <h3>Interview-Focused</h3>
              <p>Every article is tailored specifically for technical interviews, with common questions and practical examples.</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>📚</div>
              <h3>Comprehensive Coverage</h3>
              <p>From basic concepts to advanced topics, we cover everything you need to know about operating systems.</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>💡</div>
              <h3>Clear Explanations</h3>
              <p>Complex concepts broken down into easy-to-understand explanations with real-world examples.</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>⚡</div>
              <h3>Quick Reference</h3>
              <p>Tables, comparisons, and summaries for quick review before interviews.</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🔄</div>
              <h3>Regular Updates</h3>
              <p>Content regularly updated to reflect current interview trends and best practices.</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🎨</div>
              <h3>Beautiful Design</h3>
              <p>Clean, AirBnB-inspired design makes learning enjoyable and content easy to navigate.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>What You'll Learn</h2>
          <div className={styles.topics}>
            <div className={styles.topicGroup}>
              <h3>Core Concepts</h3>
              <ul>
                <li>Processes and Threads</li>
                <li>CPU Scheduling Algorithms</li>
                <li>Process Synchronization</li>
                <li>Deadlock Handling</li>
              </ul>
            </div>
            <div className={styles.topicGroup}>
              <h3>Memory Management</h3>
              <ul>
                <li>Memory Allocation</li>
                <li>Paging and Segmentation</li>
                <li>Virtual Memory</li>
                <li>Page Replacement</li>
              </ul>
            </div>
            <div className={styles.topicGroup}>
              <h3>Storage & I/O</h3>
              <ul>
                <li>File Systems</li>
                <li>Disk Scheduling</li>
                <li>I/O Systems</li>
                <li>Storage Management</li>
              </ul>
            </div>
            <div className={styles.topicGroup}>
              <h3>Communication</h3>
              <ul>
                <li>Inter-Process Communication</li>
                <li>Pipes and Sockets</li>
                <li>Shared Memory</li>
                <li>Message Passing</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Who This Is For</h2>
          <div className={styles.audience}>
            <div className={styles.audienceCard}>
              <h3>🎓 Students</h3>
              <p>Computer science students preparing for exams and building foundational knowledge in operating systems.</p>
            </div>
            <div className={styles.audienceCard}>
              <h3>💼 Job Seekers</h3>
              <p>Software engineers and developers preparing for technical interviews at top tech companies.</p>
            </div>
            <div className={styles.audienceCard}>
              <h3>🚀 Professionals</h3>
              <p>Experienced developers looking to refresh their OS knowledge or switch to systems programming.</p>
            </div>
            <div className={styles.audienceCard}>
              <h3>📖 Self-Learners</h3>
              <p>Anyone passionate about understanding how operating systems work under the hood.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>How to Use This Site</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3>Start with Fundamentals</h3>
                <p>Begin with Process vs Thread and CPU Scheduling to build a strong foundation.</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3>Follow the Roadmap</h3>
                <p>Use our <Link href="/roadmap">learning roadmap</Link> to guide your study path.</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3>Practice Questions</h3>
                <p>Review common interview questions at the end of each article.</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <h3>Quick Review</h3>
                <p>Use comparison tables and summaries for last-minute revision.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <h2>Ready to Start Learning?</h2>
          <p>Explore our comprehensive articles and master operating systems concepts today.</p>
          <div className={styles.ctaButtons}>
            <Link href="/" className={styles.primaryButton}>
              Browse Articles
            </Link>
            <Link href="/roadmap" className={styles.secondaryButton}>
              View Learning Path
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
