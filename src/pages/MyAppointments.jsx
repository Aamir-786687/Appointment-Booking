import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/AppContext"
import { useNavigate } from "react-router-dom"
import { Calendar, Clock, Trash2 } from "lucide-react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const MyAppointments = () => {
  const { user, isAuth } = useContext(AppContext)
  const [appointments, setAppointments] = useState([])
  const [upcomingAppointments, setUpcomingAppointments] = useState([])
  const [pastAppointments, setPastAppointments] = useState([])
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [appointmentToDelete, setAppointmentToDelete] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) {
      return
    }

    loadAppointments()
  }, [isAuth, user])

  const loadAppointments = () => {
    // Retrieve appointments from localStorage
    const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || []

    // Filter appointments for the current user
    const userAppointments = storedAppointments.filter((appointment) => appointment.userName === user?.userName)

    setAppointments(userAppointments)

    // Separate upcoming and past appointments
    const currentDate = new Date()

    const upcoming = []
    const past = []

    userAppointments.forEach((appointment, index) => {
      const appointmentDate = new Date(appointment.appointmentDate)
      const appointmentTime = appointment.appointmentTime

      // Create a date object with both date and time
      const [hours, minutes] = appointmentTime.split(":")
      appointmentDate.setHours(Number.parseInt(hours), Number.parseInt(minutes), 0, 0)

      // Add unique ID for each appointment based on index if not present
      const appointmentWithId = {
        ...appointment,
        id: appointment.id || `appointment-${index}-${Date.now()}`,
        fullDate: appointmentDate,
      }

      if (appointmentDate > currentDate) {
        upcoming.push(appointmentWithId)
      } else {
        past.push(appointmentWithId)
      }
    })

    // Sort upcoming appointments by date (closest first)
    upcoming.sort((a, b) => a.fullDate - b.fullDate)

    // Sort past appointments by date (most recent first)
    past.sort((a, b) => b.fullDate - a.fullDate)

    setUpcomingAppointments(upcoming)
    setPastAppointments(past)
  }

  const handleDeleteClick = (appointment) => {
    setAppointmentToDelete(appointment)
    setShowConfirmModal(true)
  }

  const confirmDelete = () => {
    if (!appointmentToDelete) return

    // Get all appointments
    const allAppointments = JSON.parse(localStorage.getItem("appointments")) || []

    // Find the appointment to delete
    const updatedAppointments = allAppointments.filter((appointment) => {
      // Compare relevant properties since the stored appointments might not have IDs
      return !(
        appointment.doctorName === appointmentToDelete.doctorName &&
        appointment.userName === appointmentToDelete.userName &&
        appointment.appointmentDate === appointmentToDelete.appointmentDate &&
        appointment.appointmentTime === appointmentToDelete.appointmentTime
      )
    })

    // Save updated appointments back to localStorage
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments))

    // Reload appointments to update the UI
    loadAppointments()

    // Close modal and show success message
    setShowConfirmModal(false)
    setAppointmentToDelete(null)
    toast.success("Appointment cancelled successfully")
  }

  const cancelDelete = () => {
    setShowConfirmModal(false)
    setAppointmentToDelete(null)
  }

  if (!isAuth) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <div className="text-center max-w-md p-8 rounded-lg bg-gray-50 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Please sign in</h2>
          <p className="text-gray-600 mb-6">You need to be signed in to view your appointments</p>
          <button
            onClick={() => navigate("/user-login")}
            className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
          >
            Sign In
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[60vh] py-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">My Appointments</h1>

      {appointments.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-medium text-gray-700 mb-2">No appointments found</h3>
          <p className="text-gray-500 mb-6">You haven't booked any appointments yet</p>
          <button
            onClick={() => navigate("/doctors")}
            className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
          >
            Find a Doctor
          </button>
        </div>
      ) : (
        <div className="space-y-10">
          {/* Upcoming Appointments Section */}
          <div>
            <h2 className="text-2xl font-medium text-gray-800 mb-4">Upcoming Appointments</h2>
            {upcomingAppointments.length === 0 ? (
              <p className="text-gray-500 py-4">No upcoming appointments</p>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {upcomingAppointments.map((appointment, index) => (
                  <div
                    key={index}
                    className="bg-white border border-blue-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="bg-blue-50 p-4 border-b border-blue-200">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-lg text-blue-900">{appointment.doctorName}</h3>
                          <div className="flex items-center gap-2 text-sm mt-1 text-green-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Confirmed</span>
                          </div>
                        </div>
                        <button
                          onClick={() => handleDeleteClick(appointment)}
                          className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition-colors"
                          aria-label="Cancel appointment"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex items-start gap-2">
                        <Calendar className="w-5 h-5 text-gray-500 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-500">Date</p>
                          <p className="font-medium">{appointment.appointmentDate}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="w-5 h-5 text-gray-500 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-500">Time</p>
                          <p className="font-medium">{appointment.appointmentTime}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Past Appointments Section */}
          {pastAppointments.length > 0 && (
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-4">Appointment History</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {pastAppointments.map((appointment, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm opacity-80"
                  >
                    <div className="bg-gray-50 p-4 border-b border-gray-200">
                      <h3 className="font-medium text-lg text-gray-800">{appointment.doctorName}</h3>
                      <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span>Completed</span>
                      </div>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex items-start gap-2">
                        <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-400">Date</p>
                          <p className="font-medium text-gray-600">{appointment.appointmentDate}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-400">Time</p>
                          <p className="font-medium text-gray-600">{appointment.appointmentTime}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Cancel Appointment</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to cancel your appointment with {appointmentToDelete?.doctorName} on{" "}
              {appointmentToDelete?.appointmentDate} at {appointmentToDelete?.appointmentTime}?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                No, Keep It
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
              >
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} />
    </div>
  )
}

export default MyAppointments
