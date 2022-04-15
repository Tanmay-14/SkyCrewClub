import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Sections from "../components/Sections";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SkyCrew</title>
        <meta name="SkyCrew" content="Welcoem to SkyCrew | Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Sections />
      <Footer />
    </div>
  );
}
