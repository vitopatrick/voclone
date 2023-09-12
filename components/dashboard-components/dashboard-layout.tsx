import Chart from "../../shared/charts/Chart";
import DashboardAccountCards from "./dashboard-account-cards";
import DashboardHotcoins from "./dashboard-hotcoins";

const DashboardLayout = () => {
  return (
    <section className="mx-2 my-3">
      <Chart />
      <DashboardAccountCards />
      <DashboardHotcoins />
    </section>
  );
};

export default DashboardLayout;
