import styles from "../styles/Home.module.css";
import { useMoralis, useMoralisQuery } from "react-moralis";
import Notlogin from "./notlogin";
import HomeScreen from "./Homescreen";
import Loading from "../public/loading.svg";
import Isloading from "./loading/isloading";

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
      ) : isAuthenticating ? (
        <div>
          <Isloading />
        </div>
      ) : (
        <div>
          <Notlogin />
        </div>
      )}
    </div>
  );
}
