# EigenLayer Restaking Info API 🔗

This project is a REST API backend built with **Node.js**, **Express**, and **MongoDB**, which aggregates and exposes EigenLayer restaking-related data such as restakers, validators, and reward insights.

---

## 📦 Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Utilities**: dotenv, nodemon, axios
- **Architecture**: Modular (Routes, Controllers, Services, Models)

---

## 🚀 How to Run

### 1. Clone & Install

```bash
git clone https://github.com/your-username/random-repo-name.git
cd eigen-restaking-api
npm install
```

### 2. Setup `.env`

Create a `.env` file in the root:

```
MONGO_URI=mongodb://localhost:27017/eigenlayer
PORT=5000
```

> Ensure MongoDB is running locally

### 3. Start Server

```bash
nodemon server.js
```

---

## 📡 API Endpoints

### `GET /restakers`

> Returns a list of users who have restaked their stETH.

```json
[
  {
    "userAddress": "0xUSER1...",
    "amountRestaked": "500 stETH",
    "targetOperator": "0xVALIDATOR1..."
  }
]
```

---

### `GET /validators`

> Returns metadata about each validator/operator.

```json
[
  {
    "operatorAddress": "0xABC123...",
    "totalDelegatedStake": "1500 stETH",
    "slashHistory": [
      { "date": "2024-02-01", "amount": "100 stETH", "reason": "Downtime" }
    ],
    "status": "active"
  }
]
```

---

### `GET /rewards/:address`

> Returns total rewards for a specific wallet.

```json
{
  "address": "0xUSER1...",
  "totalRewards": "200 stETH",
  "breakdown": [
    { "validator": "0xVALIDATOR1...", "amount": "120 stETH" },
    { "validator": "0xVALIDATOR2...", "amount": "80 stETH" }
  ]
}
```

---

## 📖 Notes

- Data is currently returned from mocked dummy values in controller files.
- In future versions, these will be replaced with real-time data fetched from EigenLayer subgraphs, Lido APIs, or Ethereum RPC logs.
- MongoDB models are scaffolded but not actively used yet.

---


## 🧠 Author

**Chandini** 
Project submitted for [Restomart Internship Task]

## 📁 License

MIT License – free to use and extend.
