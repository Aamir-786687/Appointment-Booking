import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "../context/AppContext";

const DoctorAuth = () => {

  const [doctorName, setdoctorName] = useState("");
  const [doctorEmail, setdoctorEmail] = useState("");
  const [doctorPassword, setdoctorPassword] = useState("");
  const navigate = useNavigate()
const {setDoctor} = useContext(AppContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!doctorName || !doctorEmail || !doctorPassword) {
      toast.error('Please fill all the fields')
      return;
    }
    const doctorData = { doctorName, doctorEmail, doctorPassword }
    console.log(doctorData)
    setDoctor(doctorData)
    localStorage.setItem("doctor", JSON.stringify(doctorData))
    toast.success("Doctor Register Successfully")
    setTimeout(() => {
      navigate("/Doctor-login")
    }, 2000)  
  }
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
          <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Hello Please Register
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="block text-gray-700 font-medium">Doctor Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={doctorName}
                onChange={(e) => setdoctorName(e.target.value)}
                placeholder="Enter your doctorname"
              />
            </div>


            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={doctorEmail}
                onChange={(e) => setdoctorEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={doctorPassword}
                onChange={(e) => setdoctorPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-200"
            >
              Sign Up
            </button>

            <p className="text-center text-gray-600 mt-4">
              Already Have An Account
              <span onClick={() => navigate("/Doctor-login")} className="text-blue-500 cursor-pointer"> Login</span>


            </p>
            <h1 className="text-center text-gray-600 mt-4" onClick={() => navigate("/User-register")}>If youre Patient <span className="text-blue-500 cursor-pointer">Register Here</span></h1>
          </form>
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} theme="light" />
    </>
  );
};

export default DoctorAuth;