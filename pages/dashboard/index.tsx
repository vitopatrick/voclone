import DashboardLayout from "../../components/dashboard-components/dashboard-layout";
import { useAuth } from "../../hooks/useAuth";
import Layout from "../../shared/dashboard-layout/Layout";

const DashboardPage = () => {
  // call the auth hook
  useAuth();
  return (
    <Layout>
      <DashboardLayout />
    </Layout>
  );
};

export default DashboardPage;
