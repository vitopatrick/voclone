import React from "react";
import Navbar from "../../components/landing-page/nav-bar";
import Footer from "../../components/landing-page/footer/Footer";
import CryptoMiningBody from "../../components/crypto-mining/crypto-mining";

type Props = {};

const CryptoMiningPage = (props: Props) => {
  return (
    <div className="bg-bg text-white font-main">
      <Navbar />
      <CryptoMiningBody />
      <Footer />
    </div>
  );
};

export default CryptoMiningPage;
