// Tabs.js
import React from "react";
import styles from "../styles/Home.module.css";

function Tabs({ setSelectedTab }) {
  return (
    <div className={styles.flex}>
      <button
        className={styles.button}
        onClick={() => setSelectedTab("Create Proposal")}
      >
        Create Proposal
      </button>
      <button
        className={styles.button}
        onClick={() => setSelectedTab("View Proposals")}
      >
        View Proposals
      </button>
    </div>
  );
}

export default Tabs;
