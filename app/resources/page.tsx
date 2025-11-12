import styles from './resources.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Resources - OS Interview Prep',
  description: 'Curated list of books, courses, videos, and tools to help you master operating systems.',
}

const resources = {
  books: [
    {
      title: 'Operating System Concepts',
      author: 'Silberschatz, Galvin, Gagne',
      description: 'The definitive textbook on operating systems, known as the "Dinosaur Book".',
      level: 'Beginner to Advanced',
      link: 'https://www.os-book.com/'
    },
    {
      title: 'Modern Operating Systems',
      author: 'Andrew S. Tanenbaum',
      description: 'Comprehensive coverage of OS principles with practical examples.',
      level: 'Intermediate',
      link: '#'
    },
    {
      title: 'Operating Systems: Three Easy Pieces',
      author: 'Remzi & Andrea Arpaci-Dusseau',
      description: 'Free online book with clear explanations and practical approach.',
      level: 'Beginner to Intermediate',
      link: 'https://pages.cs.wisc.edu/~remzi/OSTEP/'
    },
    {
      title: 'The Linux Programming Interface',
      author: 'Michael Kerrisk',
      description: 'Comprehensive guide to Linux system programming.',
      level: 'Advanced',
      link: '#'
    }
  ],
  courses: [
    {
      title: 'CS162: Operating Systems',
      provider: 'UC Berkeley',
      description: 'Complete OS course with video lectures and assignments.',
      level: 'Intermediate',
      link: 'https://cs162.org/'
    },
    {
      title: 'Introduction to Operating Systems',
      provider: 'Udacity (Georgia Tech)',
      description: 'Graduate-level OS course covering fundamental concepts.',
      level: 'Intermediate to Advanced',
      link: '#'
    },
    {
      title: 'Operating Systems',
      provider: 'MIT OpenCourseWare',
      description: 'MIT\'s OS course materials and lecture notes.',
      level: 'Advanced',
      link: '#'
    }
  ],
  videos: [
    {
      title: 'Operating System Playlist',
      channel: 'Neso Academy',
      description: '100+ videos covering all OS topics in detail.',
      duration: '~50 hours',
      link: '#'
    },
    {
      title: 'OS Concepts Explained',
      channel: 'Abdul Bari',
      description: 'Clear explanations with animations and examples.',
      duration: '~30 hours',
      link: '#'
    },
    {
      title: 'Linux Internals',
      channel: 'The Linux Foundation',
      description: 'Deep dive into Linux kernel and internals.',
      duration: 'Various',
      link: '#'
    }
  ],
  tools: [
    {
      title: 'QEMU',
      description: 'Machine emulator for testing OS concepts and kernel development.',
      category: 'Emulator',
      link: 'https://www.qemu.org/'
    },
    {
      title: 'VirtualBox',
      description: 'Virtualization software for running multiple OS instances.',
      category: 'Virtualization',
      link: 'https://www.virtualbox.org/'
    },
    {
      title: 'strace',
      description: 'System call tracer for Linux - excellent for learning.',
      category: 'Debugging',
      link: '#'
    },
    {
      title: 'htop / top',
      description: 'Process viewer to understand CPU scheduling and process management.',
      category: 'Monitoring',
      link: '#'
    },
    {
      title: 'GDB',
      description: 'GNU Debugger for debugging system-level programs.',
      category: 'Debugging',
      link: 'https://www.gnu.org/software/gdb/'
    }
  ],
  websites: [
    {
      title: 'OSDev Wiki',
      description: 'Community-driven wiki for OS development.',
      link: 'https://wiki.osdev.org/'
    },
    {
      title: 'Linux Kernel Documentation',
      description: 'Official Linux kernel documentation.',
      link: 'https://www.kernel.org/doc/html/latest/'
    },
    {
      title: 'GeeksforGeeks OS',
      description: 'Tutorials and practice problems for OS concepts.',
      link: 'https://www.geeksforgeeks.org/operating-systems/'
    },
    {
      title: 'LeetCode System Design',
      description: 'Practice OS-related system design questions.',
      link: 'https://leetcode.com/'
    }
  ],
  interviewPrep: [
    {
      title: 'Cracking the Coding Interview',
      type: 'Book',
      description: 'Chapter on OS concepts with common interview questions.',
      relevance: 'High'
    },
    {
      title: 'System Design Interview',
      type: 'Book',
      description: 'Alex Xu\'s book covering system design with OS concepts.',
      relevance: 'High'
    },
    {
      title: 'Pramp',
      type: 'Platform',
      description: 'Practice mock interviews with peers.',
      relevance: 'Medium'
    },
    {
      title: 'InterviewBit',
      type: 'Platform',
      description: 'OS questions and system design practice.',
      relevance: 'High'
    }
  ]
}

