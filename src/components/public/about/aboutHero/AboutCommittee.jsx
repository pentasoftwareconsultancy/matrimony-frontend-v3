import React from "react";
import styles from "./AboutCommittee.module.css";
import AboutHeroData from "./AboutHeroData";

const AboutCommittee = () => {
  return (
    <section className={styles.AboutCommitteeSection}>
      <h1 className={styles.titleHeading}>
        Meet the experts guiding your <span className={styles.titleHeadingColor}>Matrimonial journey.</span>
      </h1>
      <div className={styles.committeeContainer}>
        {AboutHeroData.map((person, index) => (
          <div
            key={index}
            className={`${styles.card} ${
              index % 4 === 0 || index % 4 === 2 ? styles.wide : styles.narrow
            }`}
          >
            <img
              src={person.image}
              alt={person.name}
              className={styles.image}
            />
            <div className={styles.content}>
              <h3 className={styles.name}>
                {person.name}{" "}
                <span className={styles.designation}>
                  ({person.designation})
                </span>
              </h3>
              <p className={styles.details}>
                <strong>Age:</strong> {person.age} |<strong> Location:</strong>{" "}
                {person.location} |<strong> Years of Experience:</strong>{" "}
                {person.experience}
              </p>
              <p className={styles.biography}>
                <strong>Biography:</strong> {person.biography}
              </p>
              <div className={styles.readMore}>
                <button className={styles.readMoreBtn}>
                  Read more <span>→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutCommittee;
