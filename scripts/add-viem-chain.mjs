import * as chains from "viem/chains";
import fs from "fs";

const chainListPath = "./src/constants/chains.json";

async function generateViemNetworks() {
  const data = JSON.parse(fs.readFileSync(chainListPath, "utf8"));
  const viewNetworkKeys = Object.keys(chains);
  const viemNetworks = [];
  const allViemNetworks = [];
  const networkIds = data.map((ch) => ch.chainId);

  for (let index = 0; index < viewNetworkKeys.length; index++) {
    const networkKey = viewNetworkKeys[index];
    const viemNetwork = chains[networkKey];

    allViemNetworks.push({ ...viemNetwork, key: networkKey });
  }

  for (let index = 0; index < data.length; index++) {
    const net = data[index];
    const network = allViemNetworks.find((ch) => ch.id === net.chainId);
    if (network) {
      viemNetworks.push(network.key);
    } else {
      console.log(
        `you need to define network ${net.name} with chainId ${net.chainId}`
      );
    }
  }

  await fs.writeFileSync(
    "./src/constants/viemNetwork.ts",
    `
  import type { Chain } from 'viem';
  import {${viemNetworks.join(",")}} from "viem/chains"

  const chains = [${viemNetworks.join(",")}] as  [Chain, ...Chain[]];

  export {chains}
  
  
  `
  );
}

generateViemNetworks();
