import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Banner = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="relative bg-gradient-to-r from-primary/5 to-secondary/5 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid-primary/10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Book Your Appointment
            </div>
            <h2 className="text-4xl font-bold text-text mb-6 leading-tight">
              Find Your Perfect Doctor and Book an Appointment Today
            </h2>
            <p className="text-text-light text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Browse through our extensive list of trusted doctors and book your appointment with just a few clicks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => {
                  navigate("/doctors");
                  window.scrollTo(0, 0);
                }}
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-glow"
              >
                Find Doctors
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              <button
                onClick={() => {
                  navigate("/appointment");
                  window.scrollTo(0, 0);
                }}
                className="inline-flex items-center justify-center gap-2 bg-surface text-primary px-8 py-4 rounded-full text-lg font-medium hover:bg-surface-hover transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book Appointment
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-surface rounded-3xl p-6 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                {doctors.slice(0, 4).map((doctor, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="relative overflow-hidden rounded-2xl">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-32 object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-white text-sm font-medium truncate">
                          {doctor.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;