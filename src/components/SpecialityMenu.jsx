import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div
      id="speciality"
      className="py-16 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-primary/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Specialities
          </div>
          <h2 className="text-3xl font-bold text-text mb-4">Find by Speciality</h2>
          <p className="text-text-light max-w-2xl mx-auto text-lg">
            Simply browse through our extensive list of trusted doctors, schedule
            your appointment hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {specialityData.map((item, index) => (
            <Link
              to={`/doctors/${item.speciality}`}
              onClick={() => scrollTo(0, 0)}
              className="group"
              key={index}
            >
              <div className="bg-surface rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 transform group-hover:rotate-6">
                    <img
                      className="w-10 h-10 object-contain transform group-hover:scale-110 transition-transform duration-300"
                      src={item.image}
                      alt={item.speciality}
                    />
                  </div>
                  <h3 className="text-text font-medium group-hover:text-primary transition-colors duration-300">
                    {item.speciality}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialityMenu;
