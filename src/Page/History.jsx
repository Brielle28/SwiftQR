import { FaEllipsisV } from "react-icons/fa";
import { qrCodes } from "../Utils/QRCodes";
import CustomDropdown from "../Components/CustomDropdown ";
import { Link } from "react-router-dom";

const History = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-transparent min-h-screen">
      {/* Fixed Search and Filters */}
      <div className="w-[95%] md:w-[80%] fixed top-[70px] md:top-[102px] left-1/2 transform -translate-x-1/2 bg-white shadow-md p-3 md:p-8 rounded-lg z-10">
        <div className="flex flex-row items-center gap-4 justify-between">
          <div className="w-full">
            <input
              type="text"
              placeholder="Search here"
              className="border rounded px-3 md:py-2 text-gray-700 w-full md:w-[90%]"
            />
          </div>
          <CustomDropdown />
        </div>
      </div>

      {/* Scrollable QR Code List */}
      <div className="mt-[120px] md:mt-[210px] w-full md:w-[80%] bg-green-50 p-2 md:p-4 rounded-lg shadow-md h-[430px] overflow-y-auto">
        {qrCodes.map((qr) => (
          <Link to={`/history/${qr.id}`} key={qr.id} className="block w-full">
            <div
              key={qr.id}
              className="flex flex-row justify-between bg-white items-center p-1 md:p-4 hover:bg-green-100 transition mb-3 shadow-md rounded-lg w-full"
            >
              {/* Left Section - QR Code Image & Details */}
              <div className="flex items-center justify-start text-start gap-1 md:gap-4 w-full md:w-auto">
                <div
                  className="w-16 h-20 md:w-28 md:h-24 bg-cover bg-center"
                  style={{ backgroundImage: "url('/qr.png')" }}
                ></div>
                <div className="text-start md:text-left">
                  <p className="text-red-500 font-bold text-[11px] md:text-[17px]">
                    {qr.type}
                  </p>
                  <p className="text-gray-900 font-medium text-[11px] md:text-[17px]">
                    QR Code {qr.id}
                  </p>
                  <div className="flex md:hidden w-full flex-col items-start justify-start">
                    <a
                      href="#"
                      className="text-blue-500 text-[11px] md:text-sm"
                    >
                      {qr.actions}
                    </a>
                    <p className="text-gray-500 text-[11px] md:text-sm">
                      Created: {qr.modified}
                    </p>
                  </div>
                </div>
              </div>

              {/* Middle Section - QR Code Actions */}
              <div className="hidden md:flex w-full md:w-auto flex-col items-center md:items-start justify-start">
                <a href="#" className="text-blue-500 text-xs md:text-[17px]">
                  {qr.actions}
                </a>
                <p className="text-gray-500 text-xs md:text-[17px]">
                  Created: {qr.modified}
                </p>
              </div>

              {/* Right Section - Detail Button & More Options */}
              <div className="flex items-center gap-3 md:gap-8 mt-2 md:mt-0">
                <button className="border-2 px-4 md:px-8 py-1 md:py-2 rounded-[4px] md:rounded-[8px] text-green-600 border-green-600 text-xs md:text-sm">
                  Detail
                </button>
                <FaEllipsisV className="hidden md:block text-gray-600 cursor-pointer" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default History;
