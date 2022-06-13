import styles from "../styles/NotFound.module.css";
import Notfound from "../public/404.png";
import Image from "next/image";
import Link from "next/link";
export default function Custom404() {
  return (
    <div>
      <center>
        <div className={styles.card}>
          <div className={styles.img}>
            <Image src={Notfound} alt="404" width={300} height={300} />
          </div>
          <h1>404</h1>
          <h2>Page not found</h2>
          <div className={styles.container}>
            I guess you are lost. Still you can go back.
            <p />
            <Link href="/">
              <button>Home</button>
            </Link>
          </div>
        </div>
      </center>
    </div>
  );
}
