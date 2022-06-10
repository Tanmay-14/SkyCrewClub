import Navbarnotconnect from "../components/NavbarConnected";
import Head from "next/head";
import Footer from "../components/Footer";
import Sections from "../components/Sections"

const HomeScreen = () => {
  return (
    <div style={{width : "100%"}}>
      <Head>
        <title>SkyCrew</title>
        <meta name="SkyCrew" content="Welcoem to SkyCrew | Home" />
      </Head>
      <Navbarnotconnect />
      <Sections />
      <Footer />
    </div>
  );
};

export default HomeScreen;
