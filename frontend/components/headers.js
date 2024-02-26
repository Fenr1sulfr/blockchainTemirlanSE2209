// Header.js
import React from "react";
import styles from "../styles/Home.module.css";

function Header() {
  return (
    <div>
      <h1 className={styles.title}>Welcome to Crypto Devs!</h1>
      <div className={styles.description}>Welcome to the DAO!</div>
    </div>
  );
}

export default Header;
