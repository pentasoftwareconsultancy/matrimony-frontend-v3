import React, { useEffect, useRef, useLayoutEffect } from 'react';
import styles from "./AboutJourney.module.css";
import img1 from "../../../../assets/images/event/event1.png";
import img2 from "../../../../assets/images/event/event2.png";
import img3 from "../../../../assets/images/event/event3.png";
import img4 from "../../../../assets/images/event/event4.png";

import review1 from "../../../../assets/images/reviews/review1.png";
import review2 from "../../../../assets/images/reviews/review2.png";
import review3 from "../../../../assets/images/reviews/review3.png";
import review4 from "../../../../assets/images/reviews/review4.png";
import review5 from "../../../../assets/images/reviews/review5.png";
import review6 from "../../../../assets/images/reviews/review6.png";

import blog1 from "../../../../assets/images/blog/blog1.png";
import blog2 from "../../../../assets/images/blog/blog2.png";
import blog3 from "../../../../assets/images/blog/blog3.png";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutJourney = () => {

  const description = [
    {
      img: img4,
      title: "Engagement Event",
      description: "Event- Wedding, city- Akola, state- Maharashtra Pratik and Aboli the couple’s wedding event was planned and executed by Akhil Bhartiya Kunbi Samaj Bahu uddeshiya Mandal. "
    },
    {
      img: img1,
      title: "Wedding Event",
      description: "Event- Wedding, city- Nashik, state- Maharashtra the couple’s wedding event was Bahu uddeshiya Mandal. "
    },
    {
      img: img2,
      title: "Wedding Event",
      description: "Event – Wedding, City – Pune, State – Maharashtra With the help of the Kunbi Samaj Mandal, Ajinkya and Swara celebrated a vibrant and culturally rich wedding that brought two families together with joy."
    },
    {
      img: img3,
      title: "Wedding Event",
      description: "Event – Wedding, City – Amravati, State – MaharashtraFrom start to finish, Rohan and Snehal’s wedding was beautifully."
    },
  ];

  const reviews = [
    {
      name: "Rahul & Priya",
      message: "We didn’t just find a life partner, we found a soulmate - all thanks to Akhil Bhartiya Kunbi Samaj Bahu Uddeshiya Mandal.",
      image: review2
    },
    {
      name: "Amit & Sneha",
      message: "Destiny brought us together, but Akhil Bhartiya Kunbi Samaj Bahu Uddeshiya Mandal made it possible.",
      image: review5
    },
    {
      name: "Sagar & Neha",
      message: "It all started with a simple profile on Akhil Bhartiya Kunbi Samaj Bahu Uddeshiya Mandal — now it’s a lifetime bond.",
      image: review3
    },
    {
      name: "Kunal & Rutuja",
      message: "Thanks to Akhil Bhartiya Kunbi Samaj Bahu Uddeshiya Mandal, we found love that was meant to be.",
      image: review4
    },
    {
      name: "Vikas & Shraddha",
      message: "It’s amazing how one platform changed our lives forever. Grateful to the Mandal for bringing us together.",
      image: review1
    },
    {
      name: "Aniket & Prachi",
      message: "We found comfort, love, and companionship through Akhil Bhartiya Kunbi Samaj Bahu Uddeshiya Mandal. Forever thankful!",
      image: review6
    }
  ];

  const blog = [
    {
      category: "Blog - Wedding",
      data: "Blog- Wedding, City- Akola, State- Maharashtra",
      blog: "Pratik and Aboli’s wedding was a beautiful celebration of love, tradition, and togetherness. It was thoughtfully planned and executed by Akhil Bhartiya Kunbi Samaj Bahu Uddeshiya Mandal.",
      image: blog2
    },
    {
      category: "Blog - Wedding",
      data: "Blog- Wedding, City- Pune, State- Maharashtra",
      blog: "Saurabh and Snehal’s wedding was a perfect blend of elegance and culture, beautifully organized by Akhil Bhartiya Kunbi Samaj Bahu Uddeshiya Mandal.",
      image: blog1
    },
    {
      category: "",
      data: "Blog- Wedding, City- Amravati, State- Maharashtra",
      blog: "The wedding of Rohan and Prajakta was orchestrated with grace and detail by Akhil Bhartiya Kunbi Samaj Bahu Uddeshiya Mandal.",
      image: blog3
    }
  ]

  gsap.registerPlugin(ScrollTrigger);

  const descriptionContainerRef = useRef(null);
  const descriptionTrackRef = useRef(null);
  const reviewContainerRef = useRef(null);
  const reviewTrackRef = useRef(null);

  const boxRef = useRef(null);

  // Left to Right for Description
  useLayoutEffect(() => {
    const track = descriptionTrackRef.current;
    if (!track || !description.length) return;

    const ctx = gsap.context(() => {
      const totalWidth = track.scrollWidth / 2;
      const speed = 100;
      const duration = totalWidth / speed;

      gsap.fromTo(
        track,
        { x: -totalWidth },
        {
          x: 0,
          duration: duration,
          ease: 'none',
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize(x => (parseFloat(x) % totalWidth)),
          },
        }
      );
    }, descriptionContainerRef);

    return () => ctx.revert();
  }, [description]);

  // Right to Left for Reviews
  useLayoutEffect(() => {
    const track = reviewTrackRef.current;
    if (!track || !reviews.length) return;

    const ctx = gsap.context(() => {
      const totalWidth = track.scrollWidth / 2;
      const speed = 50;
      const duration = totalWidth / speed;

      gsap.to(track, {
        x: `-=${totalWidth}`,
        duration,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % totalWidth),
        },
      });
    }, reviewContainerRef);

    return () => ctx.revert();
  }, [reviews]);

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.heading1}>Journeys of Joy</p>
        <p className={styles.heading2}>From Match to Marriage</p>
      </div>

      <div className={styles.desWrapper} ref={descriptionContainerRef}>
        <div className={styles.event} ref={descriptionTrackRef}>
          {[...description, ...description].map((item, index) => (

            // {description.map((item, index) => (
            <div
              key={index}
              className={
                index % 2 === 0 ? styles.eventCardLarge : styles.eventCardSmall
              }
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className={styles.eventOverlay}>
                <div className={styles.eventDetails}>
                  <h3 className={styles.eventTitle}>{item.title}</h3>
                  <p className={styles.eventDescription}>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.reviewWrapper} ref={reviewContainerRef}>
        <div className={styles.review} ref={reviewTrackRef}>
          {[...reviews, ...reviews].map((item, index) => (
            <div
              key={index}
              className={styles.reviewCard}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className={styles.eventOverlay}>
                <div className={styles.reviewDetails}>
                  <h3 className={styles.reviewName}>{item.name}</h3>
                  <p className={styles.reviewMessage}>{item.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.blog}>
        {blog.map((item, index) => (
          <div
            key={index}
            className={styles.blogCard}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className={styles.blogOverlay}>
              <div className={styles.blogDetails}>
                <h3 className={styles.blogTitle}>Blog</h3>
                <p className={styles.blogName}>{item.data}</p>
                <p className={styles.blogMessage}>{item.blog}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutJourney;
