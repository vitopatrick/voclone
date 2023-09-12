import React from "react";
import Footer from "../../components/landing-page/footer/Footer";
import Navbar from "../../components/landing-page/nav-bar";
import { risks } from "../../components/risk/constant/risk-file";
import RiskBody from "../../components/risk/risk-body";

const RiskPage = () => {
  return (
    <section className="bg-bg">
      <Navbar />
      {risks.map((risk) => (
        <RiskBody heading={risk.heading} body={risk.body} />
      ))}
      <Footer />
    </section>
  );
};

export default RiskPage;
