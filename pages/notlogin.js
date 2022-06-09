import Head from "next/head";
import Navbar from "../components/Navbar";
import Sections from "../components/Sections";
import Footer from "../components/Footer";

const Notlogin = () => {
  return (
    <div>
      <Head>
        <title>SkyCrew</title>
        <meta name="SkyCrew" content="Welcome to SkyCrew | Home" />
      </Head>
      <Navbar />
      <Sections />
      <Footer />
    </div>
  );
};

export default Notlogin;
