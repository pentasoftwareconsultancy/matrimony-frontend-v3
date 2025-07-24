
import React from "react";
import styles from "./AboutValue.module.css";
import waveImg from "../../../../assets/wave.png";

const AboutValue = () => (
  <div className={styles.valueContainer}>
    <div className={styles.leftSection}>
      <h3>Our Mission</h3>
      <p>
        "To empower our community through<br /> culturally-rooted  matchmaking, reliable event <br />support, and holistic development initiatives <br />strengthening bonds, celebrating traditions, <br />and building a brighter future together."
      </p>
    </div>
    <div className={styles.rightSection}>
      <img src={waveImg} alt="wave" className={styles.waveImg} />
      <div className={styles.visionContent}>
        <h3 className={styles.heading}>
          Our Vis<span className={styles.splitI}>i</span>
          <span className={styles.redText}>on</span>
        </h3>
        <p>
          "To be the most trusted platform uniting Kunbi Samaj families worldwide, preserving our rich heritage while fostering meaningful, lifelong connections."
        </p>
      </div>
    </div>
  </div>
);

export default AboutValue;