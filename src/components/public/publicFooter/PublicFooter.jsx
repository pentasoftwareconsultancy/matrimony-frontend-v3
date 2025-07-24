import React from 'react';
import styles from './PublicFooter.module.css';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import hanumanImg from '../../../assets/images/mauli.png'
const PublicFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footermain}>
        <div className={`${styles.column} ${styles.imageColumn}`}>
          <img src={hanumanImg} alt="Hanuman" className={styles.hanumanImg} />
        </div>

        <div className={`${styles.column} ${styles.column1}`}>
          <h3>Address</h3>
          <p>📍 Bussaval Nagar, Dryafur Road <br />AKOT, Akola, Maharashtra, India</p>
          <p>📞 9421830662</p>
          <p>✉ anilraoshri@gmail.com</p>
          <div className={styles.socialIcons}>
            <FaInstagram className={`${styles.icon} ${styles.icon1}`} />
            <FaFacebook className={`${styles.icon} ${styles.icon1}`} />
            <FaTwitter className={`${styles.icon} ${styles.icon1}`} />
          </div>
        </div>

        <div className={styles.column}>
          <h3>Navigation</h3>
          <p>Home</p>
          <p>About</p>
          <p>Blog</p>
          <p>Membership</p>
        </div>

        <div className={styles.column}>
          <h3>Quick links</h3>
          <p>Contact us</p>
          <p>Committee member</p>
          <p>Login</p>
          <p>Register</p>
        </div>

        <div className={styles.column}>
          <h3>Services</h3>
          <p>Events</p>
          <p>Vendors</p>
          <p>Blogs</p>
        </div>
      </div>
    </footer>
  );
};
        
export default PublicFooter;
