import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Doctors from "./pages/Doctors";
import Footer from "./components/Footer";
import Appointments from "./pages/Appointments";
import UserSignup from "./pages/UserSignup";
import UserLogin from "./pages/UserLogin";
import MyCalendar from "./pages/Calender";
import MyAppointment from "./pages/MyAppointment"; // ✅ added

function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/appointment/:docId" element={<Appointments />} />
        <Route path="/User-register" element={<UserSignup />} />
        <Route path="/User-login" element={<UserLogin />} />
        <Route path="/calender" element={<MyCalendar />} />
        <Route path="/my-appointment" element={<MyAppointment />} /> {/* ✅ added */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
