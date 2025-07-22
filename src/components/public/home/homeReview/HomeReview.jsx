import React, { useEffect, useRef, useState } from "react";
import styles from "./HomeReview.module.css";
import { FastAverageColor } from "fast-average-color";
import img1 from "../../../../assets/images/marriage1.png";
import img2 from "../../../../assets/images/marriage2.png";
import img3 from "../../../../assets/images/marriage3.png";
import img4 from "../../../../assets/images/marriage4.png";
import img5 from "../../../../assets/images/marriage5.png";
import img6 from "../../../../assets/images/marriage6.png";

const marriages = [
  {
    image: img2,
    names: "Rahul & Priya",
    review: `"Through the Kunbi Samaj Mandal, we found not just a match but a lifetime of love and understanding!"`,
    details: "Rahul & Priya, Married 2023",
  },
  {
    image: img3,
    names: "Vikram & Anjali",
    review: `"This platform brought us together when we least expected it — we're now soulmates for life!"`,
    details: "Vikram & Anjali, Married 2023",
  },
  {
    image: img1,
    names: "Rohan & Preeti",
    review: `"We found each other through Akhil Bhartiya Kunbi Samaj Bahu uddeshiya Mandal and couldn't be happier!"`,
    details: "Rohan & Preeti, Married 2023",
  },
  {
    image: img4,
    names: "Ayush & Needhi",
    review: `"Meeting through this community has been the biggest blessing — we connected instantly and never looked back."`,
    details: "Ayush & Needhi, Married 2023",
  },
  {
    image: img5,
    names: "Pratik & Aboli",
    review: `"We matched through this wonderful platform, and now we're happily married with memories to cherish forever!"`,
    details: "Pratik & Aboli, Married 2023",
  },
  {
    image: img6,
    names: "Suhas & Sakshi",
    review: `"All it took was one connection through the Mandal — and now we share a life full of laughter, respect, and love!"`,
    details: "Suhas & Sakshi, Married 2023",
  },
];

export default function HomeReview() {
  const [hovered, setHovered] = useState(null);
  const [colors, setColors] = useState(Array(marriages.length).fill("rgba(60,0,20,0.55)"));
  const imgRefs = useRef([]);

  useEffect(() => {
    const fac = new FastAverageColor();
    marriages.forEach((m, i) => {
      fac.getColorAsync(imgRefs.current[i])
        .then(color => {
          setColors(prev => {
            const newColors = [...prev];
            newColors[i] = `rgba(${color.value[0]},${color.value[1]},${color.value[2]},0.55)`;
            return newColors;
          });
        })
        .catch(() => { });
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.container}>
      <h2>
        <span className={styles.bold}>Happy Marriages</span>
        <span className={styles.light}> (Reviews)</span>
      </h2>
      <div className={styles.cards}>
        {marriages.map((m, i) => (
          <div
            className={styles.card}
            key={i}
            style={{
              backgroundImage: `url(${m.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Hidden image for color extraction */}
            <img
              src={m.image}
              alt=""
              ref={el => (imgRefs.current[i] = el)}
              style={{ display: "none" }}
              crossOrigin="anonymous"
            />
            <div
              className={styles.overlay}
            >
              <div className={styles.names}>{m.names}</div>
              <div className={styles.reviewRow}>
                <div className={styles.review}>{m.review}</div>
                <div className={styles.details}>{m.details}</div>
                <button className={styles.more}>more</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 