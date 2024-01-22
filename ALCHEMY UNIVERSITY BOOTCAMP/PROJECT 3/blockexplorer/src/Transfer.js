import { Alchemy, Network, Utils } from "alchemy-sdk";
import { useState, useEffect } from "react";

// Instantiate the Alchemy object with the required settings
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET, // Replace with the desired network
};

const alchemy = new Alchemy(settings);

// Use the alchemy object in the code snippets
// Example: Retrieving NFT Metadata
const nftAddress = '0x123...'; // Replace with the actual NFT contract address
const tokenId = '123'; // Replace with the specific token ID
const getNFTMetadata = async () => {
  try {
    const nftMetadata = await alchemy.core.getMetadata(nftAddress, tokenId);
    console.log('NFT Metadata:', nftMetadata);
  } catch (error) {
    console.error('Error retrieving NFT metadata:', error);
  }
};

// Example: Checking if a pending transaction has been mined
const transactionHash = '0xabc...'; // Replace with the actual transaction hash
const checkTransactionStatus = async () => {
  try {
    const transactionReceipt = await alchemy.core.getTransactionReceipt(transactionHash);
    console.log('Transaction Receipt:', transactionReceipt);
    // Check the status field in the transactionReceipt to determine if the transaction has been successfully mined
  } catch (error) {
    console.error('Error checking transaction status:', error);
  }
};

// Example: Retrieving transfers received by a specific address this year
const recipientAddress = '0xrecipient...'; // Replace with the recipient address
const getCurrentYearTransfers = async () => {
  try {
    const currentYear = new Date().getFullYear();
    const startOfYear = new Date(currentYear, 0, 1);
    const endOfYear = new Date(currentYear, 11, 31, 23, 59, 59);
    const addressTransfers = await alchemy.core.getTransactions({
      to: recipientAddress,
      afterBlockTime: startOfYear.getTime() / 1000,
      beforeBlockTime: endOfYear.getTime() / 1000,
    });
    console.log('Transfers Received:', addressTransfers);
  } catch (error) {
    console.error('Error retrieving address transfers:', error);
  }
};

// Call the functions to execute the examples
getNFTMetadata();
checkTransactionStatus();
getCurrentYearTransfers();
