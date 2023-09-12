import Navbar from "../../components/landing-page/nav-bar";
import Footer from "../../components/landing-page/footer/Footer";
import TaxBody from "../../components/tax/tax-body";

const TaxPage = () => {
  return (
    <div className="bg-bg text-white font-main h-screen">
      <Navbar />
      <TaxBody />
      <Footer />
    </div>
  );
};

export default TaxPage;
