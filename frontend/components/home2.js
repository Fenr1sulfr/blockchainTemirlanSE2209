import React, { useEffect, useState } from 'react';
import Head from "next/head";
import { formatEther } from "viem/utils";
import { useAccount, useBalance, useContractRead } from "wagmi";
import { readContract, waitForTransaction, writeContract } from "wagmi/actions";
import styles from "../styles/Home.module.css";
import { Inter } from "next/font/google";

// Import the components
import NFTBalanceComponent from '../components/NFTbalance';
import CreateProposalTab from '../components/createProposal';
import ViewProposalsTab from '../components/viewProposal';

import {
    CryptoDevsDAOABI,
    CryptoDevsDAOAddress,
    CryptoDevsNFTABI,
    CryptoDevsNFTAddress,
  } from "@/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const { address, isConnected } = useAccount();
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(false);
//   const [fakeNftTokenId, setFakeNftTokenId] = useState("");
  const [proposals, setProposals] = useState([]);
  const [selectedTab, setSelectedTab] = useState("");
  
  const daoOwner = useContractRead({
    abi: CryptoDevsDAOABI,
    address: CryptoDevsDAOAddress,
    functionName: "owner",
  });

  const daoBalance = useBalance({
    address: CryptoDevsDAOAddress,
  });

  const numOfProposalsInDAO = useContractRead({
    abi: CryptoDevsDAOABI,
    address: CryptoDevsDAOAddress,
    functionName: "numProposals",
  });
//1
  const nftBalanceOfUser = useContractRead({
    abi: CryptoDevsNFTABI,
    address: CryptoDevsNFTAddress,
    functionName: "balanceOf",
    args: [address],
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // ... (rest of your code)

  if (!isMounted) return <div>null</div>;

  // if (!isConnected)
  //   return (
  //     <div style={{ backgroundSize: 'cover', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  //       <ConnectButton />
  //     </div>
  //   );

  return (
    <div className={inter.className}>
      <Head>
        <title>CryptoDevs DAO</title>
        <meta name="description" content="CryptoDevs DAO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <div>
          <h1 className={styles.title}>Welcome to Crypto Devs!</h1>
          <div className={styles.description}>Welcome to the DAO!</div>
          <div className={styles.description}>
            Your CryptoDevs NFT Balance: {nftBalanceOfUser.data.toString()}
            <br />
            {daoBalance.data && (
              <>
                Treasury Balance:{" "}
                {formatEther(daoBalance.data.value).toString()} ETH
              </>
            )}
            <br />
            Total Number of Proposals: {numOfProposalsInDAO.data.toString()}
          </div>
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

          {/* Display tabs based on the selected tab */}
          {selectedTab === 'Create Proposal' && (
            <CreateProposalTab
              CryptoDevsDAOAddress={CryptoDevsDAOAddress}
              CryptoDevsDAOABI={CryptoDevsDAOABI}
              CryptoDevsNFTAddress={CryptoDevsNFTAddress}
              CryptoDevsNFTABI={CryptoDevsNFTABI}
              loading={loading}
              setNFTBalance={setNFTBalance}
            />
          )}

          {selectedTab === 'View Proposals' && (
            <ViewProposalsTab
              CryptoDevsDAOAddress={CryptoDevsDAOAddress}
              CryptoDevsDAOABI={CryptoDevsDAOABI}
              CryptoDevsNFTAddress={CryptoDevsNFTAddress}
              CryptoDevsNFTABI={CryptoDevsNFTABI}
              loading={loading}
              proposals={proposals}
              voteForProposal={voteForProposal}
              executeProposal={executeProposal}
            />
          )}
          
          {/* ... (rest of your code) */}
          
        </div>
        <div>
          <img className={styles.image} src="https://i.imgur.com/buNhbF7.png" />
        </div>
      </div>
    </div>
  );
}
