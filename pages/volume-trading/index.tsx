import React from "react";
import VolumeTradingContainer from "../../components/volume-trading/volume-trading-container";
import Layout from "../../shared/dashboard-layout/Layout";
import VolumeProvider from "../../components/volume-trading/context/VolumeContext";
import { useAuth } from "../../hooks/useAuth";

const VolumeTradePage = () => {
  // call the auth hook
  useAuth();
  return (
    <Layout>
      <VolumeProvider>
        <VolumeTradingContainer />
      </VolumeProvider>
    </Layout>
  );
};

export default VolumeTradePage;
