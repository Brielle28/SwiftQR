import React, { useState, useMemo } from "react";
import { useQRCode } from "../context/QrContext";
import {
  Calendar,
  Search,
  Filter,
  MoreVertical,
  Download,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";

const History = () => {
  const { qrHistory, downloadQR, deleteQR } = useQRCode();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [selectedQR, setSelectedQR] = useState(null);

  // Format input value based on QR type
  const formatInputValue = (qr) => {
    if (!qr.inputValue) return "";

    switch (qr.destinationType.toLowerCase()) {
      case "wifi":
        return `Network: ${qr.inputValue.ssid || ""}`;

      case "email":
        if (typeof qr.inputValue === "object") {
          return `To: ${qr.inputValue.email || ""} Subject: ${
            qr.inputValue.subject || ""
          }`;
        }
        return qr.inputValue;

      case "message":
        if (typeof qr.inputValue === "object") {
          return `To: ${qr.inputValue.number || ""} Message: ${
            qr.inputValue.message || ""
          }`;
        }
        return qr.inputValue;

      default:
        return typeof qr.inputValue === "object"
          ? JSON.stringify(qr.inputValue)
          : String(qr.inputValue);
    }
  };

  const filterOptions = useMemo(() => {
    const types = new Set(
      qrHistory.map((qr) => qr.destinationType.toLowerCase())
    );
    return ["all", ...Array.from(types)];
  }, [qrHistory]);

  const filteredQRCodes = useMemo(() => {
    return qrHistory
      .filter((qr) => {
        const formattedValue = formatInputValue(qr).toLowerCase();
        const destinationType = (qr.destinationType || "").toLowerCase();
        const createdAt = qr.createdAt
          ? new Date(qr.createdAt).toLocaleDateString().toLowerCase()
          : "";

        if (
          filterType !== "all" &&
          destinationType !== filterType.toLowerCase()
        ) {
          return false;
        }

        const searchLower = searchQuery.toLowerCase();
        return (
          formattedValue.includes(searchLower) ||
          destinationType.includes(searchLower) ||
          createdAt.includes(searchLower)
        );
      })
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, [qrHistory, searchQuery, filterType]);

  const handleQRSelect = (qr) => {
    setSelectedQR(selectedQR?.id === qr.id ? null : qr);
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-[50px] md:mt-[50">
      {/* Header Section */}
      <div className="sticky top-[50px]  bg-white shadow-sm p-4 md:top-[80px]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">QR Code History</h1>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search QR codes..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="relative w-full sm:w-48 ">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg appearance-none bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {filterOptions.map((type) => (
                  <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* QR Code Grid */}
      <div className="max-w-7xl mx-auto p-4 md:mt-[30px]">
        {filteredQRCodes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No QR codes found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredQRCodes.map((qr) => (
              <Link to={`/history/${qr.id}`} key={qr.id} className="block">
                <div
                  className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden ${
                    selectedQR?.id === qr.id ? "ring-2 ring-blue-500" : ""
                  }`}
                >
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex gap-4">
                        <img
                          src={qr.qrImage}
                          alt="QR Code"
                          className="w-24 h-24 object-contain bg-gray-50 rounded"
                        />
                        <div>
                          <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                            {qr.destinationType}
                          </span>
                          <p className="mt-2 text-[13px] md:text-[15px] w-[80%] md:w-full text-gray-600 line-clamp-2">
                            {formatInputValue(qr)}
                          </p>
                          <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span>
                              {new Date(qr.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                      <MoreVertical className="w-5 h-5 text-gray-500" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
