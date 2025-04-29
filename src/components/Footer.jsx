import React from "react";
import { assets } from "../assets/assets";
import { Mail, MapPin, Phone, Ambulance, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_2fr_2fr] gap-14 my-10 mt-40 text-sm">
        {/* Left Part */}
        <div>
          <img className="mb-5 w-25" src={assets.logo_doc} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            DocConnect is a seamless doctor appointment booking system
            that connects patients with top healthcare professionals. 
          </p>
        </div>
        {/* Center Part  */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* Right Part  */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-3 text-gray-600">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> 
              Location: [Your City, Country]
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> 
              Contact: +91 XXXXXXXXXX
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> 
              Email: support@docconnect.com
            </li>
          </ul>
        </div>
      </div>
      <div>
        <hr/>
        <p className="py-3 text-sm text-center font-semibold">Copyright 2025 DocConnect. All rights reserved.</p>
        <p className="flex items-center justify-center gap-1 text-sm text-center mb-3 font-medium">
          Your health, our priority! 
          <Ambulance className="w-4 h-4 inline" /> 
          <Heart className="w-4 h-4 inline text-red-500" />
        </p>
      </div>
    </div>
  );
};

export default Footer;