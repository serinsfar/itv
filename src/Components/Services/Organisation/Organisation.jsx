import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import ApartmentIcon from '@mui/icons-material/Apartment';

const Organisation = () => {
  const services = [
    { name: "Strategy", path: "/Strategy" },
    { name: "Organisational Development", path: "/Organisational_Development" },
  ];

  return (
    <div className="w-full pt-10">
      <div className='flex flex-col items-center md:flex-row md:justify-start'>
      <div className="flex md:flex-row items-center gap-4 md:pr-6 mb-6 md:mb-0">
        <ApartmentIcon className="text-xl" />
        <span className="text-lg font-bold">Organisation</span>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-2 md:gap-4">
        {services.map((unit, index) => (
          <NavLink
            key={index}
            to={unit.path}
            className={({ isActive }) =>
              [
                "flex items-center gap-1 ",
                "px-5 py-3 rounded-3xl",
                "transition-colors duration-200",
                isActive
                  ? "bg-secondary text-white font-medium"
                  : "bg-light text-gray-800 hover:bg-gray-200",
              ].join(" ")
            }
          >
            <IoIosArrowForward className="text-gray-500" />
            {unit.name}
          </NavLink>
        ))}
      </div>

      </div>
    </div>
  );
};

export default Organisation;
