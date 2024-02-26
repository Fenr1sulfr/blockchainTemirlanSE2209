// MainContent.js
import React from "react";
import { formatEther } from "viem/utils";
import styles from "../styles/Home.module.css";

function MainContent({ nftBalance, daoBalance, numOfProposalsInDAO, renderTabs, loading, withdrawDAOEther, daoOwner, address }) {
  return (
    <div className={styles.main}>
      <div>
        {/* Header component */}
        <Header />

        {/* Additional content (your existing code) */}
        <div className={styles.description}>
          Your CryptoDevs NFT Balance: {nftBalance.data.toString()}
          <br />
          {daoBalance.data && (
            <>
              Treasury Balance: {formatEther(daoBalance.data.value).toString()} ETH
            </>
          )}
          <br />
          Total Number of Proposals: {numOfProposalsInDAO.data.toString()}
        </div>

        {/* Tabs component */}
        {/* ... (your existing code) */}

        {renderTabs()}

        {/* Display additional withdraw button if connected wallet is owner */}
        {address && address.toLowerCase() === daoOwner.data.toLowerCase() && (
          <div>
            {loading ? (
              <button className={styles.button}>Loading...</button>
            ) : (
              <button className={styles.button} onClick={withdrawDAOEther}>
                Withdraw DAO ETH
              </button>
            )}
          </div>
        )}
      </div>

      <div>
        {/* Image component */}
        <img className={styles.image} src="https://i.imgur.com/buNhbF7.png" />
      </div>
    </div>
  );
}

export default MainContent;
