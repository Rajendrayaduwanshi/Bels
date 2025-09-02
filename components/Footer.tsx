// import { Mail, MapPin, Phone } from "lucide-react";
// import React from "react";

// const Footer = () => {
//   return (
//     <>
//       <footer className="bg-gray-900 text-white pt-12">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* About Hospital */}
//             <div>
//               <h3 className="text-xl font-bold mb-4">About Hospital</h3>
//               <div className="border-b-2 border-blue-500 w-12 mb-4"></div>
//               <p className="mb-4">Welcome to The BELS Hospital.</p>
//               <p className="mb-4">
//                 Your surgical Journey and Your health is our priority. We
//                 provide exceptional Surgical Care.
//               </p>
//               <a href="/about" className="text-blue-400 hover:text-blue-300">
//                 Know More →
//               </a>
//             </div>

//             {/* Useful Links */}
//             <div>
//               <h3 className="text-xl font-bold mb-4">Useful Links</h3>
//               <div className="border-b-2 border-blue-500 w-12 mb-4"></div>
//               <ul className="space-y-2">
//                 <li>
//                   <a href="/" className="hover:text-blue-400">
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/about" className="hover:text-blue-400">
//                     About Us
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/departments" className="hover:text-blue-400">
//                     Departments
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/gallery" className="hover:text-blue-400">
//                     Gallery
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/contactUs" className="hover:text-blue-400">
//                     Contact Us
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Contact Details */}
//             <div>
//               <h3 className="text-xl font-bold mb-4">Contact Details</h3>
//               <div className="border-b-2 border-blue-500 w-12 mb-4"></div>
//               <ul className="space-y-4">
//                 <li className="flex gap-3">
//                   <MapPin className="w-6 h-6 text-blue-400 flex-shrink-0" />
//                   <span>
//                     BELS Hospital Road Next to Induse Empire (Phase 3), Bawadiya
//                     Kalan, Bhopal, MP 462026
//                   </span>
//                 </li>
//                 <li className="flex gap-3">
//                   <Mail className="w-6 h-6 text-blue-400 flex-shrink-0" />
//                   <a
//                     href="mailto:belshospital@gmail.com"
//                     className="hover:text-blue-400"
//                   >
//                     belshospital@gmail.com
//                   </a>
//                 </li>
//                 <li className="flex gap-3">
//                   <Phone className="w-6 h-6 text-blue-400 flex-shrink-0" />
//                   <div>
//                     <a
//                       href="tel:+918982301793"
//                       className="hover:text-blue-400 block"
//                     >
//                       +91 8982301793
//                     </a>
//                     <a
//                       href="tel:+919935754963"
//                       className="hover:text-blue-400 block"
//                     >
//                       +91 9935754963
//                     </a>
//                   </div>
//                 </li>
//               </ul>
//             </div>

//             {/* Appointment Form */}
//             <div>
//               <h3 className="text-xl font-bold mb-4">Make an Appointment</h3>
//               <div className="border-b-2 border-blue-500 w-12 mb-4"></div>
//               <form className="space-y-4">
//                 <div>
//                   <input
//                     type="text"
//                     placeholder="Your Name"
//                     className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <input
//                     type="email"
//                     placeholder="Your Email"
//                     className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <textarea
//                     placeholder="Your Message"
//                     className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 h-24"
//                     required
//                   ></textarea>
//                 </div>
//                 <button
//                   type="submit"
//                   className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
//                 >
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>

//           {/* Footer Bottom */}
//           <div className="border-t border-gray-800 mt-12 py-6">
//             <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//               <div className="text-center md:text-left">
//                 <p>
//                   Copyrights © {new Date().getFullYear()} All Rights Reserved,
//                   Powered by BELS Hospital
//                 </p>
//                 <p>
//                   Design & Develop by{" "}
//                   <a
//                     href="https://digirank360.com/"
//                     className="text-blue-400 hover:text-blue-300"
//                   >
//                     Medimize.in
//                   </a>
//                 </p>
//               </div>
//               <div className="flex gap-4">
//                 <a
//                   href="https://www.facebook.com/BELSIVF/"
//                   className="hover:text-blue-400"
//                 >
//                   <i className="fab fa-facebook text-xl"></i>
//                 </a>
//                 <a
//                   href="https://www.instagram.com/bels_bhopal/"
//                   className="hover:text-blue-400"
//                 >
//                   <i className="fab fa-instagram text-xl"></i>
//                 </a>
//                 <a href="/" className="hover:text-blue-400">
//                   <i className="fa-brands fa-x-twitter text-xl"></i>
//                 </a>
//                 <a
//                   href="https://www.youtube.com/@drshraddhaagarwalbhopal4320"
//                   className="hover:text-blue-400"
//                 >
//                   <i className="fab fa-youtube text-xl"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;

import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Hospital */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              About Hospital
            </h3>
            <div className="border-b-2 border-blue-500 w-12 mb-4"></div>
            <p className="mb-4 text-gray-600">Welcome to The BELS Hospital.</p>
            <p className="mb-4 text-gray-600">
              Your surgical Journey and Your health is our priority. We provide
              exceptional Surgical Care.
            </p>
            <a
              href="/about"
              className="text-blue-500 hover:text-blue-600 inline-flex items-center"
            >
              Know More
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Useful Links
            </h3>
            <div className="border-b-2 border-blue-500 w-12 mb-4"></div>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/departments"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  Departments
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/contactUs"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Contact Details
            </h3>
            <div className="border-b-2 border-blue-500 w-12 mb-4"></div>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <span className="text-gray-600">
                  BELS Hospital Road Next to Induse Empire (Phase 3), Bawadiya
                  Kalan, Bhopal, MP 462026
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <a
                  href="mailto:belshospital@gmail.com"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  belshospital@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+918982301793"
                    className="text-gray-600 hover:text-blue-500 transition-colors block"
                  >
                    +91 8982301793
                  </a>
                  <a
                    href="tel:+919935754963"
                    className="text-gray-600 hover:text-blue-500 transition-colors block"
                  >
                    +91 9935754963
                  </a>
                </div>
              </li>
            </ul>
            <a
              href="/contactUs"
              className="inline-block mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 mt-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left text-gray-600">
              <p>
                © {new Date().getFullYear()} BELS Hospital. All Rights Reserved.
              </p>
              <p>
                Designed by{" "}
                <a
                  href="https://medimize.in"
                  className="text-blue-500 hover:text-blue-600"
                >
                  Medimize.in
                </a>
              </p>
            </div>
            <div className="flex gap-6">
              <a
                href="https://www.facebook.com/Drshraddhaa"
                className="text-gray-500 hover:text-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/belshospital_bhopal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="text-gray-500 hover:text-blue-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="/"
                className="text-gray-500 hover:text-blue-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@drshraddhaagarwalbhopal4320?si=aGSxRp5EJ1wIsOPs"
                className="text-gray-500 hover:text-blue-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
