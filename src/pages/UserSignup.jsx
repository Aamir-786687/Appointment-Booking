import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "../context/AppContext";

const UserAuth = () => {

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  

const {setUser} = useContext(AppContext)
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!userName || !userEmail || !userPassword){
      toast.error("Please fill all the fields");
      return;
    }
    const userData = {userName,userEmail,userPassword}
    // console.log(userData);
    setUser(userData)
    localStorage.setItem("user",JSON.stringify(userData))
    toast.success("Account created successfully!");
    setTimeout(()=>{
      navigate('/User-login')
    },1000)
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
          <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
           Please Register
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            
                <label className="block text-gray-700 font-medium">Username</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter your username"
                />
             

            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition duration-200"

            >
              Register
            </button>

            <p className="text-center text-gray-600 mt-4">
              Already have an account? {" "}
              <span
                className="text-blue-500 cursor-pointer hover:underline"
                onClick={()=> navigate("/User-login")}
              >
                Log In
              </span>
            </p>
            
          </form>
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} theme="light" />
    </>
  );
};

export default UserAuth;