import { BsQrCode } from "react-icons/bs";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav className="fixed top-0 w-full h-[60px] px-3 md:h-[83px] lg:h-[93px] flex items-center justify-between md:px-[50px] lg:px-[80px] bg-[#F4FAFF] z-50">
        <Link to="/">
        <div className="flex gap-1 items-center justify-center">
          <BsQrCode className="text-[#2DB951] text-[20px] sm:text-[25px] md:text-[35px]" />
          <h1 className="text-[16px] sm:text-[20px] md:text-[30px] font-bold text-black">SwiftQR</h1>
        </div>
        </Link>
        <div className="flex gap-2 sm:gap-3 md:gap-10 items-center justify-center">
          <Link to="/">
            <button className="bg-transparent text-[#2DB951] font-semibold text-[10px] sm:text-[12px] md:text-[18px] hover:opacity-80 transition-opacity">
              QR Generator
            </button>
          </Link>
          <Link to="/history">
            <button className="bg-transparent text-[#2DB951] border-[1px] sm:border-[2px] md:border-[3px] border-[#2DB951] text-[10px] sm:text-[12px] py-[2px] px-2 sm:px-3 md:py-2 md:px-12 font-semibold md:text-[18px] rounded hover:bg-green-50 transition-colors">
              History
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
