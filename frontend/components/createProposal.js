// CreateProposalTab.js
import React, { useState } from 'react';
import { writeContract, waitForTransaction } from 'wagmi';

const CreateProposalTab = ({ CryptoDevsDAOAddress, CryptoDevsDAOABI }) => {
  const [fakeNftTokenId, setFakeNftTokenId] = useState('');
  const [loading, setLoading] = useState(false);

  const createProposal = async () => {
    setLoading(true);
    try {
      const tx = await writeContract({
        address: CryptoDevsDAOAddress,
        abi: CryptoDevsDAOABI,
        functionName: 'createProposal',
        args: fakeNftTokenId,
      });

      await waitForTransaction(tx);
    } catch (error) {
      console.error(error);
      window.alert(error);
    }
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      {/* Render the NFTBalanceComponent to display user's NFT balance */}
      <NFTBalanceComponent CryptoDevsNFTABI={CryptoDevsNFTABI} CryptoDevsNFTAddress={CryptoDevsNFTAddress} />

      {/* Mint NFT Button */}
      <button className={styles.button2} onClick={handleMintNFT}>
        Mint NFT
      </button>

      {/* Input for Fake NFT Token ID */}
      <label>Fake NFT Token ID to Purchase: </label>
      <input
        placeholder="0"
        type="number"
        onChange={(e) => setFakeNftTokenId(e.target.value)}
      />

      {/* Create Proposal Button */}
      <button className={styles.button2} onClick={createProposal}>
        Create
      </button>
    </div>
  );
};

export default CreateProposalTab;
