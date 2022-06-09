import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useMoralis } from "react-moralis";

const Navbar = () => {
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
        <button onClick={logout} className={styles.btn}>
          Profile
        </button>
      </div>
    </div>
  );
};

export default Navbar;
