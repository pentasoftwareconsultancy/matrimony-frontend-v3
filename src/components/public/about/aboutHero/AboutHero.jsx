import React from 'react'
import styles from "./AboutHero.module.css"
import AboutHeroData from './AboutHeroData'
import { Link } from 'react-router-dom'

const AboutHero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.imageGrid}>
        {AboutHeroData.map((person, index) => {
  const gridStyles = [
    { gridColumnStart: 1, gridRowStart: 3 }, // 1
    { gridColumnStart: 1, gridRowStart: 4 }, // 2
    { gridColumnStart: 2, gridRowStart: 2 }, // 3
    { gridColumnStart: 2, gridRowStart: 3 }, // 4
    { gridColumnStart: 3, gridRowStart: 3 }, // 5
    { gridColumnStart: 3, gridRowStart: 2 }, // 6
    { gridColumnStart: 5, gridRowStart: 3 }, // 7
    { gridColumnStart: 4, gridRowStart: 2 }, // 8
    { gridColumnStart: 5, gridRowStart: 2 }, // 9
    { gridColumnStart: 7, gridRowStart: 3 }, // 10
    { gridColumnStart: 8, gridRowStart: 3 }, // 11
    { gridColumnStart: 8, gridRowStart: 4 }, // 12
  ];

  const positionStyle = {
    gridRow: 'span 1',
    gridColumn: 'span 1',
    ...gridStyles[index]
  };

  return (
    <Link to="/aboutcommittee" key={index}>
      <div className={styles.card} style={positionStyle}>
        <img src={person.image} alt={person.name} />
        <div className={styles.name}>{person.name}</div>
      </div>
    </Link>
  );
})}
      </div>

      <div className={styles.textContent}>
        <h2>
          <strong>Trusted by leaders</strong>
          <br />
          <span>from years of experience</span>
        </h2>
        <p>
          Rooted in experience, we blend tradition with trust in matchmaking, as your happiness is our legacy.
        </p>
        <button className={styles.cta}>Read Success Stories →</button>
      </div>
    </section>
  )
}

export default AboutHero