import React from "react";
import { QRColors } from "../Utils/QRColors";

const Configuration = () => {
  return (
    <>
      <div className="md:w-[40%] flex flex-col items-center justify-start py-5 w-[100%] bg-white rounded-[10px] shadow-2xl h-[400px] px-[10px]">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-[20px] font-bold">Enter Your WebSite Url</h1>
          <input
            type="text"
            className="w-full py-3 rounded-[10px] border-[3px] border-green-500 outline-0 outline-none mt-1 pl-2"
            placeholder="https://github.com/Brielle28"
          />
        </div>
        {/* bg color */}
        <div className="w-full flex flex-col items-center justify-center mt-5">
          <h1 className="text-[20px] font-bold">Background color</h1>
          <div className="w-[100%] flex flex-wrap gap-3 items-start justify-start mt-3 h-[180px] overflow-y-scroll bg-amber-00">
            {QRColors.map(({ id, bgColor }) => (
              <div
                key={id}
                className={`bg-green-50 w-[65px] h-[35px] flex items-center justify-center rounded-[4px]`}
              >
                <div
                  className={`${bgColor} w-[15px] h-[15px] rounded-[2px]`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Configuration;
