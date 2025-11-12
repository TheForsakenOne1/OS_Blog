import styles from './roadmap.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Learning Roadmap - OS Interview Prep',
  description: 'Step-by-step learning path to master operating systems concepts for interviews.',
}

const roadmap = [
  {
    phase: 'Phase 1: Foundations',
    duration: '1-2 weeks',
    description: 'Build a strong foundation with core OS concepts',
    topics: [
      {
        title: 'Process vs Thread',
        link: '/articles/process-vs-thread',
        difficulty: 'Beginner',
        time: '8 min',
        priority: 'Must Know'
      },
      {
        title: 'Inter-Process Communication',
        link: '/articles/ipc',
        difficulty: 'Beginner',
        time: '9 min',
        priority: 'Important'
      }
    ]
  },
  {
    phase: 'Phase 2: Process Management',
    duration: '1-2 weeks',
    description: 'Master process scheduling and synchronization',
    topics: [
      {
        title: 'CPU Scheduling Algorithms',
        link: '/articles/cpu-scheduling',
        difficulty: 'Intermediate',
        time: '10 min',
        priority: 'Must Know'
      },
      {
        title: 'Process Synchronization',
        link: '/articles/synchronization',
        difficulty: 'Intermediate',
        time: '14 min',
        priority: 'Must Know'
      },
      {
        title: 'Deadlock Handling',
        link: '/articles/deadlock',
        difficulty: 'Intermediate',
        time: '12 min',
        priority: 'Must Know'
      }
    ]
  },
  {
    phase: 'Phase 3: Memory Management',
    duration: '2-3 weeks',
    description: 'Deep dive into memory allocation and virtual memory',
    topics: [
      {
        title: 'Memory Management',
        link: '/articles/memory-management',
        difficulty: 'Intermediate',
        time: '11 min',
        priority: 'Must Know'
      },
      {
        title: 'Virtual Memory & Paging',
        link: '/articles/virtual-memory',
        difficulty: 'Advanced',
        time: '13 min',
        priority: 'Must Know'
      }
    ]
  },
  {
    phase: 'Phase 4: Storage & I/O',
    duration: '1-2 weeks',
    description: 'Learn about file systems and disk management',
    topics: [
      {
        title: 'File Systems',
        link: '/articles/file-systems',
        difficulty: 'Intermediate',
        time: '10 min',
        priority: 'Important'
      }
    ]
  },
  {
    phase: 'Phase 5: Practice & Review',
    duration: 'Ongoing',
    description: 'Reinforce learning through practice and mock interviews',
    topics: [
      {
        title: 'Review Common Interview Questions',
        link: '/',
        difficulty: 'All Levels',
        time: 'Varies',
        priority: 'Essential'
      },
      {
        title: 'Practice System Design',
        link: '/resources',
        difficulty: 'Advanced',
        time: 'Ongoing',
        priority: 'Important'
      }
    ]
  }
]

const tips = [
  {
    icon: '📖',
    title: 'Read Actively',
    description: 'Take notes and create your own summaries of each concept.'
  },
  {
    icon: '💻',
    title: 'Code Examples',
    description: 'Implement basic OS concepts in code to solidify understanding.'
  },
  {
    icon: '🗣️',
    title: 'Explain to Others',
    description: 'Teaching concepts to others helps identify gaps in knowledge.'
  },
  {
    icon: '🔄',
    title: 'Review Regularly',
    description: 'Revisit topics periodically to maintain retention.'
  },
  {
    icon: '❓',
    title: 'Practice Questions',
    description: 'Complete interview questions at the end of each article.'
  },
  {
    icon: '🎯',
    title: 'Focus on Understanding',
    description: 'Don\'t just memorize - understand the "why" behind concepts.'
  }
]

export default function Roadmap() {
  return (
    <div className={styles.roadmapPage}>
      <div className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Learning Roadmap</h1>
          <p className={styles.subtitle}>
            A structured path to master operating systems concepts in 6-8 weeks
          </p>
        </div>
      </div>

      <div className={styles.container}>
        {/* Overview */}
        <section className={styles.overview}>
          <h2>How to Use This Roadmap</h2>
          <p>
            This roadmap is designed to take you from OS fundamentals to interview-ready in 6-8 weeks.
            Each phase builds upon the previous one, so follow the sequence for best results.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statValue}>5</div>
              <div className={styles.statLabel}>Phases</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>8</div>
              <div className={styles.statLabel}>Topics</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>6-8</div>
              <div className={styles.statLabel}>Weeks</div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className={styles.roadmapSection}>
          {roadmap.map((phase, phaseIndex) => (
            <div key={phaseIndex} className={styles.phase}>
              <div className={styles.phaseHeader}>
                <div className={styles.phaseNumber}>{phaseIndex + 1}</div>
                <div className={styles.phaseInfo}>
                  <h3 className={styles.phaseTitle}>{phase.phase}</h3>
                  <div className={styles.phaseMeta}>
                    <span className={styles.duration}>{phase.duration}</span>
                    <span className={styles.phaseDescription}>{phase.description}</span>
                  </div>
                </div>
              </div>

              <div className={styles.topics}>
                {phase.topics.map((topic, topicIndex) => (
                  <Link
                    key={topicIndex}
                    href={topic.link}
                    className={styles.topicCard}
                  >
                    <div className={styles.topicHeader}>
                      <h4>{topic.title}</h4>
                      <span className={`${styles.priority} ${styles[topic.priority.replace(' ', '').toLowerCase()]}`}>
                        {topic.priority}
                      </span>
                    </div>
                    <div className={styles.topicMeta}>
                      <span className={styles.difficulty}>{topic.difficulty}</span>
                      <span className={styles.time}>⏱️ {topic.time}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Study Tips */}
        <section className={styles.tipsSection}>
          <h2>Study Tips for Success</h2>
          <div className={styles.tips}>
            {tips.map((tip, index) => (
              <div key={index} className={styles.tip}>
                <div className={styles.tipIcon}>{tip.icon}</div>
                <h3>{tip.title}</h3>
                <p>{tip.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <h2>Ready to Start Your Journey?</h2>
          <p>Begin with Phase 1 and work your way through the roadmap</p>
          <div className={styles.ctaButtons}>
            <Link href="/articles/process-vs-thread" className={styles.primaryButton}>
              Start Learning
            </Link>
            <Link href="/" className={styles.secondaryButton}>
              Browse All Articles
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
