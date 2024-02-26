// pages/index.js
import React from 'react';
import { ConnectButton } from "@rainbow-me/rainbowkit";

const EntryPage = () => {
    const backgroundImageUrl = '/1920x1080-4k-Wallpaper.jpg'; // Replace with the path to your image

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff', // Text color
    fontFamily: 'Arial, sans-serif',
    height: '100vh', // Make the component fill the viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

    return (
    //     <div style={{ backgroundSize: 'cover', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    //     <ConnectButton />
    //   </div>
      <div style={containerStyle}>
        <ConnectButton />
      </div>
    );
};

export default EntryPage;
