const fs = require("fs");

async function filterCoingeckoIds() {
  //const data = JSON.parse(fs.readFileSync('./static/coingecko_asset_platforms.json', 'utf8'));
  var data;
  const response = await fetch(
    "https://api.coingecko.com/api/v3/asset_platforms"
  );
  data = await response.json();
  const filteredData = data
    .filter((ch) => ch.chain_identifier)
    .sort((a, b) => a.chain_identifier - b.chain_identifier);
  await fs.writeFileSync(
    "./src/constants/coingeckoIds.json",
    JSON.stringify(filteredData, null, 4)
  );
}

async function main() {
  await filterCoingeckoIds();
}

main().then(() => console.log("coingecko ids filtered"));
