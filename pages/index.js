
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Sections from "../components/Sections";
import Footer from "../components/Footer";
import NavbarConnected from "../components/NavbarConnected";
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
        <h1>
          <HomeScreen />
        </h1>
      ) : (
        <div>
          <Notlogin />
        </div>
      )}
    </div>
  );
}
