import React from 'react'
import { IoEarth } from "react-icons/io5";
import { RiCustomerService2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
function Infra() {
  return (
    <aside className="w-64 h-screen white shadow-xl">
    <div className="flex items-center gap-2 px-4 py-6">
    <RiCustomerService2Line className="text-xl"/>
      <span className="text-lg font-bold">Services</span>
    </div>
    <ul className="space-y-2">
      <li className="group">
      <div className="flex items-center gap-2 px-4 ">
    <IoEarth className="text-xl"/>
      <span className="text-lg font-bold">Infrastructure</span>
    </div>
        <ul className="ml-8 mt-2 space-y-1 rounded-sm  group-hover:block">
        <Link to="/System_Arch"><li className="hover:bg-light  px-4 py-4">
            System Achitecture
            </li>
            </Link>
            <Link to="/Specification">
          <li className="hover:bg-light  px-4 py-4">
           Specification</li></Link>
           
           <Link to ="/Procurment_System">
          <li className="hover:bg-light  px-4 py-4">Procurement of a System</li></Link>

          <Link to ="/Test_Management">
          <li className="hover:bg-light  px-4 py-4 ">Test Management</li></Link>
        </ul>
      </li>

    </ul>
  </aside>
  )
}

export default Infra