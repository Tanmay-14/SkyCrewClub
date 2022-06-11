import { useEffect, useState } from "react";

const Test = () => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (message !== null) {
      console.log(" value is not null ");
    }

    if (message === null) {
      console.log(" value is null ");
    }

    if (message !== undefined && message !== null) {
      console.log("variable is NOT undefined or null");
    }

    // ✅ Check if value is equal to null or undefined
    if (message === undefined || message === null) {
      console.log("variable is undefined or null");
    }
  }, [message]);

  return (
    <div>
      <button onClick={() => setMessage("Hello")}>Click me</button>
      <h2>{message}</h2>
    </div>
  );
};

export default Test;
