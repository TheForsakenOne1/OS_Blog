import styles from '../article.module.css'

export const metadata = {
  title: 'CPU Scheduling Algorithms Explained | OS Interview Prep',
  description: 'Master FCFS, SJF, Round Robin, Priority Scheduling, and Multi-level Queue scheduling with examples.',
}

export default function CPUScheduling() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.breadcrumb}>
            <a href="/">Home</a>
            <span>/</span>
            <span>CPU Scheduling</span>
          </div>
          <h1 className={styles.title}>CPU Scheduling Algorithms Explained</h1>
          <div className={styles.meta}>
            <span>10 min read</span>
            <span>•</span>
            <span>CPU Scheduling</span>
            <span>•</span>
            <span>Critical</span>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <h2>Introduction</h2>
          <p>CPU scheduling is one of the most important functions of an operating system. It determines which process gets to use the CPU and for how long. Understanding scheduling algorithms is crucial for OS interviews and system design.</p>

          <div className={styles.infoBox}>
            <h4>What is CPU Scheduling?</h4>
            <p>CPU scheduling is the process of selecting which ready process should be allocated the CPU next. The scheduler makes this decision to maximize CPU utilization and system throughput while minimizing response time and waiting time.</p>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Key Scheduling Criteria</h2>
          <p>Before diving into algorithms, let's understand the metrics used to evaluate them:</p>

          <ul>
            <li><strong>CPU Utilization:</strong> Percentage of time the CPU is busy (goal: maximize)</li>
            <li><strong>Throughput:</strong> Number of processes completed per time unit (goal: maximize)</li>
            <li><strong>Turnaround Time:</strong> Total time from submission to completion (goal: minimize)</li>
            <li><strong>Waiting Time:</strong> Time spent in the ready queue (goal: minimize)</li>
            <li><strong>Response Time:</strong> Time from submission until first response (goal: minimize)</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>1. First-Come, First-Served (FCFS)</h2>

          <h3>How It Works</h3>
          <p>The simplest scheduling algorithm. Processes are executed in the order they arrive in the ready queue.</p>

          <h3>Characteristics</h3>
          <ul>
            <li>Non-preemptive: Once CPU is allocated, process runs to completion</li>
            <li>Easy to implement using FIFO queue</li>
            <li>Suffers from convoy effect</li>
          </ul>

          <div className={styles.highlightBox}>
            <h4>Convoy Effect</h4>
            <p>When a long process arrives first, all shorter processes must wait. This significantly increases average waiting time.</p>
          </div>

          <h3>Pros and Cons</h3>
          <ul>
            <li>✅ Simple to understand and implement</li>
            <li>✅ No starvation</li>
            <li>❌ Poor average waiting time</li>
            <li>❌ Not suitable for time-sharing systems</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>2. Shortest Job First (SJF)</h2>

          <h3>How It Works</h3>
          <p>Selects the process with the smallest execution time (burst time) next. Provides optimal average waiting time.</p>

          <h3>Types</h3>
          <ul>
            <li><strong>Non-preemptive SJF:</strong> Once started, process runs to completion</li>
            <li><strong>Preemptive SJF (SRTF):</strong> If new process arrives with shorter burst time, preempt current process</li>
          </ul>

          <h3>Pros and Cons</h3>
          <ul>
            <li>✅ Optimal average waiting time</li>
            <li>✅ Minimizes average turnaround time</li>
            <li>❌ Difficult to predict burst time</li>
            <li>❌ Can cause starvation of long processes</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>3. Round Robin (RR)</h2>

          <h3>How It Works</h3>
          <p>Designed for time-sharing systems. Each process gets a small time quantum. After the quantum expires, the process is preempted and added to the end of the ready queue.</p>

          <h3>Characteristics</h3>
          <ul>
            <li>Preemptive version of FCFS</li>
            <li>Performance depends on time quantum size</li>
            <li>Fair allocation of CPU time</li>
          </ul>

          <h3>Choosing Time Quantum</h3>
          <ul>
            <li><strong>Too large:</strong> Becomes FCFS (poor response time)</li>
            <li><strong>Too small:</strong> Too many context switches (high overhead)</li>
            <li><strong>Optimal:</strong> 10-100 milliseconds typically</li>
          </ul>

          <h3>Pros and Cons</h3>
          <ul>
            <li>✅ Fair allocation of CPU time</li>
            <li>✅ Good response time</li>
            <li>✅ No starvation</li>
            <li>❌ Higher average turnaround time than SJF</li>
            <li>❌ Context switching overhead</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>4. Priority Scheduling</h2>

          <h3>How It Works</h3>
          <p>Each process is assigned a priority. CPU is allocated to the process with highest priority.</p>

          <h3>The Starvation Problem</h3>
          <p>Low-priority processes may wait indefinitely if high-priority processes keep arriving.</p>

          <div className={styles.infoBox}>
            <h4>Solution: Aging</h4>
            <p>Gradually increase the priority of processes that wait in the system for a long time.</p>
          </div>

          <h3>Pros and Cons</h3>
          <ul>
            <li>✅ Flexible - can implement various policies</li>
            <li>✅ Good for real-time systems</li>
            <li>❌ Can lead to starvation</li>
            <li>❌ Priority inversion problem</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>5. Multilevel Queue Scheduling</h2>

          <h3>How It Works</h3>
          <p>Processes are permanently assigned to different queues based on their properties. Each queue has its own scheduling algorithm.</p>

          <h3>Typical Queue Division</h3>
          <ul>
            <li><strong>System processes:</strong> Highest priority</li>
            <li><strong>Interactive processes:</strong> High priority, Round Robin</li>
            <li><strong>Batch processes:</strong> Low priority, FCFS</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Algorithm Comparison</h2>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Algorithm</th>
                <th>Preemptive</th>
                <th>Starvation</th>
                <th>Complexity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>FCFS</td>
                <td>No</td>
                <td>No</td>
                <td>Low</td>
              </tr>
              <tr>
                <td>SJF</td>
                <td>Optional</td>
                <td>Yes</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td>Priority</td>
                <td>Optional</td>
                <td>Yes</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td>Round Robin</td>
                <td>Yes</td>
                <td>No</td>
                <td>Low</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.section}>
          <h2>Common Interview Questions</h2>

          <h3>1. What is the difference between preemptive and non-preemptive scheduling?</h3>
          <p><strong>Answer:</strong> In preemptive scheduling, the OS can interrupt a running process and allocate the CPU to another process. In non-preemptive scheduling, once a process starts execution, it runs until completion or voluntary release.</p>

          <h3>2. Why is SJF considered optimal?</h3>
          <p><strong>Answer:</strong> SJF gives the minimum average waiting time for a given set of processes. However, it's not implementable in practice because we can't know the exact burst time in advance.</p>

          <h3>3. What is the purpose of time quantum in Round Robin?</h3>
          <p><strong>Answer:</strong> The time quantum determines how long each process can execute before being preempted. It balances between response time and context switching overhead.</p>
        </div>

        <div className={styles.section}>
          <h2>Summary</h2>
          <p>CPU scheduling is fundamental to OS performance. Each algorithm has trade-offs:</p>
          <ul>
            <li><strong>FCFS:</strong> Simple but inefficient</li>
            <li><strong>SJF:</strong> Optimal but impractical</li>
            <li><strong>Priority:</strong> Flexible but can starve processes</li>
            <li><strong>Round Robin:</strong> Fair and good for interactive systems</li>
          </ul>
        </div>
      </div>
    </>
  )
}
