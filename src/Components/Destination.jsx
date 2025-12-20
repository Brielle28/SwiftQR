import { Destinations } from "../Utils/Destinations";
import { useQRCode } from "../Context/QrContext";
const Destination = () => {
  const { selectedDestination, setSelectedDestination } = useQRCode();

  return (
    <div className="flex flex-col items-center py-5 justify-start md:w-[25%] w-[100%] bg-white rounded-[10px] shadow-2xl h-[400px]">
      <h1 className="text-[20px] font-bold">Destination</h1>
      <div className="mt-5 w-[70%] grid grid-cols-2 gap-4 overflow-y-auto">
        {Destinations.map((destination) => {
          const Icon = destination.icon;
          const isSelected = selectedDestination?.id === destination.id;

          return (
            <div
              key={destination.id}
              className="flex flex-col items-center justify-center gap-2"
            >
              <button
                onClick={() => setSelectedDestination(destination)}
                className={`bg-green-50 w-[80px] h-[50px] rounded-[8px] flex items-center justify-center 
                  ${isSelected ? "border-2 border-green-500" : ""}`}
              >
                <Icon className="text-xl" />
              </button>
              <p className="text-sm">{destination.type}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Destination;
