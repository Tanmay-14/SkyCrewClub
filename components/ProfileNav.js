import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useMoralis } from "react-moralis";
import Profilebtn from "./Profilebtn";

const Profilenav = () => {
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
        <Link href="profile">
          <button className={styles.probtn}>
            <img
              src="https://avatars.dicebear.com/api/identicon/varad.svg?b=%23f5f5f5&r=12&scale=82"
              alt="profile"
            />
            Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Profilenav;
