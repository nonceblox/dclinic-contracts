# DCL Contracts
<img alt="Solidity" src="https://img.shields.io/badge/Solidity-e6e6e6?style=for-the-badge&logo=solidity&logoColor=black"/>
This repository contains the ERC20 Solidity Smart Contracts for Dclinic.

## Prerequisites
- git
- npm
- truffle
- Ganache (optional)

## Getting started
- Clone the repository
```sh
git clone https://github.com/nonceblox/dclinic-contracts
```
- Navigate to `dclinic-contracts` directory
```sh
cd dclinic-contracts
```
- Install dependencies
```sh
npm install
```

### Configure project
- Copy `.example.env` to `.env`
```sh
cp .example.env .env
```
- Add the infura project id to the `.env`

- Copy `.example.secret.json` to `.secret.json`
```sh
cp .example.secret.json .secret.json
```
- Add private keys to `.secret.json` 

## Run tests
- Start ganache
- Run Tests
```sh
npm test
```

## Deploy smart contracts

### on Ganche
```sh
npm run deploy:ganache
```

### on Mumbai Testnet
```sh
npm run deploy:mumbai_testnet
```

### on Polygon Mainnet
```sh
npm run deploy:polygon_mainnet
```

### on Ropsten Testnet
```sh
npm run deploy:ropsten
```

### on Mainnet
```sh
npm run deploy:mainnet
```
