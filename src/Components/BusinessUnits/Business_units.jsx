import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';

function Business_units() {
  const businessUnits = [
    { name: "Aeronautical Information Management", path: "/AIM" },
    { name: "Spatial Data Infrastructure", path: "/SDI" },
    { name: "Data Collection Service", path: "/DCS" },
  ];

  return (
    <div className="flex flex-col items-start pt-10">
      <div className="flex items-center gap-4">
        <AssuredWorkloadIcon />
        <span className="text-lg font-bold">Business Units</span>
        {businessUnits.map((unit, index) => (
          <React.Fragment key={index}>
            <IoIosArrowForward />
            <NavLink
              to={unit.path}
              className={({ isActive }) =>
                `inline-flex items-center px-4 py-2 rounded-md ${
                  isActive ? 'text-white bg-secondary font-medium' : ''
                }`
              }
            >
              {unit.name}
            </NavLink>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Business_units;
