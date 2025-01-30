import React from "react";
import { Destinations } from "../Utils/Destinations";

const Destination = () => {
  return (
    <div className="flex flex-col items-center py-5 justify-start md:w-[25%] w-[100%] bg-white rounded-[10px] shadow-2xl h-[400px]">
      <h1 className="text-[20px] font-bold">Destination</h1>
      <div className="mt-5 w-[70%] grid grid-cols-2 gap-4 overflow-y-auto ">
        {Destinations.map((destination) => {
          const Icon = destination.icon;
          return (
            <div
              key={destination.id}
              className="flex flex-col items-center justify-center gap-2"
            >
              <button className="bg-green-50 w-[80px] h-[50px] rounded-[8px] flex items-center justify-center">
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