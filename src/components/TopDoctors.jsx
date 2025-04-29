import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="py-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-primary/5 animate-fade-in"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Featured Doctors
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Top Doctors to Book
          </h2>
          <p className="text-text-light max-w-2xl mx-auto text-lg">
            Simply browse through our extensive list of trusted doctors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {doctors.slice(0, 8).map((item, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                window.scrollTo(0, 0);
              }}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-surface rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 transform hover:-translate-y-2">
                <div className="aspect-w-4 aspect-h-3 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="absolute top-4 right-4 flex items-center gap-2 bg-success/90 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm z-20">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    Available
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-text group-hover:text-primary transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-text-light mt-2">{item.speciality}</p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-text-light">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Available Today</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-text-light">4.8</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <button
            onClick={() => {
              navigate("/doctors");
              scrollTo(0, 0);
            }}
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-glow transform hover:-translate-y-1"
          >
            View All Doctors
            <svg
              className="w-5 h-5 animate-bounce-slow"
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
        </div>
      </div>
    </div>
  );
};

export default TopDoctors;
