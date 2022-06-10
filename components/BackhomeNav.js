import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useMoralis } from "react-moralis";

const BackhomeNav = () => {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout
  } = useMoralis();
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">SkyCrew</Link>
      </div>
      <div className={styles.links}>
        <Link href="/">
          <button className={styles.btn}>Home</button>
        </Link>
      </div>
    </div>
  );
};

export default BackhomeNav;
