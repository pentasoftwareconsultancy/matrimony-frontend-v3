// eslint-disable-next-line
import { useEffect, useState } from "react";
import styles from "./FirstAnimation.module.css";
import textImg from "../../assets/AnimationImage/text.png";
import leftImg from "../../assets/AnimationImage/leftslide.png";
import rightImg from "../../assets/AnimationImage/rightslide.png";

const FirstAnimation = ({ onFinish }) => {
  const [hideSplash, setHideSplash] = useState(false);
  const [zoomIn, setZoomIn] = useState(false);

  useEffect(() => {
    // Animation: 2.8s (zoom) + 1.4s (move up) + 5s (sides) + 5s (hold) + 1.2s (zoom-in) = 15.4s
    const holdDuration = 10200; // 2.8 + 1.4 + 5 + 5 seconds in ms
    const zoomInDuration = 1500;
    const timer1 = setTimeout(() => {
      setZoomIn(true);
      // After zoom-in, hide splash
      setTimeout(() => {
        setHideSplash(true);
        onFinish();
      }, zoomInDuration);
    }, holdDuration);
    return () => {
      clearTimeout(timer1);
    };
  }, [onFinish]);

  if (hideSplash) return null;

  return (
    <div className={styles.splashcontainer}>
      <img
        src={textImg}
        alt="Text"
        className={`${styles.splashtext}${zoomIn ? " zoomin" : ""}`}
        draggable={false}
      />
      <div className={styles.splashleft}>
        <img src={leftImg} alt="Left Slide" draggable={false} />
      </div>
      <div className={styles.splashright}>
        <img src={rightImg} alt="Right Slide" draggable={false} />
      </div>
    </div>
  );
};

export default FirstAnimation; 