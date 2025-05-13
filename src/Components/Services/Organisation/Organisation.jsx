import React from 'react';
import { IoIosPeople } from "react-icons/io";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import ApartmentIcon from '@mui/icons-material/Apartment';

const Organisation = () => {
  const services = [
    { name: "Strategy", path: "/Strategy" },
    { name: "Organisational Development", path: "/Organisational_Development" },
  ];

  return (
    <div className="flex flex-col items-start pt-10">
      <div className="flex items-center gap-4 ">
        <ApartmentIcon className="text-xl" />
        <span className="text-lg font-bold">Organisation</span>
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
};

export default Organisation;
