import DepositFaq from "../../components/deposits/DepositFaq";
import DepositForm from "../../components/deposits/DepositForm";
import DepositHistory from "../../components/deposits/deposit-history";
import { useAuth } from "../../hooks/useAuth";
import Layout from "../../shared/dashboard-layout/Layout";

const index = () => {
  // call the auth hook
  useAuth();

  return (
    <Layout>
      <div className="text-white flex items-start gap-4 flex-col md:flex-row mx-auto w-[90%]">
        <DepositForm />
        <DepositFaq />
      </div>
      <DepositHistory />
    </Layout>
  );
};

export default index;
