import React from "react";
import Staking from "../../components/staking/Staking";
import Layout from "../../shared/dashboard-layout/Layout";
import { useAuth } from "../../hooks/useAuth";

const StakingPage = () => {
  // call the auth hook
  useAuth();
  return (
    <Layout>
      <div className="my-4">
        <Staking />
      </div>
    </Layout>
  );
};

export default StakingPage;
