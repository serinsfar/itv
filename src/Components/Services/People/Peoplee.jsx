import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import GroupsIcon from '@mui/icons-material/Groups';

function Peoplee() {
  const services = [
    { name: "Awareness", path: "/Awareness" },
    { name: "Training", path: "/Training" },
  ];

  return (
    <div className="flex flex-col items-start pt-10">
      <div className="flex items-center gap-4">
        <GroupsIcon/>
        <span className="text-lg font-bold">People</span>
        {services.map((service, index) => (
          <React.Fragment key={index}>
            <IoIosArrowForward />
            <NavLink
              to={service.path}
              className={({ isActive }) =>
                `inline-flex items-center px-4 py-2 rounded-md ${
                  isActive ? 'text-white bg-secondary font-medium' : ''
                }`
              }
            >
              {service.name}
            </NavLink>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Peoplee;
