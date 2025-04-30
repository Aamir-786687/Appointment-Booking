import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { Mail, MapPin, Phone, Ambulance, Heart } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="md:mx-10 mt-20 border-t border-gray-300 pt-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_2fr_2fr] gap-14 text-sm">
        {/* Left Part */}
        <div>
          <img className="mb-10 w-20" src={assets.logo} alt="Doc Logo" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            DocConnect is a seamless doctor appointment booking system
            that connects patients with top healthcare professionals.
          </p>
        </div>

        {/* Center Part */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="cursor-pointer" onClick={() => navigate("/")}>Home</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Contact Us</li>
            <li className="cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Right Part */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-3 text-gray-600">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1" />
              <span>
                Location: Incubex HSR21, 5th Main Rd, <br />
                HSR Layout, Bengaluru, Karnataka - 560068
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Contact: +91 123-456-789
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email: masai@masai.com
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <hr />
        <p className="py-3 text-sm text-center font-semibold">
          © 2025 DocConnect. All rights reserved.
        </p>
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
