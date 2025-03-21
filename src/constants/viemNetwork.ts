
  import type { Chain } from 'viem';
  import {mainnet,goerli,optimism,bsc,bscTestnet,polygon,fantom,pulsechain,base,arbitrum,avalanche,polygonMumbai,polygonAmoy,blast,sepolia,blastSepolia} from "viem/chains"

  const chains = [mainnet,goerli,optimism,bsc,bscTestnet,polygon,fantom,pulsechain,base,arbitrum,avalanche,polygonMumbai,polygonAmoy,blast,sepolia,blastSepolia] as  [Chain, ...Chain[]];

  export {chains}
  
  
  