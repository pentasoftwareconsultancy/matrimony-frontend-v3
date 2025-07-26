import React from 'react';
import styles from './Login.module.css';
import background from '../../../assets/images/login.png'
import srvikk from '../../../assets/images/soyrik logo.png';  // Corrected image import

const Login = () => {
  return (
    <div
      className={styles.wrapper}
     style={{ backgroundImage: `url(${background})` }}
    >
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={srvikk} alt="Logo" />
        </div>
        <div className={styles.register}>
          Don’t have an account? <a href="#">Register</a>
        </div>
      </div>

      {/* Login Box aligned right */}
      <div className={styles.loginBox}>
        <h2>Log In</h2>

        <label>Email ID</label>
        <input type="email" placeholder="Enter Email id" />

        <label>Password</label>
        <input type="password" placeholder="Enter password" />

        <div className={styles.forgot}>Forget Password</div>

        <button>Login</button>

        <p>By logging in you accept our terms and condition</p>
      </div>
    </div>
  );
};

export default Login;