import { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-surface shadow-sm backdrop-blur-sm bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img
              onClick={() => navigate("/")}
              className="h-8 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              src={assets.logo}
              alt="Logo"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-primary"
                      : "text-text-light hover:text-primary"
                  }`
                }
              >
                HOME
              </NavLink>
              <NavLink
                to="/doctors"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-primary"
                      : "text-text-light hover:text-primary"
                  }`
                }
              >
                ALL DOCTORS
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-primary"
                      : "text-text-light hover:text-primary"
                  }`
                }
              >
                ABOUT
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-primary"
                      : "text-text-light hover:text-primary"
                  }`
                }
              >
                CONTACT
              </NavLink>
            </div>
          </div>

          {/* User Menu */}
          <div className="hidden md:block">
            {user ? (
              <div className="relative group">
                <div className="flex items-center space-x-2 cursor-pointer">
                  <img
                    className="h-8 w-8 rounded-full ring-2 ring-primary ring-offset-2"
                    src={user.photoURL || assets.profile_pic}
                    alt={user.displayName || "Profile"}
                  />
                  <svg
                    className="h-4 w-4 text-text-light"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-surface ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-1">
                    <button
                      onClick={() => navigate("/my-profile")}
                      className="block w-full text-left px-4 py-2 text-sm text-text hover:bg-background"
                    >
                      My Profile
                    </button>
                    <button
                      onClick={() => navigate("/my-appointments")}
                      className="block w-full text-left px-4 py-2 text-sm text-text hover:bg-background"
                    >
                      My Appointments
                    </button>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-text hover:bg-background"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors duration-300"
              >
                Sign In
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setShowMenu(true)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text hover:text-primary hover:bg-background focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative min-h-screen bg-surface shadow-xl">
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <img src={assets.logo} className="h-8 w-auto" alt="Logo" />
            <button
              onClick={() => setShowMenu(false)}
              className="p-2 rounded-md text-text hover:text-primary hover:bg-background focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="px-4 py-6 space-y-4">
            <NavLink
              to="/"
              onClick={() => setShowMenu(false)}
              className={({ isActive }) =>
                `block px-4 py-2 text-base font-medium rounded-lg transition-colors duration-300 ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-text hover:bg-background"
                }`
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/doctors"
              onClick={() => setShowMenu(false)}
              className={({ isActive }) =>
                `block px-4 py-2 text-base font-medium rounded-lg transition-colors duration-300 ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-text hover:bg-background"
                }`
              }
            >
              ALL DOCTORS
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setShowMenu(false)}
              className={({ isActive }) =>
                `block px-4 py-2 text-base font-medium rounded-lg transition-colors duration-300 ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-text hover:bg-background"
                }`
              }
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setShowMenu(false)}
              className={({ isActive }) =>
                `block px-4 py-2 text-base font-medium rounded-lg transition-colors duration-300 ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-text hover:bg-background"
                }`
              }
            >
              CONTACT
            </NavLink>
            {!user && (
              <button
                onClick={() => {
                  setShowMenu(false);
                  navigate("/login");
                }}
                className="w-full bg-primary text-white px-4 py-2 rounded-lg text-base font-medium hover:bg-primary-dark transition-colors duration-300"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