export default function Resources() {
  return (
    <div className={styles.resourcesPage}>
      <div className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Learning Resources</h1>
          <p className={styles.subtitle}>
            Curated collection of books, courses, videos, and tools to master operating systems
          </p>
        </div>
      </div>

      <div className={styles.container}>
        {/* Books */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.icon}>📚</span>
            <h2>Books</h2>
          </div>
          <div className={styles.grid}>
            {resources.books.map((book, index) => (
              <div key={index} className={styles.card}>
                <h3>{book.title}</h3>
                <p className={styles.author}>{book.author}</p>
                <p className={styles.description}>{book.description}</p>
                <div className={styles.meta}>
                  <span className={styles.level}>{book.level}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Online Courses */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.icon}>🎓</span>
            <h2>Online Courses</h2>
          </div>
          <div className={styles.grid}>
            {resources.courses.map((course, index) => (
              <div key={index} className={styles.card}>
                <h3>{course.title}</h3>
                <p className={styles.author}>{course.provider}</p>
                <p className={styles.description}>{course.description}</p>
                <div className={styles.meta}>
                  <span className={styles.level}>{course.level}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Tutorials */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.icon}>🎥</span>
            <h2>Video Tutorials</h2>
          </div>
          <div className={styles.grid}>
            {resources.videos.map((video, index) => (
              <div key={index} className={styles.card}>
                <h3>{video.title}</h3>
                <p className={styles.author}>{video.channel}</p>
                <p className={styles.description}>{video.description}</p>
                <div className={styles.meta}>
                  <span className={styles.duration}>{video.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.icon}>🛠️</span>
            <h2>Tools & Software</h2>
          </div>
          <div className={styles.grid}>
            {resources.tools.map((tool, index) => (
              <div key={index} className={styles.card}>
                <h3>{tool.title}</h3>
                <p className={styles.category}>{tool.category}</p>
                <p className={styles.description}>{tool.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Websites */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.icon}>🌐</span>
            <h2>Useful Websites</h2>
          </div>
          <div className={styles.websiteList}>
            {resources.websites.map((site, index) => (
              <div key={index} className={styles.websiteCard}>
                <h3>{site.title}</h3>
                <p>{site.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Interview Prep */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.icon}>💼</span>
            <h2>Interview Preparation</h2>
          </div>
          <div className={styles.grid}>
            {resources.interviewPrep.map((resource, index) => (
              <div key={index} className={styles.card}>
                <h3>{resource.title}</h3>
                <p className={styles.type}>{resource.type}</p>
                <p className={styles.description}>{resource.description}</p>
                <div className={styles.meta}>
                  <span className={styles.relevance}>Relevance: {resource.relevance}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <h2>Ready to Start Learning?</h2>
          <p>Check out our comprehensive articles and learning roadmap</p>
          <div className={styles.ctaButtons}>
            <Link href="/" className={styles.primaryButton}>
              Browse Articles
            </Link>
            <Link href="/roadmap" className={styles.secondaryButton}>
              View Roadmap
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
