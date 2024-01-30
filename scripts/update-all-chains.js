const fs = require("fs");

async function fetchAllChains() {
  var data;
  const response = await fetch("https://chainid.network/chains.json");
  data = await response.json();
  await fs.writeFileSync("./static/chains.json", JSON.stringify(data, null, 4));
  const minifiedChains = data.map((ch) => {
    return {
      chainId: ch.chainId,
      shortName: ch.shortName,
      rpc: ch.rpc.length ? [ch.rpc[0]] : [],
    };
  });

  await fs.writeFileSync(
    "./src/constants/all-chains.json",
    JSON.stringify(data, null, 4)
  );

  await fs.writeFileSync(
    "./src/constants/minified-chains.json",
    JSON.stringify(minifiedChains, null, 4)
  );
}

async function main() {
  await fetchAllChains();
}

main().then(() => console.log("chains updated"));
