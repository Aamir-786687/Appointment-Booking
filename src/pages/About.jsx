import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh bg-fixed opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h1 className="font-display text-4xl font-bold text-surface-900 mb-6">
            About <span className="text-primary-600">Prescripto</span>
          </h1>
          <p className="text-lg text-surface-600 leading-relaxed">
            Revolutionizing healthcare access through technology
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-12 mb-20">
          {/* Image Section */}
          <div className="md:w-1/2 animate-slide-up">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl opacity-20 blur-2xl transition duration-200 group-hover:opacity-40"></div>
              <div className="relative">
                <img
                  className="w-full rounded-3xl shadow-soft-2xl object-cover h-[400px]"
                  src={assets.about_image}
                  alt="About Prescripto"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-surface-900/40 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-semibold text-surface-900">
                Your Trusted Healthcare Partner
              </h2>
              <p className="text-surface-600 leading-relaxed">
                Welcome to Prescripto, your trusted partner in managing your
                healthcare needs conveniently and efficiently. At Prescripto, we
                understand the challenges individuals face when it comes to
                scheduling doctor appointments and managing their health records.
              </p>
              <p className="text-surface-600 leading-relaxed">
                Prescripto is committed to excellence in healthcare technology. We
                continuously strive to enhance our platform, integrating the latest
                advancements to improve user experience and deliver superior
                service.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-primary-600">
                Our Vision
              </h3>
              <p className="text-surface-600 leading-relaxed">
                Our vision at Prescripto is to create a seamless healthcare
                experience for every user. We aim to bridge the gap between patients
                and healthcare providers, making it easier for you to access the
                care you need, when you need it.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '400ms' }}>
            <h2 className="font-display text-3xl font-bold text-surface-900 mb-4">
              Why Choose <span className="text-primary-600">Prescripto</span>
            </h2>
            <p className="text-surface-600">
              Experience healthcare scheduling reimagined
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: '600ms' }}>
            {/* Feature Cards */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-soft-xl transition-all duration-300 hover:shadow-soft-2xl hover:-translate-y-1">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 to-primary-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-5"></div>
              <div className="relative space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-surface-900">
                  Efficiency
                </h3>
                <p className="text-surface-600">
                  Streamlined appointment scheduling that fits into your busy
                  lifestyle.
                </p>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 shadow-soft-xl transition-all duration-300 hover:shadow-soft-2xl hover:-translate-y-1">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 to-primary-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-5"></div>
              <div className="relative space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-surface-900">
                  Convenience
                </h3>
                <p className="text-surface-600">
                  Access to a network of trusted healthcare professionals in your
                  area.
                </p>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 shadow-soft-xl transition-all duration-300 hover:shadow-soft-2xl hover:-translate-y-1">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 to-primary-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-5"></div>
              <div className="relative space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-surface-900">
                  Personalization
                </h3>
                <p className="text-surface-600">
                  Tailored recommendations and reminders to help you stay on top of
                  your health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
