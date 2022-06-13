import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://q8c2clh9fth0.usemoralis.com:2053/server"
      appId="bx0gDuIUII0pLYbf1HgpXdN6Jv0Z60oQK4DSnLO8"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
