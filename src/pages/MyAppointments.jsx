import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const MyAppointments = () => {
  const { user, appointments, cancelAppointment } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCancelAppointment = async (appointmentId) => {
    try {
      setLoading(true);
      setError(null);
      const result = await cancelAppointment(appointmentId);
      if (!result.success) {
        setError(result.error);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-text mb-4">Please sign in to view your appointments</h2>
          <p className="text-text-light">You need to be signed in to access this page.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-text mb-6">My Appointments</h1>

        {error && (
          <div className="bg-red-900/20 text-red-400 p-4 rounded-lg flex items-center gap-2 mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </div>
        )}

        {appointments.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-text-light">You don't have any appointments yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="bg-surface rounded-xl shadow-lg p-6"
              >
                <div className="flex items-start gap-6">
                  <img
                    src={appointment.doctorInfo.image}
                    alt={appointment.doctorInfo.name}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-xl font-semibold text-text">
                          {appointment.doctorInfo.name}
                        </h2>
                        <p className="text-text-light mt-1">
                          {appointment.doctorInfo.speciality}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          appointment.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : appointment.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {appointment.status.charAt(0).toUpperCase() +
                          appointment.status.slice(1)}
                      </span>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-text-light">Date</p>
                        <p className="text-text">
                          {new Date(
                            appointment.date.split("_").reverse().join("-")
                          ).toLocaleDateString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-text-light">Time</p>
                        <p className="text-text">{appointment.time}</p>
                      </div>
                    </div>

                    {appointment.status === "pending" && (
                      <button
                        onClick={() => handleCancelAppointment(appointment.id)}
                        disabled={loading}
                        className="mt-4 text-red-600 hover:text-red-700 text-sm font-medium"
                      >
                        Cancel Appointment
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAppointments;
