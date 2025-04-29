import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img className="h-8 w-auto" src={assets.logo} alt="Logo" />
            <p className="text-text-light leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-text mb-6">COMPANY</h3>
            <ul className="space-y-4">
              <li>
                <a href="/" className="text-text-light hover:text-primary transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-text-light hover:text-primary transition-colors duration-300">
                  About us
                </a>
              </li>
              <li>
                <a href="/doctors" className="text-text-light hover:text-primary transition-colors duration-300">
                  Doctors
                </a>
              </li>
              <li>
                <a href="/contact" className="text-text-light hover:text-primary transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-text mb-6">GET IN TOUCH</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-text-light">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +1-212-456-7890
              </li>
              <li className="flex items-center gap-3 text-text-light">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                khairwalankit7@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-text-light text-sm">
            Copyright 2024 @ Prescripto.com - All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
