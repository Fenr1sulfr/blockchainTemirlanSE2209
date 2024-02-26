// Home.js
import React, { useEffect, useState } from "react";
import { useAccount, useBalance, useContractRead } from "wagmi";
import { readContract, waitForTransaction, writeContract } from "wagmi/actions";
import styles from "../styles/Home.module.css";
import { Inter } from "next/font/google";
import {
  CryptoDevsDAOABI,
  CryptoDevsDAOAddress,
  CryptoDevsNFTABI,
  CryptoDevsNFTAddress,
} from "@/constants";
import Header from "./headers";
import Tabs from "./tabs";
import ProposalList from "./proposalList";
import NFTBalance from "./NFTbalance";
import ConnectWallet from "./Connect";
import MainContent from "./mainContent";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  // Check if the user's wallet is connected, and it's address using Wagmi's hooks.
  const { address, isConnected } = useAccount();

  // State variables (your existing code)

  // Fetch the owner of the DAO (your existing code)

  // Fetch the balance of the DAO (your existing code)

  // Fetch the number of proposals in the DAO (your existing code)

  // Fetch the CryptoDevs NFT balance of the user (your existing code)

  // Other existing code (your existing code)

  function Home() {
    // Check if the user's wallet is connected, and it's address using Wagmi's hooks.
    const { address, isConnected } = useAccount();
  
    // State variables
    const [isMounted, setIsMounted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [fakeNftTokenId, setFakeNftTokenId] = useState("");
    const [proposals, setProposals] = useState([]);
    const [selectedTab, setSelectedTab] = useState("");
  
    // Fetch the owner of the DAO
    const daoOwner = useContractRead({
      abi: CryptoDevsDAOABI,
      address: CryptoDevsDAOAddress,
      functionName: "owner",
    });
  
    // Fetch the balance of the DAO
    const daoBalance = useBalance({
      address: CryptoDevsDAOAddress,
    });
  
    // Fetch the number of proposals in the DAO
    const numOfProposalsInDAO = useContractRead({
      abi: CryptoDevsDAOABI,
      address: CryptoDevsDAOAddress,
      functionName: "numProposals",
    });
  
    // Fetch the CryptoDevs NFT balance of the user
    const nftBalanceOfUser = useContractRead({
      abi: CryptoDevsNFTABI,
      address: CryptoDevsNFTAddress,
      functionName: "balanceOf",
      args: [address],
    });
  
    // Function to make a createProposal transaction in the DAO
    async function createProposal() {
      setLoading(true);
  
      try {
        const tx = await writeContract({
          address: CryptoDevsDAOAddress,
          abi: CryptoDevsDAOABI,
          functionName: "createProposal",
          args: [fakeNftTokenId],
        });
  
        await waitForTransaction(tx);
      } catch (error) {
        console.error(error);
        window.alert(error);
      }
      setLoading(false);
    }
  
    // ... (Other existing functions)
  
    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) return null;
  
    return (
      <div className={inter.className}>
        {/* Header component */}
        <Header />
  
        {/* ConnectWallet component */}
        <ConnectWallet isConnected={isConnected} />
  
        {/* MainContent component */}
        <MainContent
          nftBalance={nftBalanceOfUser}
          daoBalance={daoBalance}
          numOfProposalsInDAO={numOfProposalsInDAO}
          renderTabs={renderTabs}
          loading={loading}
          withdrawDAOEther={withdrawDAOEther}
          daoOwner={daoOwner}
          address={address}
        />
      </div>
    );
  }
  
}