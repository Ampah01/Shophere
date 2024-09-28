import React from "react";
import { FaTruck, FaBox, FaTag } from "react-icons/fa"; 
const MainHeader = () => {
  return (
    <section className="hidden sm:flex justify-between bg-gray-200 text-sm px-4 items-center py-1 min-w-min">
      <div className="font-semibold">Welcome to worldwide Shophere</div>
      <div className="flex space-x-6 items-center">
        <p className="flex items-center">
          <FaTruck className="mr-2 text-sky-400" />
          Deliver to <span className="font-semibold ml-1">233445</span>
        </p>
        <p className="flex items-center">
          <FaBox className="mr-2 text-sky-400" />
          Track your order
        </p>
        <p className="flex items-center">
          <FaTag className="mr-2 text-sky-400" />
          All offers
        </p>
      </div>
    </section>
  );
};

export default MainHeader;
