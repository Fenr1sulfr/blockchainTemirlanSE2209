// ProposalList.js
import React from "react";
import styles from "../styles/Home.module.css";
import ProposalCard from "./ProposalCard";
function ProposalList({ proposals, loading, voteForProposal, executeProposal }) {
  if (loading) {
    return <div className={styles.description}>Loading... Waiting for transaction...</div>;
  } else if (proposals.length === 0) {
    return <div className={styles.description}>No proposals have been created</div>;
  } else {
    return (
      <div>
        {proposals.map((p, index) => (
         <ProposalCard> </ProposalCard>
        ))}
      </div>
    );
  }
} 

export default ProposalList;
