import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RelatedDoctor from "../components/RelatedDoctor";

const Appointments = () => {
  // const navigate = useNavigate();
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots,setDocSlots] =  useState([])
  const [slotIndex, setSlotIndex] = useState(0);
  const [appointmentTime, setAppointmentTime] = useState("");
 
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailable = () => {
    setDocSlots([])

    let today = new Date()

    for(let i = 0 ; i < 7 ; i++){
      //Getting date witj index

      let currDate = new Date(today)
      currDate.setDate(today.getDate()+i)

      // set end time od the date with index

      let endTime = new Date()
      endTime.setDate(today.getDate()+i)
      endTime.setHours(21,0,0,0)


      // setting hours

      if (today.getDate() === currDate.getDate()){
        currDate.setHours(currDate.getHours() > 10 ? currDate.getHours()+1 : 10)
        currDate.setMinutes(currDate.getMinutes() > 30 ? 30 : 0)
      }
      else{
        currDate.setHours(10)
        currDate.setMinutes(0)
      }
      let timeSlots = []
      while(currDate < endTime){
        let formattedTime = currDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
      
        timeSlots.push({
          datetime : new Date(currDate),
          time : formattedTime
        })


currDate.setMinutes(currDate.getMinutes() + 30)
      }
      
      setDocSlots(prev => ([...prev , timeSlots]))
    }
  };


  const handleBookAppointment = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
  
    if (!loggedInUser) {
      toast.error("Please log in to book an appointment.");
      return;
    }
  
    if (!appointmentTime) {
      toast.error("Please select an appointment time.");
      return;
    }
  
    const appointmentDetails = {
      doctorName: docInfo.name,
      userName: loggedInUser.userName,
      appointmentDate: docSlots[slotIndex][0]?.datetime.toDateString(),
      appointmentTime: appointmentTime,
    };
  
    // Retrieve existing appointments or initialize an empty array
    const existingAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
  
    // Add new appointment to the array
    localStorage.setItem("appointments", JSON.stringify([...existingAppointments, appointmentDetails]));
  
    toast.success("Appointment booked successfully!");
    alert("Appointment Booked");
    console.log("Appointment Booked:", appointmentDetails);
  };
  
  

  useEffect(() => {
    fetchDocInfo();
  }, [docId, doctors]);

  useEffect(() => {
    getAvailable();
  }, [docInfo]);

  useEffect(()=>{
    console.log(docSlots)
  },[docSlots])

  return (
    docInfo && (
      <div className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img className="bg-orange-500 w-full sm:max-w-72 rounded-2xl" src={docInfo.image} alt="" />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-gray-100 mx-2 sm:mx-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-blue-900">
              {docInfo.name} <img className="w-4" src={assets.verified_icon} alt="verified" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-700">
              <p>{docInfo.specialization} - {docInfo.degree}</p>
              <button className="py-0.5 px-2 border text-xs rounded-full">{docInfo.experience}</button>
            </div>
            <p className="text-blue-800 font-medium mt-4">About:</p>
            <p className="text-black-400 font-medium">{docInfo.about}</p>
            <p className="text-orange-400 font-medium mt-4">
              Appointment Fee: {currencySymbol} {docInfo.fees}
            </p>
          </div>
        </div>

      {/* Bookings SLot   */}

      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
        <p>Booking Slotss...</p>
        <div className="flex gap-3 items-center w-full overscroll-x-scroll mt-4">
          {
            docSlots.length && docSlots.map((item,index)=>(
              <div onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? "bg-orange-500 text-white" : "border border-gray-200"}`} key={index}>
                <p>{item[0]  && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>
        <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
          { docSlots.length && docSlots[slotIndex].map((item,index)=>(
            <p onClick={()=>setAppointmentTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === appointmentTime ? "bg-orange-500 text-white" : "border border-gray-200"}`} key={index}>
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>
        <button 
  className="bg-orange-500 text-white text-sm font-light px-14 py-3 rounded-full my-6 cursor-pointer"
  onClick={handleBookAppointment}
>
  Book an Appointment
</button>

      </div>
      
       

        {/* <div className="flex flex-col items-left justify-center mt-10">
          <div className="w-full max-w-md bg-white rounded-lg border p-6">
            <h2 className="text-2xl font-bold text-orange-500 mb-4 text-center">Book Your Appointment</h2>
            <form className="flex flex-col">
            
              <button
                type="submit"
                onClick={()=>navigate("/service")}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-6 rounded-md mt-4 hover:from-orange-600 hover:to-red-600 transition duration-200"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div> */}

        <RelatedDoctor docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointments;