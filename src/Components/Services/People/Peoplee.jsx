import React from 'react'
import { IoIosPeople } from "react-icons/io";
import { RiCustomerService2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Peoplee = () => {
  return (
    <aside className="w-64 h-screen white shadow-xl">
    <div className="flex items-center gap-2 px-4 py-6">
    <RiCustomerService2Line className="text-xl"/>
      <span className="text-lg font-bold">Services</span>
    </div>
    <ul className="space-y-2">
      <li className="group">
      <div className="flex items-center gap-2 px-4 ">
    <IoIosPeople className="text-xl"/>
      <span className="text-lg font-bold">People</span>
    </div>
        <ul className="ml-8 mt-2 space-y-1 rounded-sm  group-hover:block">
        <Link to="/Awareness"><li className="hover:bg-light  px-4 py-4">
            Awareness
            </li>
            </Link>
           
           <Link to ="/Training">
          <li className="hover:bg-light  px-4 py-4">Training</li></Link>

        </ul>
      </li>

    </ul>
  </aside>
  )
}

export default Peoplee