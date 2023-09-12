import WithdrawalForm from "../../components/withdrawal/WithdrawalForm";
import WithdrawalFaq from "../../components/withdrawal/WithdrawalFaq";
import Layout from "../../shared/dashboard-layout/Layout";
import WithdrawalHistory from "../../components/withdrawal/WithdrawalHistory";
import { useAuth } from "../../hooks/useAuth";

const withdraw = () => {
  // call the auth hook
  useAuth();

  return (
    <Layout>
      <div className="flex md:flex-row flex-col">
        <WithdrawalForm />
        <WithdrawalFaq />
      </div>
      <WithdrawalHistory />
    </Layout>
  );
};

export default withdraw;
