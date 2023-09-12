import Endless from "../components/landing-page/endless-possibities/Endless";
import Faq from "../components/landing-page/faq/frequently-asked-questions";
import Footer from "../components/landing-page/footer/Footer";
import Hero from "../components/landing-page/hero";
import TrendingCoinsTable from "../components/landing-page/hot-coins/hot-coins";
import Navbar from "../components/landing-page/nav-bar";
import StakeToday from "../components/landing-page/stack-today/stake-today";
import StartRow from "../components/landing-page/start-now/start-now";
import StartToday from "../components/landing-page/start-today/start-today";

export default function Home() {
  return (
    <div className="bg-bg text-text_main">
      <Navbar />
      <Hero />
      <TrendingCoinsTable />
      <StartToday />
      <StakeToday />
      <Faq />
      <Endless />
      <StartRow />
      <Footer />
    </div>
  );
}
