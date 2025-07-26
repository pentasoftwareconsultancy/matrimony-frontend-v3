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
  const [index, setIndex] = useState(0);
  const [keyId, setKeyId] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const next = (prevIndex + 1) % titles.length;
        setKeyId((k) => k + 1);
        // setAnimationKey((prevKey) => prevKey + 1);
        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.aboutservicefull}>

        <section>
          <div className={styles.container}>
            <h2 className={styles.headline}>
              Connecting hearts, preserving <br /> traditions through{' '}
              <span className={styles.animatedText} key={`title-${keyId}`}>
                {titles[index]}
              </span>
            </h2>
            <p className={styles.description} key={`desc-${keyId}`}>
              {descriptions[index]}
            </p>
          </div>
        </section>
        <section className={styles.svgimg}>
          <div className={styles.wrapper}>
            <svg
              className={styles.svg}
              viewBox="0 0 1244 457"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="paint0_linear_176_2403"
                  x1="102.5"
                  y1="305.948"
                  x2="709.5"
                  y2="103"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.0487165" stopColor="#C00A3A" />
                  <stop offset="1" stopColor="#f9f9f9" />
                </linearGradient>
              </defs>
              <path
                d="M 756 152 C 763 148 726 170 724 167 C 723 177 721.98 166.271 543.847 283.613 C 459.503 339.173 264.771 456.634 98.5132 302.252 C 78.7206 280.886 31.3083 228.031 0 187.546 C 28.1145 215.435 121.32 262.848 269.224 229.38 C 454.105 187.546 543.847 70.1396 614.021 36.4023 C 696 -7 678 -12 716 68 Z"
                transform="translate(500, 0)"
                fill="url(#paint0_linear_176_2403)"
              />
            </svg>
          </div>
        </section>
        <section>
          <div className={styles.valueContainer}>
            <div className={styles.leftSection}>
              <h3>Our Mission</h3>
              <p>
                "To empower our community through<br /> culturally-rooted  matchmaking, reliable event <br />support, and holistic development initiatives <br />strengthening bonds, celebrating traditions, <br />and building a brighter future together."
              </p>
            </div>
            <div className={styles.rightSection}>
              {/* <img src={waveImg} alt="wave" className={styles.waveImg} /> */}
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
        </section>
      </div>
    </>
  );
};

export default AboutServices;