import React from 'react';
import styles from './HomeChart.module.css';

function HomeChart() {
  return (
    <div className={styles.aboutchartContainer}>
      <h2 className={styles.aboutchartHeading}>
        Why Akhil Bhartiya Kunbi Samaj Bahu Uddeshiya Mandal?
      </h2>

      <div className={styles.aboutchartGrid}>
        <div className={`${styles.aboutchartBox} ${styles.box1}`}>
          <h3 className={styles.aboutchartNumber}>1100+</h3>
          <p>
            We have completed <strong>1100+ Happy marriages</strong> through our guidance.
          </p>
        </div>

        <div className={`${styles.aboutchartBox} ${styles.box2}`}>
          <h3 className={styles.aboutchartNumber}>1600+</h3>
          <p>
            We have <strong>1600+ Active users</strong> (groom & bride) on our website.
          </p>
        </div>

        <div className={`${styles.aboutchartBox} ${styles.box3}`}>
          <h3 className={styles.aboutchartNumber}>5+</h3>
          <p>
            We have almost <strong>5+ years of Experience</strong>.
          </p>
        </div>

        <div className={styles.chartContainer}>
  <h2 className={styles.graphTitle}>Active Users Growth</h2>

  <div className={styles.graphBody}>
    <svg className={styles.graphSvg} viewBox="0 0 300 100" preserveAspectRatio="none">
  <defs>
    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#b00035" stopOpacity="0.4" />
      <stop offset="100%" stopColor="#b00035" stopOpacity="0" />
    </linearGradient>
  </defs>

  <path
    className={styles.linePath}
    d="M0,95 C20,80 40,85 60,70 C80,55 100,65 120,50 C140,40 160,55 180,50 C200,50 220,40 240,35 C260,30 280,20 300,15"
  />

  <path
    className={styles.areaFill}
    d="M0,95 C20,80 40,85 60,70 C80,55 100,65 120,50 C140,40 160,55 180,50 C200,50 220,40 240,35 C260,30 280,20 300,15 L300,100 L0,100 Z"
  />
</svg>

  </div>

  <div className={styles.graphYears}>
    <span>2020</span>
    <span>2023</span>
    <span>2025</span>
  </div>
</div>


        <div className={`${styles.aboutchartBox} ${styles.box5}`}>
          <h3 className={styles.aboutchartNumber}>1300+</h3>
          <p>
            We have successfully completed <strong>1300+ Events</strong> with our team.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeChart;
