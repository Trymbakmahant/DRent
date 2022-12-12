import "./App.css";
import Navbar from "./components/Pages/Navbar";
import WorldCoin from "./components/Pages/WorldCoin";
import { ethers } from "ethers";
import { useEffect, useState, useContext } from "react";

function App() {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <>
      <Navbar />
      <WorldCoin />
    </>
  );
}

export default App;
