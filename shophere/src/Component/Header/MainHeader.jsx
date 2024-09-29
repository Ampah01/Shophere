import React from "react";
import { HiOutlineTruck, HiOutlineMapPin, HiOutlineTag } from "react-icons/hi2";

const MainHeader = () => {
  return (
    <section className="flex justify-between bg-gray-200 text-sm px-1 py-1 max-w-full items-center">
      <div className="text-[12px] md:text-sm md:font-medium">Welcome to Shophere</div>
      <div className="flex space-x-6 items-center md:mr-10">
        <p className="flex items-center">
          <HiOutlineTruck className="text-sky-400 text-lg" />
          <span className="md:block hidden md:ml-1">
            Deliver to <span className="font-semibold ml-1">233445</span>
          </span>
        </p>
        <p className="flex items-center">
          <HiOutlineMapPin className="text-sky-400 text-lg" />
          <span className="md:block hidden md:ml-1">Track your order</span>
        </p>
        <p className="flex items-center">
          <HiOutlineTag className="text-sky-400 text-lg" />
          <span className="md:block hidden md:ml-1">All offers</span>
        </p>
      </div>
    </section>
  );
};

export default MainHeader;
