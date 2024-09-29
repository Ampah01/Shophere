import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  HiListBullet,
  HiOutlineUser,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { BiMenuAltLeft } from "react-icons/bi";

const Header = () => {
  return (
    <header className="bg-white py-3 min-w-min md:px-6 px-2">
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <span className="flex items-center font-bold text-sky-500 text-2xl bg-slate-100 p-1 rounded-md transition duration-200">
            <BiMenuAltLeft />
          </span>

          <h1 className="ml-2 text-sky-500 text-xl md:text-2xl font-bold md:block hidden">
            ShopHere
          </h1>
        </div>

        <div className="flex items-center flex-grow justify-end mx-4">
          <div className="relative flex-grow max-w-md">
            <input
              type="text"
              placeholder="Search essentails, groceries and more..."
              aria-label="Search products"
              className="w-full py-2 px-12 rounded-lg shadow-sm text-sm focus:outline-none bg-slate-50"
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-sky-400"></i>
            <i className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sky-400 text-2xl">
              <HiListBullet />
            </i>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4 ml-4">
            <button
              className="flex items-center text-sky-500 text-[20px] hover:bg-slate-100 p-1 rounded-md transition duration-200"
              aria-label="Sign In or Sign Up"
            >
              <span className="hover:bg-slate-100 rounded-md">
                <HiOutlineUser />
              </span>
              <span className="ml-1 text-[15px] md:block hidden">
                Sign In / Sign Up
              </span>
            </button>

            <button
              className="flex items-center text-sky-500 text-[20px] hover:bg-slate-100 p-1 rounded-md transition duration-200"
              aria-label="Shopping Cart"
            >
              <span className="hover:bg-slate-100 rounded-md">
                <HiOutlineShoppingCart />
              </span>
              <span className="ml-1 text-[15px] md:block hidden">Cart</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
