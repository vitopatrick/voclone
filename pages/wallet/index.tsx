import WalletAccount from "../../components/wallet/wallet-accounts";
import WalletFaq from "../../components/wallet/wallet-faq";
import { useAuth } from "../../hooks/useAuth";
import Layout from "../../shared/dashboard-layout/Layout";

const WalletPage = () => {
  // call the auth hook
  useAuth();
  return (
    <Layout>
      <WalletAccount />
      <WalletFaq />
    </Layout>
  );
};

export default WalletPage;
