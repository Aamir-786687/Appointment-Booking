import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gradient-start to-gradient-end rounded-3xl shadow-xl">
      <div className="absolute inset-0 bg-grid-white/10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="md:w-1/2 py-12 md:py-16 lg:py-20 text-center md:text-left">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium">
                Trusted by 10,000+ Patients
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Book Appointment
                <br />
                With Trusted Doctors
              </h1>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex items-center gap-2">
                  <img
                    className="w-24 h-24 rounded-full ring-4 ring-white/20 animate-float"
                    src={assets.group_profiles}
                    alt="Trusted Doctors"
                  />
                </div>
                <p className="text-white/90 text-lg max-w-md">
                  Simply browse through our extensive list of trusted doctors and
                  schedule your appointment hassle-free.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#speciality"
                  className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full text-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-glow"
                >
                  Book appointment
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
                </a>
                <a
                  href="#doctors"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-all duration-300"
                >
                  View Doctors
                </a>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 relative mt-8 md:mt-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl"></div>
              <img
                className="w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 relative"
                src={assets.header_img}
                alt="Medical Professionals"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
