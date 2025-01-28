import React from "react";
import QRCode from "react-qr-code";

const PreviewQR = () => {
  const linkedInUrl =
    "https://www.linkedin.com/in/nnadozie-chukwuemerie-clara-b65273274/"; // Replace with your LinkedIn profile URL

  return (
    <>
      <div className="md:w-[25%] w-[100%] bg-white rounded-[10px] shadow-2xl h-[400px]">
        
        <div
          // style={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   height: "100vh",
          // }}
        >
          <QRCode
            value={linkedInUrl}
            size={100}
            bgColor="white"
            fgColor="black"
          />
        </div>
      </div>
    </>
  );
};

export default PreviewQR;
