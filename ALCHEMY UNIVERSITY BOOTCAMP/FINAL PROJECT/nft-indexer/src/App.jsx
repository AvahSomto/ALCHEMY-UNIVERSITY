import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

function App() {
  const [userAddress, setUserAddress] = useState('');
  const [account, setAccount] = useState(null); // For storing connected account
  const [results, setResults] = useState([]);
  const [hasQueried, setHasQueried] = useState(false);
  const [tokenDataObjects, setTokenDataObjects] = useState([]);

  // Connect to MetaMask on useEffect
  useEffect(() => {
    const connectMetaMask = async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send('eth_requestAccounts');
        const accounts = await provider.listAccounts();
        setAccount(accounts[0]); // Set connected account
      } catch (error) {
        console.error(error);
      }
    };
    connectMetaMask();
  }, []);

  async function getNFTsForOwner() {
    if (!account) return; // Check if connected before fetching NFTs
    
    try {
      // Display loading indicator while fetching NFTs
      setHasQueried(false); // Set hasQueried to false to indicate loading

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const alchemy = new Alchemy({ apiKey: tSbaMZ8gt1vU9nXNvcGYS49hxVsyuJnQ });

    const data = await alchemy.nft.getNftsForOwner(account);
      setResults(data);

      const tokenDataPromises = data.ownedNfts.map((nft) =>
      alchemy.nft.getNftMetadata(nft.contract.address, nft.tokenId)
    );
    const tokenDataObjects = await Promise.all(tokenDataPromises);


      for (let i = 0; i < data.ownedNfts.length; i++) {
        const tokenData = alchemy.nft.getNftMetadata(
          data.ownedNfts[i].contract.address,
          data.ownedNfts[i].tokenId
        );
        tokenDataPromises.push(tokenData);
      }

      async function getNFTsForOwner() {
        if (!account) return; // Check if connected before fetching NFTs
      
        try {
          // Display loading indicator while fetching NFTs
          setHasQueried(false); // Set hasQueried to false to indicate loading
      
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const alchemy = new Alchemy({ apiKey: tSbaMZ8gt1vU9nXNvcGYS49hxVsyuJnQ });
      
          const data = await alchemy.nft.getNftsForOwner(account);
      
          // Handle successful response
          setResults(data);
          setHasQueried(true); // Set hasQueried to true when fetching is complete
        } catch (error) {
          console.error('Error fetching NFTs:', error);
          // Handle error and reset loading state
          setHasQueried(true); // Set hasQueried to true to stop loading indicator
          // Add error handling for wrongly formed requests or other errors
          // For example, you can display an error message to the user
          // and/or log the error for further investigation
        }
      }
      

      setTokenDataObjects(await Promise.all(tokenDataPromises));
      setHasQueried(true); // Set hasQueried to true when fetching is complete
    } catch (error) {
      console.error('Error fetching NFTs:', error);
      // Handle error and reset loading state if needed
      setHasQueried(true); // Set hasQueried to true even in case of error
    }
  }

   return (
    <Box w="100vw">
      <Center>
        <Flex
          alignItems={'center'}
          justifyContent="center"
          flexDirection={'column'}
          bg="gray.100" // Background color
          p={8} // Padding
          borderRadius="md" // Rounded corners
        >
          <Heading mb={0} fontSize={36}>
            NFT Indexer
          </Heading>
          <Text mt={4} color="gray.600">
            Connect your wallet and see all your ERC-721 tokens!
          </Text>
        </Flex>
      </Center>

      {!account && (
        <Button onClick={getNFTsForOwner} mt={8} bgColor="blue">
          Connect Wallet
        </Button>
      )}

      {account && (
        <>
          <Heading mt={8}>Your Wallet Address:</Heading>
          <Text mb={4} color="green.500">
            {account}
          </Text>
          <Heading my={8}>Here are your NFTs:</Heading>
          {hasQueried ? (
  <SimpleGrid columns={4} spacing={8}>
    {results.ownedNfts.map((e, i) => {
      return (
        <Flex
          key={e.id}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          border="1px solid #e2e8f0"
          borderRadius="md"
          p={4}
        >
          <Box mb={2}>
            <b>Name:</b>{' '}
            {tokenDataObjects[i].title?.length === 0
              ? 'No Name'
              : tokenDataObjects[i].title}
          </Box>
          <Image
            src={
              tokenDataObjects[i]?.rawMetadata?.image ??
              'https://via.placeholder.com/200'
            }
            alt={'Image'}
            mt={2}
            width={200}
            height={200}
            objectFit="cover"
          />
        </Flex>
      );
    })}
  </SimpleGrid>
) : (
            <Button
              onClick={getNFTsForOwner}
              mt={8}
              bgColor="blue"
              disabled={!account}
            >
              Fetch NFTs
            </Button>
          )}
        </>
      )}
    </Box>
  );
}


export default App;