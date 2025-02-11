import React, { useState, useMemo } from "react";
import { FaEllipsisV } from "react-icons/fa";
// import CustomDropdown from "../Components/CustomDropdown";
import { Link } from "react-router-dom";
import { useQRCode } from "../context/QrContext";

const History = () => {
  const { qrHistory } = useQRCode();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all"); // all, url, whatsapp, email, etc.

  // Filtered and searched QR codes
  const filteredQRCodes = useMemo(() => {
    return qrHistory
      .filter(qr => {
        // Apply type filter
        if (filterType !== "all" && qr.destinationType.toLowerCase() !== filterType.toLowerCase()) {
          return false;
        }
        
        // Apply search
        const searchLower = searchQuery.toLowerCase();
        return (
          qr.inputValue.toLowerCase().includes(searchLower) ||
          qr.destinationType.toLowerCase().includes(searchLower) ||
          new Date(qr.createdAt).toLocaleDateString().toLowerCase().includes(searchLower)
        );
      })
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Sort by date, newest first
  }, [qrHistory, searchQuery, filterType]);

  // Filter options based on available QR types in history
  const filterOptions = useMemo(() => {
    const types = new Set(qrHistory.map(qr => qr.destinationType.toLowerCase()));
    return ["all", ...Array.from(types)];
  }, [qrHistory]);

  return (
    <div className="flex flex-col items-center justify-center bg-transparent min-h-screen">
      {/* Fixed Search and Filters */}
      <div className="w-[95%] md:w-[80%] fixed top-[70px] md:top-[102px] left-1/2 transform -translate-x-1/2 bg-white shadow-md p-4 md:p-8 rounded-lg z-10">
        <div className="flex flex-row items-center gap-4 justify-between w-full">
          <div className="w-[80%]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by type, value, or date..."
              className="border rounded md:pl-3 md:text-[15px] w-[100%] h-[30px] md:h-[40px] md:py-2 text-black text-[13px] md:w-[90%]"
            />
          </div>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="border rounded text-black text-[13px] h-[30px] w-[30%] md:h-[40px]"
          >
            {filterOptions.map(type => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Scrollable QR Code List */}
      <div className="mt-[135px] md:mt-[250px] w-full md:w-[80%] bg-green-50 p-2 md:p-4 rounded-lg shadow-md h-[430px] overflow-y-auto">
        {filteredQRCodes.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No QR codes found matching your criteria
          </div>
        ) : (
          filteredQRCodes.map((qr) => (
            <Link to={`/history/${qr.id}`} key={qr.id} className="block w-full">
              <div className="flex flex-row justify-between bg-white items-center p-1 md:p-4 hover:bg-green-100 transition mb-3 shadow-md rounded-lg w-full">
                {/* Left Section - QR Code Image & Details */}
                <div className="flex items-center justify-start text-start gap-1 md:gap-4 w-full md:w-auto">
                  <img
                    src={qr.qrImage}
                    alt="QR Code"
                    className="w-16 h-20 md:w-28 md:h-24 object-contain"
                  />
                  <div className="text-start md:text-left">
                    <p className="text-red-500 font-bold text-[11px] md:text-[17px]">
                      {qr.destinationType}
                    </p>
                    <p className="text-gray-900 font-medium text-[11px] md:text-[17px]">
                      {qr.inputValue}
                    </p>
                    <div className="flex md:hidden w-full flex-col items-start justify-start">
                      <p className="text-gray-500 text-[11px] md:text-sm">
                        Created: {new Date(qr.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Middle Section - Creation Date */}
                <div className="hidden md:flex w-full md:w-auto flex-col items-center md:items-start justify-start">
                  <p className="text-gray-500 text-xs md:text-[17px]">
                    Created: {new Date(qr.createdAt).toLocaleDateString()}
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
          ))
        )}
      </div>
    </div>
  );
};

export default History;