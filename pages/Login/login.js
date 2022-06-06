import CheckBox from "../../public/check-square-fill.png";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Login.module.css";
import { useMoralis } from "react-moralis";

const Login = () => {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout
  } = useMoralis();
  return (
    <div className={styles.page_hldr}>
      <div className={styles.form_hldr}>
        <Link href="/">
          <h1>SkyCrew</h1>
        </Link>
        <div>
          <form>
            <div className={styles.forms}>
              <Link href="/">
                <div className={styles.connect}>
                  <button onClick={authenticate}>
                    <div className={styles.wallet}>
                      <Image
                        src={CheckBox}
                        alt="Check Box"
                        height={25}
                        width={25}
                      />
                      <h3>connect your wallet</h3>
                    </div>
                  </button>
                </div>
              </Link>
            </div>
          </form>
        </div>
        <div className={styles.footer}>
          <span>
            by continuing, you acknowledge that you have read, understood,{" "}
            <br /> and agree to our terms of service and privacy policy
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
