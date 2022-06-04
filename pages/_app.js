import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://fycpgst0actt.usemoralis.com:2053/server"
      appId="QliWZ6XAAkI1W25eAChPCnsIHCHfVIXMCSCRS7Kd"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
