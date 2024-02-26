// ConnectWallet.js
import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function ConnectWallet({ isConnected }) {
  return (
    <div>
      {!isConnected && (
        <div>
          <ConnectButton />
        </div>
      )}
    </div>
  );
}

export default ConnectWallet;
