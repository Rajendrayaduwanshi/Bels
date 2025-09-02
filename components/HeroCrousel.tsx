// import useEmblaCarousel from "embla-carousel-react";
// import { motion } from "framer-motion";
// import { Calendar, Star } from "lucide-react";
// import { useCallback, useEffect, useState } from "react";
// const HeroCarousel = () => {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const scrollTo = useCallback(
//     (index: number) => emblaApi && emblaApi.scrollTo(index),
//     [emblaApi]
//   );
//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);
//   useEffect(() => {
//     if (!emblaApi) return;
//     onSelect();
//     emblaApi.on("select", onSelect);
//     emblaApi.on("reInit", onSelect);
//   }, [emblaApi, onSelect]);
//   const slides = [
//     {
//       title: "Welcome to",
//       subtitle: "The Bels Hospital.",
//       description:
//         "Your health is our priority. We provide exceptional healthcare services with a focus on patient comfort and advanced medical solutions.",
//       image: "/lovable-uploads/90546d8d-c35f-4b00-912a-da68d1bd1592.png",
//     },
//   ];
//   return (
//     <div className="overflow-hidden bg-white" ref={emblaRef}>
//       <div className="flex">
//         {slides.map((slide, index) => (
//           <div key={index} className="flex-[0_0_100%] min-w-0 relative">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-4 md:px-8 py-20">
//               {/* Left Content */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="space-y-8 z-10"
//               >
//                 <div>
//                   <h1 className="text-5xl md:text-6xl font-bold leading-tight">
//                     {slide.title}
//                     <br />
//                     {slide.subtitle}
//                   </h1>
//                   <p className="mt-6 text-gray-600 text-lg">
//                     {slide.description}
//                   </p>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="mt-8 bg-[#40BFFF] text-white px-8 py-4 rounded-full hover:bg-blue-500 transition-colors flex items-center gap-2"
//                   >
//                     <Calendar className="w-5 h-5" />
//                     Book an appointment
//                   </motion.button>
//                 </div>
//                 <div className="space-y-6">
//                   <motion.div
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.4 }}
//                     className="bg-white shadow-lg p-4 rounded-lg inline-block"
//                   >
//                     <h3 className="font-semibold">24/7 Hours Service</h3>
//                     <p className="text-gray-600">+880 17 0401 3240</p>
//                   </motion.div>
//                   <motion.div
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.6 }}
//                     className="bg-white shadow-lg p-4 rounded-lg inline-block"
//                   >
//                     <h3 className="font-semibold">Opening Hours</h3>
//                     <p className="text-gray-600">
//                       Monday-Friday (8:00 - 18:00)
//                     </p>
//                   </motion.div>
//                 </div>
//               </motion.div>
//               {/* Right Content */}
//               <div className="relative">
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.8 }}
//                   className="relative z-10"
//                 >
//                   <img
//                     src={slide.image}
//                     alt="Bels Hospital Doctors"
//                     className="w-full h-auto object-contain"
//                   />
//                 </motion.div>
//                 {/* Stats */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.8 }}
//                   className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg"
//                 >
//                   <div className="flex items-center gap-2">
//                     <span className="text-3xl font-bold">4.98</span>
//                     <div className="flex text-yellow-400">
//                       {[...Array(5)].map((_, i) => (
//                         <Star key={i} className="w-5 h-5 fill-current" />
//                       ))}
//                     </div>
//                   </div>
//                   <p className="text-sm text-gray-600">Based on 587 Reviews</p>
//                 </motion.div>
//                 {/* Achievement Badges */}
//                 <div className="absolute -right-4 lg:right-4 top-1/2 transform translate-y-[-50%] space-y-4">
//                   {[
//                     { value: "98%", label: "Successful Outcomes" },
//                     { value: "95%", label: "Patient Satisfaction" },
//                     { value: "300+", label: "Hospital Beds" },
//                   ].map((achievement, idx) => (
//                     <motion.div
//                       key={idx}
//                       initial={{ opacity: 0, x: 20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 1 + idx * 0.2 }}
//                       className="bg-white p-3 rounded-lg shadow-lg text-center"
//                     >
//                       <p className="font-bold">{achievement.value}</p>
//                       <p className="text-sm text-gray-600">
//                         {achievement.label}
//                       </p>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default HeroCarousel;

// last image design
import React, { useEffect, useState } from "react";
import {
  Heart,
  Clock,
  Phone,
  Star,
  Award,
  Users,
  Building2,
  ArrowRight,
  Shield,
  Activity,
  Stethoscope,
} from "lucide-react";

