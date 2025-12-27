// Layout.jsx
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4FAFF]">
      <NavBar />
      <main className="flex-grow pt-[50px] md:pt-[90px]">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
