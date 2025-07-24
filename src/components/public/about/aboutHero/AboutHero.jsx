import React from 'react'
import styles from "./AboutHero.module.css"
import AboutHeroData from './AboutHeroData'

const AboutHero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.imageGrid}>
        {AboutHeroData.map((person, index) => (
          <div key={index} className={styles.card}>
            <img src={person.image} alt={person.name} />
            <div className={styles.name}>{person.name}</div>
          </div>
        ))}
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