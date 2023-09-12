import TotalCoinProvider from "../../../components/wallet/context/TotalCoinContext";
import WalletCoins from "../../../components/wallet/wallet-coins";
import { useAuth } from "../../../hooks/useAuth";
import Layout from "../../../shared/dashboard-layout/Layout";

const CoinsPage = () => {
  // call the auth hook
  useAuth();
  return (
    <TotalCoinProvider>
      <Layout>
        <WalletCoins />
      </Layout>
    </TotalCoinProvider>
  );
};

export default CoinsPage;
