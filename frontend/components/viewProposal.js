// ViewProposalsTab.js
import React from 'react';
import ProposalCard from './ProposalCard';

const ViewProposalsTab = ({ proposals, loading }) => (
  <div>
    {loading ? (
      <div className={styles.description}>
        Loading... Waiting for transaction...
      </div>
    ) : proposals.length === 0 ? (
      <div className={styles.description}>No proposals have been created</div>
    ) : (
      <div>
        {proposals.map((proposal, index) => (
          <ProposalCard key={index} proposal={proposal} />
        ))}
      </div>
    )}
  </div>
);

export default ViewProposalsTab;
