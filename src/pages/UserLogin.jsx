import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "../context/AppContext";


const UserLogin = () => {

   const [userEmail, setUserEmail] = useState("");
   const [userPassword, setUserPassword] = useState("");
   const navigate = useNavigate();


  const {user, setISAuth} = useContext(AppContext)


   const handleSubmit = (e) => {
      e.preventDefault();
      // const user = JSON.parse(localStorage.getItem("user"))
      
      console.log(user)
      if(userEmail !== user.userEmail){
         toast.error("Email Not Found")
         return;
      }
      if(userPassword !== user.userPassword){
         toast.error("password Not match")
         return;
      }

      if(userEmail === user.userEmail && userPassword === user.userPassword){
         toast.success("Login successful!")
       
        setTimeout(()=>{
         setISAuth(true)
         navigate('/')
        },2000)
         return;
      }


   }

   return (
      <>
         <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
               <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                  Hello Welcome Back
               </h1>
               <form onSubmit={handleSubmit} className="space-y-4">




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
                     Log In
                  </button>

                  <p className="text-center text-gray-600 mt-4">
                     Not Account
                     <span onClick={() => navigate("/User-register")} className="text-blue-500 cursor-pointer"> Sign Up</span>


                  </p>
                  <h1 className="text-center text-gray-600 mt-4" onClick={() => navigate("/Doctor-register")}>If youre Doctor <span className="text-blue-500 cursor-pointer">Register Here</span></h1>
               </form>
            </div>
         </div>

         <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} theme="light" />
      </>
   );
};

export default UserLogin;