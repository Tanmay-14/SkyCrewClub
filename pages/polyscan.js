import { useState } from "react";
export default function Scan() {
  const [balance, setbalance] = useState([]);
  // fetch api data from url
  function search() {
    var n = document.getElementById("address").value;
    var url =
      "https://api.polygonscan.com/api?module=account&action=balance&address=" +
      n +
      "&apikey=YourApiKeyToken";
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.result);
        setbalance(data.result);
      });
  }
  return (
    <div className="bg-red-500 p-6">
      <div className="m-5">
        <h1 className="text-3xl pb-5">Scan Certificate</h1>
        <div className="bg-white w-fit rounded">
          <input
            type="text"
            className="bg-white p-2 border-0"
            id="address"
            placeholder="Enter certificate number"
          />
          <button onClick={search} className="bg-blue-500 p-2">
            search
          </button>
        </div>
        <h1>{balance}</h1>
      </div>
    </div>
  );
}
