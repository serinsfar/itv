import React from 'react';
import { Link } from "react-router-dom";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";

const Business_units = () => {
  return (
    <aside className="min-w-64 h-fixed left-0 bg-white shadow-xl ">
      <ul className="space-y-2 px-2">
        <li className="group">
          <div className="flex items-center gap-2 px-4 py-6 border-b cursor-pointer ">
            <IoIosPeople className="text-xl" />
            <span className="text-lg font-bold">Business Units</span>
          </div>
          <ul className="ml-8 mt-2 space-y-1 hidden group-hover:block">
            <li>
              <Link to="/AIM" className="block hover:bg-gray-200 px-4 py-2 rounded">
                Aeronautical Information Management
              </Link>
            </li>
            <li>
              <Link to="/SDI" className="block hover:bg-gray-200 px-4 py-2 rounded">
                Spatial Data Infrastructure
              </Link>
            </li>
            <li>
              <Link to="/DCS" className="block hover:bg-gray-200 px-4 py-2 rounded">
                Data Collection Service
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default Business_units;
