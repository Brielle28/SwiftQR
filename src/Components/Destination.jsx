import { Destinations } from "../Utils/Destinations";
import { useQRCode } from "../Context/QrContext";
const Destination = () => {
  const { selectedDestination, setSelectedDestination } = useQRCode();

  return (
    <div className="flex flex-col items-center justify-start py-2 sm:py-2.5 md:py-3 lg:py-4 xl:py-4 w-full max-h-[350px] sm:max-h-[480px] md:max-h-[520px] lg:h-full xl:h-full bg-white rounded-[8px] sm:rounded-[10px] shadow-lg sm:shadow-xl lg:shadow-2xl overflow-hidden px-2 sm:px-2.5 md:px-3 lg:px-5 xl:px-5">

    {/* <div className="flex flex-col items-center py-2 sm:py-2.5 md:py-3 lg:py-4 xl:py-4 justify-start w-full max-h-[350px] sm:max-h-[400px] md:max-h-[450px] lg:h-full xl:h-full bg-white rounded-[8px] sm:rounded-[10px] shadow-lg sm:shadow-xl lg:shadow-2xl overflow-hidden"> */}
      <h1 className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] xl:text-[17px] font-bold mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-4 flex-shrink-0">Destination</h1>
      <div className="flex-1 w-full sm:w-[90%] md:w-[85%] lg:w-[75%] xl:w-[75%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-2 gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 xl:gap-3 px-1.5 sm:px-2 md:px-3 overflow-y-auto min-h-0 pb-1.5 sm:pb-2">
        {Destinations.map((destination) => {
          const Icon = destination.icon;
          const isSelected = selectedDestination?.id === destination.id;

          return (
            <div
              key={destination.id}
              className="flex flex-col items-center justify-center gap-1 sm:gap-2"
            >
              <button
                onClick={() => setSelectedDestination(destination)}
                className={`bg-green-50 w-full max-w-[65px] sm:max-w-[70px] md:max-w-[75px] lg:max-w-[85px] xl:max-w-[85px] h-[36px] sm:h-[38px] md:h-[42px] lg:h-[48px] xl:h-[48px] rounded-[5px] sm:rounded-[6px] flex items-center justify-center transition-all hover:scale-105 active:scale-95
                  ${isSelected ? "border-2 border-green-500 bg-green-100" : "hover:bg-green-100"}`}
              >
                <Icon className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-xl" />
              </button>
              <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-xs text-center leading-tight mt-0.5">{destination.type}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Destination;
