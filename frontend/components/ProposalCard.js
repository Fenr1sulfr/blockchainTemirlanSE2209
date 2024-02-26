// ProposalCard.js
import React from 'react';

const ProposalCard = ({ proposal }) => (
  <div className={styles.card}>
    <p>Proposal ID: {proposal.proposalId}</p>
    <p>Fake NFT to Purchase: {proposal.nftTokenId}</p>
    {/* Add other proposal information here */}
  </div>
);

export default ProposalCard;
