import Header from "./header/Header";
import Sidebar from "./side-nav/Sidebar";

const Layout = ({ children }: any) => {
  return (
    // parent Div component
    <div className="flex bg-white h-screen ">
      {/*  side bar*/}
      <Sidebar />
      {/* children */}
      <div className="flex-1 overflow-y-scroll ">
        <Header />
        <div className="overflow-y-scroll min-h-0">{children}</div>
      </div>
      {/* <div className="md:h-[140vh]"></div> */}
    </div>
  );
};

export default Layout;