function HeroCrousel() {
  const images = [
    "/gallery/gallery-1.jpeg",
    "/gallery/gallery-2.jpeg",
    "/gallery/gallery-3.jpeg",
    "/gallery/gallery-4.jpeg",
    "/gallery/gallery-5.jpeg",
    "/gallery/gallery-6.jpeg",
    "/gallery/gallery-7.jpeg",
    "/gallery/gallery-8.jpeg",
    "/gallery/gallery-9.jpeg",
    // "/gallery/gallery-10.jpeg",
    "/gallery/gallery-11.jpeg",
    // "/gallery/gallery-12.jpeg",
    // "/gallery/gallery-13.jpeg",
    "/gallery/gallery-14.jpeg",
    "/gallery/gallery-15.jpeg",
    "/gallery/gallery-16.jpeg",
    // "/gallery/gallery-17.jpeg",
    "/gallery/gallery-18.jpeg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply animate-pulse"></div>
        <div className="absolute top-20 -left-20 w-72 h-72 bg-indigo-200/30 rounded-full mix-blend-multiply animate-pulse delay-300"></div>
        <div className="absolute -bottom-40 right-20 w-80 h-80 bg-purple-200/30 rounded-full mix-blend-multiply animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative">
          {/* Top Badge */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <Heart className="h-5 w-5 text-blue-600 animate-pulse" />
              <span className="text-blue-900 font-semibold">
                Transforming Healthcare for Tomorrow
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-12 z-10">
              <div className="space-y-6">
                <h2 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                  Welcome to
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mt-2">
                    BELS Hospital
                  </span>
                </h2>
                <h1 className="text-md leading-reaxed max-w-xl"><strong className="text-red-500">Best Gyne Doctor, Endoscopy Hospital, Laser Surgery & IVF Centre in Bhopal</strong></h1>
                <p className="text-md text-gray-600 leading-relaxed max-w-xl">
                  <strong>
                    {" "}
                    Bhopal Endoscopy & Laproscopic Surgery Hospital
                  </strong>
                  <br />
                  <strong>
                    {" "}
                    IVF, Maternity, Endoscopy, LASER & Laparoscopy Surgery
                  </strong>
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <button
                  onClick={() => (window.location.href = "/contactUs")}
                  className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center space-x-3"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => (window.location.href = "/contactUs")}
                  className="group bg-white/80 backdrop-blur-sm text-gray-800 px-8 py-4 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 inline-flex items-center justify-center space-x-3"
                >
                  <Phone className="h-5 w-5 text-blue-600 group-hover:rotate-12 transition-transform" />
                  <span>Emergency Care</span>
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-8">
                {[
                  { icon: Shield, value: "96%", label: "Recovery Rate" },
                  { icon: Activity, value: "24/7", label: "Care Available" },
                  { icon: Stethoscope, value: "10+", label: "Specialists" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="group bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <stat.icon className="h-6 w-6 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-md   sm:text-2xl  font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm  text-gray-600 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div className="relative z-10">
              <div className="relative group">
                {/* Main Image with Gradient Overlay */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-300 group-hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent z-10"></div>
                  <img
                    src={images[currentImageIndex]}
                    alt="Best Endoscopy Hospital in Bhopal | Best IVF Centre in Bhopal | Best Laser Surgery in Bhopal | Best Gyne Doctor in Bhopal"
                    className="rounded-2xl object-fill  h-[700px] w-full transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Floating Achievement Cards */}
                <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-blue-50">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <Award className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                        4.8/5
                      </div>
                      <div className="text-gray-600">Patient Satisfaction</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-8 -right-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-blue-50">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <Building2 className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                        10+
                      </div>
                      <div className="text-gray-600">Advanced Facilities</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCrousel;

//second image design

// import React from "react";
// import {
//   Heart,
//   Clock,
//   Phone,
//   Star,
//   Award,
//   Users,
//   Building2,
//   ArrowRight,
// } from "lucide-react";

// function HeroCrousel() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br mt-8 from-blue-50 via-white to-indigo-50">
//       {/* Hero Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="relative">
//           {/* Decorative Elements */}
//           <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
//           <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-100 rounded-full opacity-50 blur-3xl"></div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
//             {/* Left Content */}
//             <div className="space-y-10 z-10">
//               <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
//                 <Heart className="h-5 w-5 text-blue-600" />
//                 <span className="text-blue-600 font-medium">
//                   Leading Healthcare Provider
//                 </span>
//               </div>

//               <div>
//                 <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
//                   Your Health,
//                   <span className="block text-blue-600 mt-2">Our Priority</span>
//                 </h1>
//                 <p className="mt-6 text-xl text-gray-600 leading-relaxed">
//                   Experience world-class healthcare with compassionate service.
//                   Our team of expert doctors is dedicated to your well-being.
//                 </p>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-6">
//                 <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105 inline-flex items-center justify-center space-x-3 shadow-lg shadow-blue-200">
//                   <span>Book Appointment</span>
//                   <ArrowRight className="h-5 w-5" />
//                 </button>
//                 <button className="bg-white text-gray-800 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all border-2 border-gray-100 inline-flex items-center justify-center space-x-3">
//                   <Phone className="h-5 w-5 text-blue-600" />
//                   <span>Emergency: 911</span>
//                 </button>
//               </div>

//               <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
//                 <div>
//                   <div className="text-3xl font-bold text-blue-600">98%</div>
//                   <div className="text-gray-600 mt-1">Recovery Rate</div>
//                 </div>
//                 <div>
//                   <div className="text-3xl font-bold text-blue-600">24/7</div>
//                   <div className="text-gray-600 mt-1">Available</div>
//                 </div>
//                 <div>
//                   <div className="text-3xl font-bold text-blue-600">15+</div>
//                   <div className="text-gray-600 mt-1">Specialists</div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Content */}
//             <div className="relative z-10">
//               <div className="relative">
//                 <img
//                   src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//                   alt="Medical Team"
//                   className="rounded-2xl shadow-2xl object-cover h-[600px] w-full"
//                 />

//                 {/* Floating Stats Cards */}
//                 <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
//                   <div className="flex items-center space-x-4">
//                     <div className="bg-blue-50 p-3 rounded-lg">
//                       <Award className="h-6 w-6 text-blue-600" />
//                     </div>
//                     <div>
//                       <div className="text-2xl font-bold text-gray-900">
//                         4.9/5
//                       </div>
//                       <div className="text-gray-600">Patient Rating</div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
//                   <div className="flex items-center space-x-4">
//                     <div className="bg-blue-50 p-3 rounded-lg">
//                       <Building2 className="h-6 w-6 text-blue-600" />
//                     </div>
//                     <div>
//                       <div className="text-2xl font-bold text-gray-900">
//                         300+
//                       </div>
//                       <div className="text-gray-600">Hospital Beds</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroCrousel;
