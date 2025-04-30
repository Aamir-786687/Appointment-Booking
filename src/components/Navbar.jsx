import { useContext, useState } from "react"
import { assets } from "../assets/assets"
import { NavLink, useNavigate } from "react-router-dom"
import { AppContext } from "../context/AppContext"
import { ChevronDown } from "lucide-react"

// Import toast at the top of the file
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Navbar = () => {
  const navigate = useNavigate()
  const { user, doctor, isAuth, setISAuth } = useContext(AppContext)
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="sticky top-0 z-50 bg-white flex items-center justify-between text-sm py-3 mb-5 border-b border-b-gray-400">
      <img
        onClick={() => navigate("/")}
        src={assets.logo || "/placeholder.svg"}
        alt="logo"
        className="w-18 h-20 cursor-pointer -m-2 ml-8"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-start gap-10 font-medium">
        <NavLink to="/">
          <li className="py-3">HOME</li>
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-3">DOCTORS</li>
        </NavLink>
      </ul>

      <div className="flex items-center gap-4">
        {isAuth ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <p>{user?.userName || doctor?.doctorName}</p>
            <ChevronDown className="w-4 h-4" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p onClick={() => navigate("/my-appointment")} className="hover:text-black cursor-pointer">
                  My Appointments
                </p>
                <p
                  onClick={() => {
                    setISAuth(false)
                    toast.success("Logged out successfully")
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  Log Out
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/user-register")}
            className="cursor-pointer bg-orange-500 py-2 text-white px-7 mr-8 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}

        {/* Mobile Menu */}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden cursor-pointer"
          src={assets.menu_icon || "/placeholder.svg"}
          alt="Menu"
        />

        <div
          className={`fixed top-0 right-0 bg-white shadow-lg h-screen w-64 z-50 transition-transform duration-300 ease-in-out ${
            showMenu ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="flex items-center justify-between px-5 py-6 border-b">
            <img className="w-40 h-18" src={assets.logo_doc || "/placeholder.svg"} alt="Logo" />
            <img
              className="w-5 cursor-pointer"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon || "/placeholder.svg"}
              alt="Close"
            />
          </div>

          <ul className="flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              Home
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/doctors">
              Doctors
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
