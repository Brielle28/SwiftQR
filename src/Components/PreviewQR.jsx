import React from "react";
import QRCode from "react-qr-code";

const PreviewQR = () => {
  const linkedInUrl =
    "https://www.linkedin.com/in/nnadozie-chukwuemerie-clara-b65273274/"; // Replace with your LinkedIn profile URL

  return (
    <>
      <div className="md:w-[20%] w-[100%] flex-col bg-white rounded-[10px] shadow-2xl h-[400px] flex items-center py-5 justify-start">
        <h1 className="text-[23px] font-bold"> Preview QR</h1>
        <QRCode
          value={linkedInUrl}
          bgColor="green"
          fgColor="white"
          className="w-full h-[190px] mt-2"
        />
        <div className="w-full mt-4 px-3">
          <div className="w-full items-center flex justify-between ">
            <button className="py-3 px-5 flex items-center justify-center bg-green-50 rounded-[8px] font-bold">PNG</button>
            <button className="py-3 px-5 flex items-center justify-center bg-green-50 rounded-[8px] font-bold">SVG</button>
            <button className="py-3 px-5 flex items-center justify-center bg-green-50 rounded-[8px] font-bold">JPEG</button>
          </div>
          <button className="w-full py-3 bg-green-500 mt-4 rounded-[8px] text-white font-bold">
            Download
          </button>
        </div>
      </div>
    </>
  );
};

export default PreviewQR;
