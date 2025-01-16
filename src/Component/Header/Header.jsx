import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  HiListBullet,
  HiOutlineUser,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { BiMenuAltLeft } from "react-icons/bi";
import { jwtDecode } from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../store/authSlice";

const Header = ({ isLoggedIn }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleCallbackResponse = (response) => {
    try {
      console.log("Encoded JWT ID token: " + response.credential);
      let userObject = jwtDecode(response.credential);
      dispatch(login(userObject));
      setIsDropdownOpen(false);
    } catch (error) {
      console.error("Error handling callback response:", error);
    }
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });
  }, []);

  const handleSignOut = () => {
    dispatch(logout());
    setIsProfileDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  useEffect(() => {
    if (!isLoggedIn && isDropdownOpen) {
      google.accounts.id.renderButton(
        document.getElementById("signup-button"),
        {
          theme: "outline",
          size: "large",
          width: "100%",
        }
      );
    }
  }, [isDropdownOpen, isLoggedIn]);

  return (
    <header className="bg-white py-3 w-full md:px-6 px-2">
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
              placeholder="Search essentials, groceries, and more..."
              aria-label="Search products"
              className="w-full py-2 px-12 rounded-lg shadow-sm text-sm focus:outline-none bg-slate-50"
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-sky-400"></i>
            <i className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sky-400 text-2xl cursor-pointer">
              <HiListBullet />
            </i>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4 ml-4">
            {isLoggedIn ? (
              <div className="relative">
                <img
                  src={user.picture}
                  alt={`${user.given_name}'s profile picture`}
                  className="rounded-full w-8 h-8 cursor-pointer"
                  onClick={toggleProfileDropdown}
                />

                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <div className="py-2 px-4">
                      <button
                        className="w-full text-left hover:bg-slate-100 p-2 rounded-md"
                        onClick={handleSignOut}
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="relative">
                <button
                  className="flex items-center text-sky-500 text-[20px] hover:bg-slate-100 p-1 rounded-md transition duration-200"
                  aria-label="Sign In or Sign Up"
                  onClick={toggleDropdown}
                >
                  <span className="hover:bg-slate-100 rounded-md">
                    <HiOutlineUser />
                  </span>
                  <span className="ml-1 text-[15px] md:block hidden font-semibold">
                    Sign Up / Sign In
                  </span>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <div id="signup-button" className="py-2 px-4"></div>
                  </div>
                )}
              </div>
            )}

            {isLoggedIn && (
              <button
                className="flex items-center text-sky-500 text-[20px] hover:bg-slate-100 p-1 rounded-md transition duration-200"
                aria-label="Shopping Cart"
              >
                <span className="hover:bg-slate-100 rounded-md">
                  <HiOutlineShoppingCart />
                </span>
                <span className="ml-1 text-[15px] md:block hidden font-semibold">Cart</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
