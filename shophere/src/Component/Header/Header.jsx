import React from 'react';

const CustomHamburgerIcon = () => {
    return (
      <svg
        className="w-6 h-6 text-sky-400"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Menu"
      >
        <rect width="24" height="24" fill="none" />
        <rect x="3" y="6" width="18" height="3" fill="currentColor" />
        <rect x="3" y="11" width="14" height="3" fill="currentColor" />
        <rect x="3" y="16" width="10" height="3" fill="currentColor" />
      </svg>
    );
};

const Header = () => {
  return (
    <div className="flex items-center space-x-2 hover:bg-slate-100 p-2 rounded transition-all duration-200">
      <CustomHamburgerIcon />
      <h2 className="text-sky-400 hover:text-sky-600 transition-colors duration-200">ShopHere</h2>
    </div>
  );
}

export default Header;
