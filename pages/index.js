import styles from "../styles/Home.module.css";
import { useMoralis, useMoralisQuery } from "react-moralis";
import Notlogin from "./notlogin";
import HomeScreen from "./Homescreen";

export default function Home() {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout
  } = useMoralis();

  return (
    <div className={styles.container}>
      {isAuthenticated ? (
        <HomeScreen />
      ) : (
        <div>
          <Notlogin />
        </div>
      )}
    </div>
  );
}
