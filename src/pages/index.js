// components
import Hero from "../components/Hero";
import Section2 from "../components/Section2";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Head from "next/head";
import Header from "../components/Header";

const Landing = () => (
  <div className="bg-white overflow-x-hidden" style={{ overflowX: "hidden" }}>
    <Head>
      <title>buildspace India</title>
    </Head>

    <div
      style={{
        backgroundImage: 'url("/section1/background_gradient.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <Hero />
    </div>
    <div>
      <div>
        <Section2 />
      </div>
      <Faq />
    </div>
    <Footer />
  </div>
);

export default Landing;
