// NFTBalance.js
import React, { useEffect, useState } from "react";

function NFTBalance({ CryptoDevsNFTABI, CryptoDevsNFTAddress, address }) {
  const [nftBalance, setNFTBalance] = useState(null);

  // Fetch NFT balance logic (similar to your existing code)

  return (
    <div>
      <h2>NFT Balance</h2>
      {nftBalance !== null ? (
        <p>User's NFT Balance: {nftBalance}</p>
      ) : (
        <p>Loading NFT balance...</p>
      )}
    </div>
  );
}

export default NFTBalance;
