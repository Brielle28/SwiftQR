import React from "react";
import { BsQrCode } from "react-icons/bs";
import { Link } from "react-router-dom";
{
  /* <BsQrCode /> */
}
const NavBar = () => {
  return (
    <>
      <nav className="fixed top-0 w-full h-[50px] px-3 md:h-[90px] flex items-center justify-between md:px-[50px]  ">
        <div className="flex gap-1 items-center justify-center">
          <BsQrCode className="text-[#2DB951] md:text-[35px]" />
          <h1 className="md:text-[30px] font-bold text-black">SwiftQR</h1>
        </div>
        <div className=" flex gap-3 md:gap-10 items-center justify-center mt-[] md:mt-0">
          <Link to="/">
            <button className=" bg-transparent text-[#2DB951] font-semibold md:text-[18px] text-[11px]">
              {" "}
              QR Generator{" "}
            </button>
          </Link>
          <Link to="/history">
            <button className=" bg-transparent text-[#2DB951] border-1 md:border-[3px] border-[#2DB951] text-[11px] py-[2px] px-3 md:py-2 md:px-12 font-semibold md:text-[18px]">
              {" "}
              History{" "}
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
