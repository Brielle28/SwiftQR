import Destination from "../Components/Destination";
import Configuration from "../Components/Configuration";
import PreviewQR from "../Components/PreviewQR";
import HeroSection from "../Components/HeroSection";

const QR = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-start overflow-y-auto lg:overflow-hidden pt-10 sm:pt-12 md:pt-14 lg:pt-16 xl:pt-18 pb-4 sm:pb-5 md:pb-6 lg:pb-2 xl:pb-4">
        <HeroSection />
        <div className="w-full max-w-7xl flex-1 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-8 2xl:px-12 grid grid-cols-1 lg:grid-cols-3 justify-center gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-5 lg:overflow-hidden min-h-0">
          <Destination />
          <Configuration />
          <PreviewQR />
        </div>
      </div>
    </>
  );
};

export default QR;
