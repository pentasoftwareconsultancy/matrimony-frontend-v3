import React, { useEffect, useState } from 'react';
import styles from './AboutServices.module.css';

const titles = [
  'Cultural Matchmaking',
  'Trusted Community',
  'Event Support',
  'Blogs',
];

const descriptions = [
  'We specialize in matrimonial alliances that honor Kunbi Samaj traditions while meeting modern expectations. Our personalized matchmaking preserves heritage while ensuring compatibility.',
  "With decades of service, we've built a reliable network of verified families within the community. Our platform offers transparency and trust at every step of the matchmaking process.",
  'Beyond matchmaking, we provide trusted vendors for weddings and community events. From caterers to decorators, we connect you with reliable services for memorable celebrations.',
  'Our regularly updated blogs offer valuable insights on relationships, traditions, and community news. These resources help members navigate modern life while staying connected to roots.',
];
const AboutServices = () => {
  const [index,setIndex] = useState(0);
  const [keyId, setKeyId] = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const next = (prevIndex + 1) % titles.length;
        setKeyId((k) => k + 1);
        // setAnimationKey((prevKey) => prevKey + 1);
        return next;
      });
    },4000);

    return () => clearInterval(interval);
  },[]);

  return (
    <div className={styles.container}>
      <h2 className={styles.headline}>
        Connecting hearts, preserving <br/> traditions through{' '}
        <span className={styles.animatedText} key={`title-${keyId}`}>
          {titles[index]}
        </span>
      </h2>
      <p className={styles.description} key={`desc-${keyId}`}>
        {descriptions[index]}
      </p>
    </div>
  );
};

export default AboutServices;