import React, { useState } from "react";
import { Destinations } from "../Utils/Destinations"; // Import your list of types with icons
import { FaChevronDown } from "react-icons/fa";

const CustomDropdown = () => {
  const [selected, setSelected] = useState(Destinations[0]); // Default selected item
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-[40%]">
      {/* Selected Item (Trigger Button) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 md:py-2 border rounded-md bg-white shadow-md focus:outline-none"
      >
        <div className="flex items-center gap-2">
          {selected.icon && <selected.icon className="md:text-lg" />}
          <span className="">{selected.type}</span>
        </div>
        <FaChevronDown className="text-gray-500 ml-1 md:ml-0 text-[10px]" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute left-0 w-full mt-2 bg-white border rounded-md shadow-lg max-h-60 overflow-y-auto z-10">
          {Destinations.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 transition"
              onClick={() => {
                setSelected(item);
                setIsOpen(false);
              }}
            >
              <item.icon className="text-lg" />
              <span className="">{item.type}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
