import { useState } from "react";

export default function App() {
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [rent, setRent] = useState("");
  const [deposit, setDeposit] = useState("");
  const [brokerage, setBrokerage] = useState("");
  const [listingText, setListingText] = useState("");

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>RentRelief Navigator</h1>

      <input
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Neighborhood"
        value={area}
        onChange={(e) => setArea(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Monthly Rent"
        value={rent}
        onChange={(e) => setRent(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Deposit"
        value={deposit}
        onChange={(e) => setDeposit(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Brokerage"
        value={brokerage}
        onChange={(e) => setBrokerage(e.target.value)}
      />
      <br /><br />

      <textarea
        rows="5"
        cols="50"
        placeholder="Paste Listing Description"
        value={listingText}
        onChange={(e) => setListingText(e.target.value)}
      />

      <br /><br />

      <button>Analyze</button>
    </div>
  );
}