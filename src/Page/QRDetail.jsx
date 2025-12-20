import { useParams, Link } from "react-router-dom";
import { useQRCode } from "../Context/QrContext";
import { useState } from "react";
import { Trash2 } from "lucide-react"; // Ensure this import is correct

const QRDetail = () => {
  const { qrHistory, deleteQR } = useQRCode();
  const { id } = useParams();
  const [copied, setCopied] = useState(false);

  // Find the matching QR code using string comparison
  const qr = qrHistory.find((item) => item.id === id);

  const handleDownload = () => {
    if (!qr) return;
    const link = document.createElement("a");
    link.href = qr.qrImage;
    link.download = `qr-code-${qr.destinationType.toLowerCase()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopy = () => {
    if (!qr) return;
    navigator.clipboard.writeText(qr.inputValue).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!qr) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-red-500 text-xl mb-4">QR Code not found!</p>
          <Link
            to="/history"
            className="text-green-600 hover:text-green-800 font-semibold"
          >
            ⬅ Back to History
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4 md:p-8">
      <div className="bg-white shadow-lg rounded-lg p-4 md:p-8 w-full max-w-2xl">
        <h1 className="text-center text-xl md:text-3xl font-bold text-gray-900">
          QR Code Details
        </h1>

        <div className="flex flex-col md:flex-row items-center md:items-start mt-3 md:mt-10">
          {/* QR Image */}
          <div className="flex-shrink-0">
            <img
              src={qr.qrImage}
              alt="QR Code"
              className="w-32 h-32 md:w-64 md:h-64 rounded-lg shadow-md object-contain bg-white"
            />
          </div>

          {/* Details Section */}
          <div className="md:ml-6 mt-2 md:mt-0 flex flex-col items-start justify-items-start text-center md:text-left w-full">
            <h2 className="text-lg md:text-2xl font-semibold text-red-500 md:mb-1 text-[15px] md:text-[17px]">
              Type: {qr.destinationType}
            </h2>

            <div className="relative cursor-pointer group" onClick={handleCopy}>
              <p className="text-gray-700 font-medium text-[13px] md:text-[15px]">
                Value:{" "}
                <span className="text-blue-500 break-all group-hover:underline text-[13px] md:text-[15px]">
                  {qr.inputValue}
                </span>
              </p>
              {copied && (
                <span className="absolute -top-6 left-0 bg-gray-800 text-white text-xs px-2 py-1 rounded-md">
                  Copied!
                </span>
              )}
            </div>
            <p className="text-gray-700 text-sm md:text-lg mt-1 text-[13px] md:text-[15px]">
              Created:{" "}
              <span className="font-medium text-[13px] md:text-[15px]">
                {new Date(qr.createdAt).toLocaleString()}
              </span>
            </p>

            {/* Show QR Color */}
            <div className="mt-1 flex items-center justify-center gap-2">
              <p className="text-gray-700 text-sm md:text-lg">Color:</p>
              <div
                className="w-14 h-4"
                style={{ backgroundColor: qr.color }}
                title="QR Code Color"
              />
            </div>

            {/* Navigation & Action Buttons */}
            <div className="mt-1 flex flex-col items-center md:items-start gap-2 md:w-[70%] w-full">
              <div className="w-full flex items-center justify-between">
                <Link
                  to="/history"
                  className="text-green-600 p-1 md:p-2 hover:bg-green-300 rounded-[8px] font-semibold text-sm md:text-lg"
                >
                  ⬅ Go Back
                </Link>

                {/* Delete Button */}
                <button
                  onClick={() => deleteQR(qr.id)}
                  className="p-2 hover:bg-red-300 rounded-[8px] flex items-center gap-2"
                  title="Delete"
                >
                  <Trash2 className="w-5 h-5 text-red-500" />
                  <span className="text-red-500 font-semibold">Delete</span>
                </button>
              </div>

              {/* Download Button */}
              <button
                onClick={handleDownload}
                className="bg-green-500 px-5 py-2 md:py-3 rounded-md text-white font-semibold hover:bg-green-700 text-sm md:text-base transition duration-300 ease-in-out w-full md:w-auto"
              >
                Download QR Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRDetail;
