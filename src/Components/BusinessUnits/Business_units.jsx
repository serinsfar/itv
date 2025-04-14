import React from 'react';
import { Link } from "react-router-dom";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";

const Business_units = () => {
  return (
<aside className="hidden sm:hidden md:block min-w-64 h-fixed left-0 bg-white shadow-xl md:min-w-48 md:h-auto md:relative md:shadow-none md:bg-transparent md:top-0 md:pt-4 md:pb-2 md:px-2 ">
          <div className="flex items-center gap-2 px-4 py-6">
            <IoIosPeople className="text-xl md:text-lg" />
            <span className="text-lg font-bold">Business Units</span>
          </div>
          <ul className="space-y-2">
            <li className="group">
              <ul className="ml-8 mt-2 space-y-1">
                <li>
                  <Link
                    to="/AIM"
                    className="block hover:bg-gray-200 px-4 py-2 rounded-md"
                  >
                    Aeronautical Information Management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/SDI"
                    className="block hover:bg-gray-200 px-4 py-2 rounded-md"
                  >
                    Spatial Data Infrastructure
                  </Link>
                </li>
                <li>
                  <Link
                    to="/DCS"
                    className="block hover:bg-gray-200 px-4 py-2 rounded-md"
                  >
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
