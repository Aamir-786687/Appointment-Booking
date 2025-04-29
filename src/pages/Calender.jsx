import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const MyCalendar = () => {
  const localizer = momentLocalizer(moment);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];

    // Convert appointments to the format required by react-big-calendar
    const formattedAppointments = storedAppointments.map((appointment) => ({
      title: `${appointment.doctorName} - ${appointment.appointmentTime}`,
      start: new Date(appointment.appointmentDate + " " + appointment.appointmentTime),
      end: new Date(
        new Date(appointment.appointmentDate + " " + appointment.appointmentTime).getTime() + 30 * 60 * 1000
      ), // 30 minutes duration
    }));

    setAppointments(formattedAppointments);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Your Appointments</h2>
      <Calendar
        localizer={localizer}
        events={appointments}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
      />
    </div>
  );
};

export default MyCalendar;