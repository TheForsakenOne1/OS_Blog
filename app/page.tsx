import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ArticleCard from './components/ArticleCard'
import styles from './page.module.css'

const articles = [
  {
    title: 'Process vs Thread: Understanding the Core Differences',
    description: 'Deep dive into processes and threads, their differences, advantages, and when to use each in system design.',
    readTime: '8 min read',
    category: 'Processes & Threads',
    badge: 'Fundamentals',
    href: '/articles/process-vs-thread',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    icon: '⚙️'
  },
  {
    title: 'CPU Scheduling Algorithms Explained',
    description: 'Master FCFS, SJF, Round Robin, Priority Scheduling, and Multi-level Queue scheduling with examples and comparisons.',
    readTime: '10 min read',
    category: 'CPU Scheduling',
    badge: 'Critical',
    href: '/articles/cpu-scheduling',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    icon: '⏱️'
  },
  {
    title: 'Deadlock: Detection, Prevention & Recovery',
    description: 'Understand deadlock conditions, Banker\'s algorithm, resource allocation graphs, and practical deadlock handling strategies.',
    readTime: '12 min read',
    category: 'Deadlock',
    badge: 'Essential',
    href: '/articles/deadlock',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    icon: '🔒'
  },
  {
    title: 'Memory Management: From Basics to Advanced',
    description: 'Explore contiguous allocation, segmentation, paging, fragmentation, and memory allocation algorithms.',
    readTime: '11 min read',
    category: 'Memory Management',
    badge: 'Core Concept',
    href: '/articles/memory-management',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    icon: '💾'
  },
  {
    title: 'Virtual Memory and Page Replacement Algorithms',
    description: 'Master demand paging, page faults, FIFO, LRU, Optimal algorithms, and thrashing concepts with practical examples.',
    readTime: '13 min read',
    category: 'Virtual Memory',
    badge: 'Advanced',
    href: '/articles/virtual-memory',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    icon: '📄'
  },
  {
    title: 'File Systems: Structure, Implementation & Management',
    description: 'Learn about file organization, directory structures, allocation methods, and disk scheduling algorithms.',
    readTime: '10 min read',
    category: 'File Systems',
    badge: 'Important',
    href: '/articles/file-systems',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    icon: '📁'
  },
  {
    title: 'Process Synchronization: Semaphores, Mutexes & Monitors',
    description: 'Understand critical sections, race conditions, semaphores, mutexes, monitors, and classic synchronization problems.',
    readTime: '14 min read',
    category: 'Synchronization',
    badge: 'Must Know',
    href: '/articles/synchronization',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    icon: '🔄'
  },
  {
    title: 'Inter-Process Communication: Pipes, Messages & Shared Memory',
    description: 'Explore different IPC mechanisms including pipes, message queues, shared memory, and sockets with real-world use cases.',
    readTime: '9 min read',
    category: 'IPC',
    badge: 'Practical',
    href: '/articles/ipc',
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    icon: '📡'
  }
]

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section className={styles.articles}>
          <div className={styles.container}>
            <div className={styles.header}>
              <h2 className={styles.sectionTitle}>Interview-Ready Articles</h2>
              <p className={styles.sectionSubtitle}>
                Everything you need to master operating systems concepts
              </p>
            </div>

            <div className={styles.grid}>
              {articles.map((article, index) => (
                <ArticleCard key={index} {...article} />
              ))}
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.footerContent}>
              <div className={styles.footerSection}>
                <h3 className={styles.footerTitle}>OS Interview Prep</h3>
                <p className={styles.footerText}>
                  Your comprehensive guide to mastering operating systems concepts for technical interviews.
                </p>
              </div>
              <div className={styles.footerSection}>
                <h4 className={styles.footerHeading}>Topics</h4>
                <ul className={styles.footerList}>
                  <li><a href="#processes">Processes & Threads</a></li>
                  <li><a href="#scheduling">CPU Scheduling</a></li>
                  <li><a href="#memory">Memory Management</a></li>
                  <li><a href="#synchronization">Synchronization</a></li>
                </ul>
              </div>
              <div className={styles.footerSection}>
                <h4 className={styles.footerHeading}>Resources</h4>
                <ul className={styles.footerList}>
                  <li><a href="#about">About</a></li>
                  <li><a href="/">All Articles</a></li>
                  <li><a href="#topics">Browse by Topic</a></li>
                </ul>
              </div>
            </div>
            <div className={styles.footerBottom}>
              <p>&copy; 2024 OS Interview Prep. Built for learning.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
