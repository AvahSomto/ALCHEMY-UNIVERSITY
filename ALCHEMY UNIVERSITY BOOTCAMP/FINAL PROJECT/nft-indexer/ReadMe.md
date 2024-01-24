### Table of Contents

1. [Installation](#installation)
2. [Project Motivation](#motivation)
3. [File Description](#files)
4. [Results](#results)
5. [Licensing, Authors, and Acknowledgements](#licensing)

## Installation <a name="installation"></a>

The tools, frameworks and libaries used for this project is npm 10.2.4, chakra ui, html, css, react, ethers.js, alchemy and metamask, 
the platform was VS Code. The code should run with no issues using npm versions 10.*.

## Project Motivation<a name="motivation"></a>

For this project, I created a web applicvation that allows users to connect their wallets, fetch and 
display their ERC-721 tokens (NFTs), and view associated metadata. The application aims to

1. Implement wallet integration to allow users to connect their wallets and view their NFTs
2. Add loading indicators, such as spinners or progress bars, to provide visual feedback to users while the app is fetching data
3. Add styling using Chakra UI or custom CSS
4. Address the inconsistency in NFT image display by ensuring that the images consistently appear
5. Implement robust error checking to handle wrongly formed requests and other potential errors
6. Improve the layout and presentation of NFTs in the grid display
7. Explore ways to optimize the query process to make it faster
8. Integrate support for Ethereum Name Service (ENS) for inputs, allowing users to input ENS names in addition to Ethereum addresses
   

## File Descriptions <a name="files"></a>

There are two folders 'source' and 'public'. The folders are explanatory.

## Set Up

1. Install dependencies by running `npm install`
2. Start application by running `npm run dev`

## Results<a name="results"></a>

The main findings of the code is that 

1. it includes a button for connecting the user's wallet, 
indicating the intention to integrate wallet functionality for accessing Ethereum addresses.

2. it contains logic for fetching NFTs for a specific owner and displaying them in a grid layout,
demonstrating the capability to interact with NFT data and present it to the user.

3. there is a need for a loading indicator to provide visual feedback to the user while NFT data is being fetched.
This is essential for improving the user experience and indicating that a request is in progress.

4. it includes the display of NFT images, but there are opportunities to optimize the image loading process and ensure
consistent rendering of NFT images for a smoother user experience

5. it lacks comprehensive error handling, which is crucial for managing potential errors related to fetching NFT data and
providing informative feedback to users in case of issues.

6. it would benefit from additional styling to enhance the visual appeal of the application and create a more
polished user interface.

7. there is potential to optimize the query process for fetching NFTs to improve the speed and efficiency of data retrieval.

8. it does not currently include support for Ethereum Name Service (ENS) for inputs, which could be a valuable addition
for user convenience.



## Licensing, Authors, Acknowledgements<a name="licensing"></a>

Thanks to AlvaroLuken at Alchemy University for the starter code.
