import React from "react";
import styles from "./HomeAbout.module.css";
import Couple from '../../../../assets/Couple.png'

const HomeAbout = () => (
  <div className={styles.aboutContainer}>
    <img src={Couple} alt="Couple" className={styles.aboutImage} />
    <div className={styles.aboutContent}>
      <h2>
        About Akhil Bhartiya Kunbi Samaj Bahu Uddeshiya Mandal, Akola
      </h2>
      <p>
        "Akhil Bhartiya Kunbi Samaj Bahu uddeshiya Mandal, Akola is a community organization dedicated to bringing people together and supporting their growth. It helps individuals find their perfect match while preserving cultural values and traditions. The organization also works to strengthen social bonds and promote development through various activities. With a trusted platform for matchmaking and community support, it plays an important role in creating a better future for everyone. The Mandal also organizes cultural programs, social welfare activities, and educational support initiatives to strengthen social bonds and empower the community. Through its inclusive and progressive approach, the organization plays a key role in shaping a better and more connected future for all."
      </p>
    </div>
  </div>
);


export default HomeAbout;