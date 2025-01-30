import React from "react";
import Destination from "../Components/Destination";
import Configuration from "../Components/Configuration";
import PreviewQR from "../Components/PreviewQR";
import HeroSection from "../Components/HeroSection";

const QR = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center min-h-screen mt-16 md:mt-0 mb-14 md:mb-0">
        <HeroSection />
        <div className="w-full px-[20px] md:px-[100px] flex flex-col md:flex-row items-center justify-center gap-3">
          <Destination />
          <Configuration />
          <PreviewQR />
        </div>
      </div>
    </>
  );
};

export default QR;
