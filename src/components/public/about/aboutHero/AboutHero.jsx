import React from "react";
import styles from "./AboutHero.module.css";
import AboutHeroData from "./AboutHeroData";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.imageGrid}>
        {AboutHeroData.slice(0, 12).map((person, index) => {
          const cardClass = `${styles.card} ${styles[`card${index + 1}`]}`;
          return (
            <div key={index} className={cardClass}>
              <Link to="/aboutcommittee">
                <img src={person.image} alt={person.name} />
                <div className={styles.name}>{person.name}</div>
              </Link>
            </div>
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
          Rooted in experience, we blend tradition with trust in matchmaking, as
          your happiness is our legacy.
        </p>
        <Link to="/aboutcommittee">
          <button className={styles.cta}>Read Success Stories →</button>
        </Link>
      </div>
    </section>
  );
};

export default AboutHero;
