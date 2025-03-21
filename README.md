# DexKit EVM Chains

Chains supported by DexAppBuilder

# How to support a chain on DexAppBuilder

DexAppBuilder can work with any chain listed on `src/constants/chains.json`

Steps to add:

1. Fork this repository.
2. Run the script `yarn script:fetch-chains` to ensure that you are up to date with the latest chains.
3. Run the script `yarn script:add-chain --chainId chainId-to-add`.
4. Run the script `yarn script:add-viem-chain`.
5. Add the chain symbol to `assets/evm-chain-icons` with same name as the symbol of the previously added chain.
6. Add a testnet flag if it is a testnet.

# How to add a chain to DexAppBuilder as default (DEPRECATED, now all chains added are default)

To add a chain as default on DexAppBuilder please join our [Discord](https://discord.gg/dexkit-official-943552525217435649) and share with us why you think this chain should be supported natively.

Steps to add:

1. Fork this repository.
2. Run the script `yarn script:fetch-chains` to ensure that you are up to date with the latest chains.
3. Run the script `yarn script:add-chain --chainId chainId-to-add`.
4. Add the chain symbol to `assets/evm-chain-icons` with the same name as the symbol of the previously added chain.
5. Add the chainId to the array `SUPPORTED_DEXAPPBUILDER_CHAIN_IDS`.
6. Add a testnet flag if it is a testnet.
