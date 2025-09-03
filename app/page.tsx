// "use client";
// import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
// import { useEffect, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { AnimatePresence, motion } from "framer-motion";

// const Home = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       image: "/images/projects/G1.jpg",
//       title: "Welcome to BELS",
//       subtitle: "Bhopal Surgical & Maternity Hospital",
//       description:
//         "Where care meets compassion. We're here to serve you with the highest standard of healthcare excellence.",
//     },
//     {
//       image: "/images/projects/G2.jpg",
//       title: "Advanced Medical Facilities",
//       subtitle: "Cutting-Edge Technology",
//       description:
//         "Equipped with modern medical technology to provide world-class healthcare services.",
//     },
//     {
//       image: "/images/projects/G3.jpg",
//       title: "Expert Medical Team",
//       subtitle: "Professional & Caring Staff",
//       description:
//         "Our dedicated team of professionals ensures the best treatment and patient care.",
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 4000); // Change slide every 4 seconds

//     return () => clearInterval(interval);
//   }, [slides.length]);
//   // Dummy data for departments
//   const departments = [
//     {
//       name: "Radiology & Pathology",
//       icon: "/images/icon/radiology.png",
//       link: "radiology_and_pathology",
//     },
//     {
//       name: "Critical Care",
//       icon: "/images/icon/critical.png",
//       link: "critical_care",
//     },
//     {
//       name: "Radiology & Pathology",
//       icon: "/images/icon/radiology.png",
//       link: "radiology_and_pathology",
//     },
//     {
//       name: "Critical Care",
//       icon: "/images/icon/critical.png",
//       link: "critical_care",
//     },
//     {
//       name: "Radiology & Pathology",
//       icon: "/images/icon/radiology.png",
//       link: "radiology_and_pathology",
//     },
//     {
//       name: "Critical Care",
//       icon: "/images/icon/critical.png",
//       link: "critical_care",
//     },
//     {
//       name: "Radiology & Pathology",
//       icon: "/images/icon/radiology.png",
//       link: "radiology_and_pathology",
//     },
//     {
//       name: "Critical Care",
//       icon: "/images/icon/critical.png",
//       link: "critical_care",
//     },
//     {
//       name: "Critical Care",
//       icon: "/images/icon/critical.png",
//       link: "critical_care",
//     },
//     {
//       name: "Radiology & Pathology",
//       icon: "/images/icon/radiology.png",
//       link: "radiology_and_pathology",
//     },
//     {
//       name: "Critical Care",
//       icon: "/images/icon/critical.png",
//       link: "critical_care",
//     },
//     {
//       name: "Radiology & Pathology",
//       icon: "/images/icon/radiology.png",
//       link: "radiology_and_pathology",
//     },
//   ];

//   // Dummy data for testimonials
//   const testimonials = [
//     {
//       name: "John Doe",
//       location: "New York, USA",
//       text: "This service is amazing! Highly recommended.",
//       image: "/images/testimonial/1.png",
//     },
//     {
//       name: "Jane Smith",
//       location: "London, UK",
//       text: "I had a great experience with this product!",
//       image: "/images/testimonial/2.png",
//     },
//     {
//       name: "Alice Johnson",
//       location: "Sydney, Australia",
//       text: "A game-changer in the industry.",
//       image: "/images/testimonial/3.png",
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1200,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3500,
//     pauseOnHover: false,
//     arrows: false,
//   };

//   const [cardsPerPage, setCardsPerPage] = useState(2); // Default to mobile

//   // Detect screen size changes
//   useEffect(() => {
//     const updateCardsPerPage = () => {
//       if (window.innerWidth >= 1024) {
//         setCardsPerPage(3); // Laptop: 3 cards
//       } else {
//         setCardsPerPage(2); // Mobile: 2 cards
//       }
//     };

//     updateCardsPerPage(); // Set initially
//     window.addEventListener("resize", updateCardsPerPage);

//     return () => window.removeEventListener("resize", updateCardsPerPage);
//   }, []);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex(
//         (prevIndex) => (prevIndex + cardsPerPage) % departments.length
//       );
//     }, 1500);

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [cardsPerPage, departments.length]);
//   const handleNext = () => {
//     if (currentIndex + cardsPerPage < departments.length) {
//       setCurrentIndex(currentIndex + cardsPerPage);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex - cardsPerPage >= 0) {
//       setCurrentIndex(currentIndex - cardsPerPage);
//     }
//   };
//   return (
//     <div className="font-sans">
//       {/* <Header /> */}

//       {/* Hero Slider Section */}
//       <section className="relative h-[650px] overflow-hidden">
//         <div className="absolute inset-0 bg-gray-900 opacity-75"></div>

//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentSlide}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -50 }}
//             transition={{ duration: 0.8, ease: "easeInOut" }}
//             className="absolute inset-0"
//           >
//             <img
//               src={slides[currentSlide].image}
//               alt={slides[currentSlide].title}
//               className="w-full h-full object-cover object-center"
//             />
//             <div className="absolute inset-0 flex items-center text-white px-8 md:px-20">
//               <div className="max-w-4xl">
//                 <h1 className="text-4xl md:text-6xl font-bold mb-4">
//                   {slides[currentSlide].title}
//                 </h1>
//                 <p className="text-xl md:text-2xl mb-6">
//                   {slides[currentSlide].subtitle}
//                 </p>
//                 <p className="text-lg mb-8">
//                   {slides[currentSlide].description}
//                 </p>
//                 <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
//                   View Details
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Slider Controls */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
//           {slides.map((_, i) => (
//             <button
//               key={i}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 currentSlide === i ? "bg-blue-600 scale-125" : "bg-white"
//               }`}
//               onClick={() => setCurrentSlide(i)}
//             />
//           ))}
//         </div>
//       </section>
//       {/* Welcome Section */}
//       <section className="py-20 px-4 md:px-8 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex flex-col md:flex-row gap-12">
//             <div className="md:w-1/2">
//               <img
//                 src="/images/resources/bels hospital image.jpg"
//                 alt="Hospital"
//                 className="rounded-lg shadow-lg h-[450px] object-cover w-full"
//               />
//             </div>
//             <div className="md:w-1/2">
//               <h2 className="text-3xl font-bold mb-6">
//                 Welcome to The BELS Hospital
//               </h2>
//               <p className="text-gray-600 mb-8">
//                 Your surgical Journey and Your health is our priority. We
//                 provide exceptional Surgical Care...
//               </p>

//               <div className="space-y-8">
//                 <div className="flex items-start gap-4">
//                   <div className="bg-blue-100 p-4 rounded-full">
//                     <span className="text-blue-600 text-2xl">🏥</span>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
//                     <p className="text-gray-600">
//                       Patient health is of paramount importance to us...
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="bg-blue-100 p-4 rounded-full">
//                     <span className="text-blue-600 text-2xl">👁️</span>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
//                     <p className="text-gray-600">
//                       A seamless blend of surgical excellence...
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
//                 Our Departments
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Directors Section */}
//       <section className="py-20 px-4 md:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12">Directors</h2>

//           {/* Dr. Atul Agarwal */}
//           <div className="flex flex-col md:flex-row gap-12 mb-20">
//             <div className="md:w-1/2">
//               <img
//                 src="/images/Dr-Atul-Agarwal.jpg"
//                 alt="Dr. Atul Agarwal"
//                 className="rounded-lg shadow-lg w-full h-96 object-cover"
//               />
//             </div>
//             <div className="md:w-1/2">
//               <h3 className="text-2xl font-bold mb-4">
//                 Dr. Atul Kumar Agarwal
//               </h3>
//               <p className="text-gray-600 mb-6">
//                 Dr. Atul Kumar Agarwal is a highly accomplished Consultant
//                 Laparoscopic & GI Surgeon...
//               </p>
//               <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
//                 Learn More
//               </button>
//             </div>
//           </div>

//           {/* Dr. Shraddha Agarwal */}
//           <div className="flex flex-col md:flex-row-reverse gap-12">
//             <div className="md:w-1/2">
//               <img
//                 src="/img/21212.jpg"
//                 alt="Dr. Shraddha Agarwal"
//                 className="rounded-lg shadow-lg w-full h-96 object-cover"
//               />
//             </div>
//             <div className="md:w-1/2">
//               <h3 className="text-2xl font-bold mb-4">Dr. Shraddha Agarwal</h3>
//               <p className="text-gray-600 mb-6">
//                 Dr. Shraddha Agarwal is a highly accomplished Reproductive
//                 Medicine Consultant...
//               </p>
//               <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Departments Section */}
//       <section className="py-20 bg-gray-50 px-4">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             Medical Departments
//           </h2>
//           <div className="flex flex-col items-center w-full">
//             {/* Cards Container */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto w-full">
//               {departments
//                 .slice(currentIndex, currentIndex + cardsPerPage)
//                 .map((dept, index) => (
//                   <div
//                     key={index}
//                     className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition border border-gray-200"
//                   >
//                     <div className="bg-gray-100 p-4 rounded-full mx-auto w-20 h-20 flex items-center justify-center mb-4">
//                       <img
//                         src={dept.icon}
//                         alt={dept.name}
//                         className="w-12 h-12"
//                       />
//                     </div>
//                     <h3 className="text-lg font-semibold mb-2 text-gray-800">
//                       {dept.name}
//                     </h3>
//                     <a
//                       href={dept.link}
//                       className="text-blue-600 hover:text-blue-700 font-medium"
//                     >
//                       Read More →
//                     </a>
//                   </div>
//                 ))}
//             </div>

//             {/* Navigation Buttons */}
//             <div className="flex justify-center gap-4 mt-6">
//               <button
//                 onClick={handlePrev}
//                 disabled={currentIndex === 0}
//                 className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
//               >
//                 <ChevronLeft size={20} />
//               </button>

//               <button
//                 onClick={handleNext}
//                 disabled={currentIndex + cardsPerPage >= departments.length}
//                 className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
//               >
//                 <ChevronRight size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             What Our Clients Say
//           </h2>
//           <div className="w-full max-w-lg mx-auto px-4">
//             <Slider {...settings}>
//               {testimonials.map((testimonial, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5 }}
//                   className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-center relative overflow-hidden"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-10 rounded-lg"></div>
//                   <div className="relative z-10 flex justify-center items-center mb-4">
//                     <img
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       className="w-16 h-16 rounded-full border-4 border-blue-500 shadow-lg"
//                     />
//                   </div>
//                   <h4 className="font-semibold text-lg text-gray-900">
//                     {testimonial.name}
//                   </h4>
//                   <p className="text-gray-600 text-sm">
//                     {testimonial.location}
//                   </p>
//                   <p className="text-gray-700 mt-4 text-lg italic font-medium">
//                     "{testimonial.text}"
//                   </p>
//                 </motion.div>
//               ))}
//             </Slider>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

"use client";

import {
  Ambulance,
  Award,
  Building2,
  // CheckCircle,
  ChevronLeft,
  ChevronRight,
  Church,
  Coffee,
  FlaskConical,
  Heart,
  Pill,
  Shield,
  Star,
  Syringe,
  // TrendingUp,
  Users,
  // ChevronDown,
  // Hospital,
  // Stethoscope,
  // Microscope,
  // ScanEye,
  // BriefcaseMedical,
  // Venus,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import HeroCarousel from "@/components/HeroCrousel";
import DirectorsModal from "@/components/DirectorsModal";
import Image from "next/image";

// interface FAQItem {
//   question: string;
//   answer: string[]; // multiple paragraphs
//   icon: React.ReactNode;
//   headingLevel: number; // h2, h3, etc.
// }

// const faqs: FAQItem[] = [
//   {
//     question: "About BELS Hospital",
//     headingLevel: 2,
//     icon: <Hospital className="w-5 h-5 text-blue-600" />,
//     answer: [
//       "BELS Hospital is a dedicated surgical and maternity care centre in Bhopal, known for precision-driven treatments in gynecology, laparoscopy, infertility, and general surgery. Founded and led by Dr. Shraddha Agarwal (Gynecologist & IVF Specialist) and Dr. Atul Agarwal (Senior Laparoscopic & General Surgeon), BELS stands for outcome-based care with complete transparency.",
//       "We specialize in laparoscopic gynecological procedures, high-risk pregnancy management, infertility treatments including IVF & IUI, hysteroscopy, and laser surgery for proctology and varicose veins. Every treatment plan is personalized based on thorough diagnosis and patient-specific medical needs."
//     ]
//   },
//   {
//     question: "Gynecology & Laparoscopic Surgery",
//     headingLevel: 4,
//     icon: <Stethoscope  className="w-5 h-5 text-blue-600" />,
//     answer: [
//       "BELS Hospital offers comprehensive gynecological care, including diagnosis, medical management, and surgical treatment of conditions affecting the female reproductive system. Our team handles a wide range of concerns such as menstrual disorders, PCOS, endometriosis, infertility, fibroids, and high-risk pregnancies.",
//       "We specialize in laparoscopic procedures for cases that require surgical intervention—ensuring reduced pain, minimal scarring, and quicker recovery compared to traditional open surgeries. From laparoscopic hysterectomy to ovarian cyst removal and diagnostic laparoscopy, every case is managed with clinical accuracy and ethical decision-making.",
//       "Whether you're seeking the Best Gyne Doctor in Bhopal, our team ensures routine consultation or advanced surgical care, our gynecology department delivers treatment that’s focused, responsible, and tailored to each patient's needs."
//     ]
//   },
//   {
//     question: "Infertility Treatment & IVF Centre",
//     headingLevel: 4,
//     icon: <Syringe className="w-5 h-5 text-blue-600" />,
//     answer: [
//       "BELS is among the Best IVF Centre in Bhopal, offering a clear, result-oriented approach to fertility care. Our in-house fertility unit handles IUI, IVF, ovulation induction, and embryo transfer with proper counseling, baseline investigation, and follow-ups directly with the doctor."
//     ]
//   },
//   {
//     question: "Endoscopy & Diagnostic Services",
//     headingLevel: 4,
//     icon: <Microscope  className="w-5 h-5 text-blue-600" />,
//     answer: [
//       "We offer diagnostic & operative hysteroscopy and laparoscopy to detect and treat pelvic adhesions, fibroids, uterine polyps, and more. These minimally invasive procedures allow for precise visualization of internal organs and help avoid unnecessary open surgeries. These procedures are done in controlled environments with complete pre- and post-operative care. BELS Hospital is recognized as the best endoscopy hospital in Bhopal, known for delivering safe, efficient, and ethically driven endoscopic care guided by evidence-based practices."
//     ]
//   },
//   {
//     question: "Laser Surgery for Proctology & Varicose Veins",
//     headingLevel: 4,
//     icon: <ScanEye className="w-5 h-5 text-blue-600" />,
//     answer: [
//       "BELS Hospital offers laser-assisted surgical options for select proctological conditions and varicose veins. These procedures are minimally invasive and are typically associated with less post-operative discomfort, lower risk of bleeding, and shorter recovery periods.",
//       "All patients undergo thorough clinical evaluation before any surgical recommendation is made. Our approach is evidence-based, and laser is advised only when it is medically appropriate. The focus remains on providing effective, safe, and outcome-oriented care, supported by post-operative guidance and follow-up.",
//       "Recognized for its precision and ethical clinical practices, BELS is considered a leading choice for those seeking the best laser surgery in Bhopal, offering safe, effective, and outcome-focused care.",
//       "BELS Hospital stands as a multi-specialty center known for advanced men & women’s healthcare and surgical excellence. Whether you're seeking the best gyne doctor in Bhopal for PCOS, fibroids, or high-risk pregnancy, or need precise diagnostics from the best endoscopy hospital in Bhopal, BELS ensures responsible, ethical treatment. We are also trusted for offering the best laser surgery in Bhopal for proctology and varicose veins, using minimally invasive methods. For couples facing fertility issues, our IVF unit is among the most reliable, making us the best IVF centre in Bhopal. Every treatment is guided by clinical need and patient-first care."
//     ]
//   },
//   {
//     question: "Common Surgeries Performed",
//     headingLevel: 5,
//     icon: <BriefcaseMedical className="w-5 h-5 text-blue-600" />,
//     answer: [
//       "Laparoscopic Hysterectomy",
//       "Ovarian Cyst Removal",
//       "Myomectomy",
//       "Tubal Blockage Correction"
//     ]
//   },
//   {
//     question: "Fertility Services Include",
//     headingLevel: 5,
//     icon: <Venus className="w-5 h-5 text-blue-600" />,
//     answer: [
//       "IVF & ICSI",
//       "IUI (Intrauterine Insemination)",
//       "Follicular Study & Hormonal Profiling",
//       "Hysteroscopy & Laparoscopy for Infertility",
//       "Male & Female Fertility Testing"
//     ]
//   }
// ];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const slides = [
    {
      image: "/images/projects/G1.jpg",
      title: "Welcome to BELS",
      subtitle: "Bhopal Surgical & Maternity Hospital",
      description:
        "Where care meets compassion. We're here to serve you with the highest standard of healthcare excellence.",

    },
    {
      image: "/images/projects/G2.jpg",
      title: "Advanced Medical Facilities",
      subtitle: "Cutting-Edge Technology",
      description:
        "Equipped with modern medical technology to provide world-class healthcare services.",
    },
    {
      image: "/images/projects/G3.jpg",
      title: "Expert Medical Team",
      subtitle: "Professional & Caring Staff",
      description:
        "Our dedicated team of professionals ensures the best treatment and patient care.",
    },
  ];

  const stats = [
    { icon: Users, value: "10,000+", label: "Patients Served" },
    { icon: Star, value: "96%", label: "Success Rate" },
    { icon: Heart, value: "24/7", label: "Emergency Care" },
  ];

  const departments = [
    {
      name: "Radiology & Pathology",
      icon: "/images/icon/radiology.png",
      description: "Comprehensive diagnostic imaging and laboratory services",
      link: "departments/radiology_and_path",
      alt: "Best Endoscopy Hospital in Bhopal | Best IVF Centre in Bhopal | Best Laser Surgery in Bhopal | Best Gyne Doctor in Bhopal",
    },
    {
      name: "Critical Care",
      icon: "/images/icon/critical.png",
      description: "24/7 intensive care unit with advanced life support",
      link: "departments/critical_care",
      alt: "Best Endoscopy Hospital in Bhopal | Best IVF Centre in Bhopal | Best Laser Surgery in Bhopal | Best Gyne Doctor in Bhopal",
    },
    {
      name: "Cardiology",
      icon: "/images/icon/cardiology.png",
      description: "State-of-the-art surgical facilities with expert surgeons",
      link: "departments/cardiology",
      alt: "Best Endoscopy Hospital in Bhopal | Best IVF Centre in Bhopal | Best Laser Surgery in Bhopal | Best Gyne Doctor in Bhopal",
    },
  ];

  const testimonials = [
    {
      name: "Suyash Jain",
      role: "Patient's Family",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjXrC-kRXHErYMvTnQYgEV24jFDfsJYNPxESDcq2bRQTXYTI-WFL=w75-h75-p-rp-mo-br100",
      text: "I am extremely grateful to Dr. Atul Agarwal for successfully performing a piles operation for my father. His professionalism, extensive knowledge, and exceptional skills truly stand out. His expertise is unmatched, and the way he handled my father’s case showed just how much he truly cares about his patients.",
      location: "Bhopal, MP",
      alt: "Best Endoscopy Hospital in Bhopal | Best IVF Centre in Bhopal | Best Laser Surgery in Bhopal | Best Gyne Doctor in Bhopal",
    },
    {
      name: "Poonam sagar",
      role: "Patient's Family",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjXNt5WydQO7ovF2-kEFWpHJ-_bFBrkxG1X2CXRuBtxBMhjSOYmq=w75-h75-p-rp-mo-br100",
      text: "I like to thanks Dr Shraddha Agarwal n Dr Atul Kumar Agarwal along with all their supporting Staff.  Dr Shraddha is by far the best laparoscopic surgeon and also a beautiful person by heart, who always put her patients ahead of anything.",
      location: "Indore, MP",
      alt: "Best Endoscopy Hospital in Bhopal | Best IVF Centre in Bhopal | Best Laser Surgery in Bhopal | Best Gyne Doctor in Bhopal",
    },
    {
      name: "Punita Sikarwar",
      role: "Patient",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocLCkR0ky1VlRPkZcLS0l15eVv_a9ck8Lp4Ii8zu1gza-FnRcg=w75-h75-p-rp-mo-br100",
      text: "Best hospital in bhopal for any surgery, no post operations complications are seen , specially Dr Shraddha mam n Dr Atul sir both are best in nature as well as best in work .",
      location: "Bhopal, MP",
      alt: "Best Endoscopy Hospital in Bhopal | Best IVF Centre in Bhopal | Best Laser Surgery in Bhopal | Best Gyne Doctor in Bhopal",
    },
  ];

  const consultants = [
    {
      name: "Dr. Prateek Tiwari",
      speciality: "ONCOLOGY",
      location: "Bhopal",
      image: "/doctors/dr prateek tiwari.png",
      alt: "Best Endoscopy Hospital in Bhopal | Best IVF Centre in Bhopal | Best Laser Surgery in Bhopal | Best Gyne Doctor in Bhopal",
    },
    {
      speciality: "ONCO SURGERY",
      location: "Bhopal",

      name: "Prof. DR. Abhishek Sharma",

      image: "/doctors/Dr Abhishek Sharma.png",
      alt: "Best Endoscopy Hospital in Bhopal | Best IVF Centre in Bhopal | Best Laser Surgery in Bhopal | Best Gyne Doctor in Bhopal",
    },
    {
      name: "Dr. Siddharth Raghuvanshi",

      location: "Bhopal",
      image: "/doctors/Dr Siddharth raghuvanshi.png",
      speciality: "NEUROLOGY",
      alt: "Best Endoscopy Hospital in Bhopal | Best IVF Centre in Bhopal | Best Laser Surgery in Bhopal | Best Gyne Doctor in Bhopal",
    },
    {
      name: "Dr. Shivraj Singh",
      location: "Bhopal",
      image: "/doctors/dr Shivraj Singh.png",
      speciality: "PEDIA. & NEONATOLOGY",
      alt: "Best Endoscopy Hospital in Bhopal | Best IVF Centre in Bhopal | Best Laser Surgery in Bhopal | Best Gyne Doctor in Bhopal",
    },
  ];

  const facilities = [
    {
      title: "Emergency Rooms",
      description:
        "24*7 Emergency Services, Trained Medical Staff, Triage Area, Consultation Area, Observation Ward.",
      Icon: FlaskConical,
    },
    {
      title: "Pharmacy",
      description:
        "They play a critical role in providing essential medications during emergencies when closed.",
      Icon: Pill,
    },
    {
      title: "Operating Theatre",
      description:
        "Bels Hospital offers operating rooms and a skilled medical team for surgical care, backed by attentive support.",
      Icon: Syringe,
    },
    {
      title: "Pathology",
      description:
        "Bels Hospital boasts pathology facilities staffed by professionals, ensuring accurate diagnoses.",
      Icon: FlaskConical,
    },
    {
      title: "24 Hrs Ambulance",
      description:
        "Round-the-clock ambulance service with trained medical staff for emergency patient transport and care.",
      Icon: Ambulance,
    },
    {
      title: "Food & Dietary",
      description:
        "The Dietitian plans the diet based on the therapeutic needs of the patient, Local specialties, Continental.",
      Icon: Coffee,
    },
    {
      title: "Special Nurses",
      description:
        "Special nurse services can be arranged through Nursing, master of human happiness.",
      Icon: Building2,
    },
    {
      title: "Places of Worship",
      description:
        "There is a temple of Goddess Krishna mariamman in the hospital premises, a Namaz room & Prayer cell",
      Icon: Church,
    },
  ];
  const [currentPage, setCurrentPage] = useState(0);

  const facilitiesPerPage = 4;
  const totalPages = Math.ceil(facilities.length / facilitiesPerPage);

  const currentFacilities = facilities.slice(
    currentPage * facilitiesPerPage,
    (currentPage + 1) * facilitiesPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const [welcomeRef, welcomeInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const [selectedDirector, setSelectedDirector] = useState<
    (typeof directors)[0] | null
  >(null);

  const directors = [
    {
      name: "Dr. Atul Kumar Agarwal",
      title: "Director",
      image: "/Dr Atul Agarwal.jpeg",
      alt: "Best Endoscopy Hospital in Bhopal | Best IVF Centre in Bhopal | Best Laser Surgery in Bhopal | Best Gyne Doctor in Bhopal",
      description: `Dr. Atul Kumar Agarwal is a highly accomplished Consultant Laparoscopic & GI Surgeon based in Bhopal, India. He possesses an impressive array of qualifications, including MBBS, MS, MRCS (Edin-UK), DMAS (France), FIAGES, FMAS, and MIHS. Dr. Agarwal has a rich professional history, having worked and trained in the UK for over 12 years, specializing in Laparoscopic & Gastro-intestinal surgery, including Hepato-biliary, Colorectal, and Vascular Surgery.

     After completing his surgical training in India, he pursued further expertise in the UK, gaining valuable experience in the NHS training Hospitals. During this time, he also contributed to surgical research and advancements. Dr. Agarwal holds several important medical registrations, including those with the Delhi Medical Council, Medical Council of India, and the General Medical Council in the UK.

     His surgical skills encompass various laparoscopic procedures, including Inguinal & Incisional Hernias, Appendix, Gall Bladder diseases, Reflux Surgery, and Colorectal & Bariatric Surgery. In 2014, he returned to India and became a Senior Consultant at Bansal Hospital, where he has actively participated in surgical workshops and presentations, both nationally and internationally. Dr. Agarwal's extensive experience and commitment to his field make him a highly respected figure in the world of Laparoscopic & GI Surgery.
`,
    },
    {
      name: "Dr. Shraddha Agarwal",
      title: "Director",
      image: "/shraddha mam final pic web.png",
      alt: "Best Endoscopy Hospital in Bhopal | Best IVF Centre in Bhopal | Best Laser Surgery in Bhopal | Best Gyne Doctor in Bhopal",
      description: `Dr. Shraddha Agarwal is a highly accomplished Reproductive Medicine Consultant and Laparoscopic & Endoscopic Gynaecologist with a wealth of experience and qualifications. She received her training at the prestigious Sir Ganga Ram Hospital and has a multifaceted skill set. Dr. Agarwal specializes in addressing both male and female fertility concerns, offering expertise in Ovulation Induction, IUI, and IVF.

      She is also skilled in laparoscopic procedures, with a proven track record of Myomectomy for fibroids as large as 18 to 20 cm. Her proficiency extends to managing conditions such as Dermoid cyst, Endometriosis, and other benign Ovarian Masses. Additionally, she provides guidance on fertility management and preservation for Borderline Ovarian Masses.

      Her proficiency includes Hysteroscopic procedures like polypectomy, septoplasty, and submucous fibroid resection. Dr. Agarwal is well-equipped to handle emergency situations, efficiently managing Ruptured Ectopic pregnancies using laparoscopy or medical interventions as needed. She holds medical registrations with the Medical Council of India, Delhi Medical Council, and the General Medical Council in London, UK.

      Her qualifications encompass an MBBS, MD in Obstetrics and Gynaecology, MRCOG from the Royal College of Obstetrics & Gynaecology in the UK, and BSCCP accreditation as a Colposcopist. Dr. Agarwal's extensive experience includes working in various medical institutions in the UK, where she focused on high-risk pregnancy, Urogynaecology, Gynae Oncology Services, and more. She has trained in Obstetrics Emergencies and is committed to providing advanced care in reproductive medicine and gynecology.`,
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    doctor: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    error: null as string | null,
    success: false,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      const response = await fetch("/api/send-appointment-dept", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send appointment request");
      }

      setStatus({ loading: false, error: null, success: true });
      setFormData({ name: "", email: "", department: "", doctor: "" });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 3000);
    } catch (error) {
      setStatus({
        loading: false,
        error: error instanceof Error ? error.message : "An error occurred",
        success: false,
      });
    }
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      {/* <section className="relative h-[650px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
            <motion.img
              style={{ scale }}
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 flex items-center text-white px-8 md:px-20 z-20">
              <div className="max-w-4xl">
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-6xl font-bold mb-4"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl mb-6"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg mb-8"
                >
                  {slides[currentSlide].description}
                </motion.p>
                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
                >
                  Book Appointment
                </motion.button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}

      {/* </section>  */}
      <HeroCarousel />
      {/* Welcome Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <img
                src="/hospital-real.jpeg"
                alt="Best Endoscopy Hospital in Bhopal | Best IVF Centre in Bhopal | Best Laser Surgery in Bhopal | Best Gyne Doctor in Bhopal"
                className="rounded-lg shadow-lg h-[450px] object-conatin w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                Welcome to The BELS Hospital
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                Your surgical Journey and Your health is our priority. We
                provide exceptional Surgical Care. Our team of doctors offer
                surgical expertise with unmatched precision.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <span className="text-blue-600 text-2xl">🏥</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                    <p className="text-gray-600 text-sm">
                      Patient health is of paramount importance to us. From the
                      moment a patient walks in, our focus is on ensuring
                      well-being and compassionate care by our staff. We are
                      here to support at every step of the surgical journey. We
                      prioritize open communication, addressing concerns, and
                      tailoring our approach to meet patients unique needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <span className="text-blue-600 text-2xl">👁️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                    <p className="text-gray-600 text-sm">
                      A seamless blend of surgical excellence and
                      patient-centered care. We aspire to redefine healthcare by
                      prioritizing precision, compassion, and patient well-being
                      above all.
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => window.open("/departments", "_blank")}
                className="mt-8 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
              >
                Our Departments
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section
        ref={statsRef}
        className="py-16 bg-gradient-to-r from-blue-600 to-blue-800"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={statsInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.2 }}
                className="text-center text-white"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                <p className="text-lg text-blue-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className=" mt-4 p-4">
          <div className="max-w-7xl mx-auto">
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex items-center justify-between p-3">
                {/* Left side - NABH Logo and Title */}
                <div className="flex items-center space-x-6">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                    <div className="relative bg-white px-3 py-2 rounded-lg">
                      <img
                        src="https://www.itoozhiayurveda.in/wp-content/uploads/2019/05/NABH-LOGO.png"
                        alt="Best Endoscopy Hospital in Bhopal | Best IVF Centre in Bhopal | Best Laser Surgery in Bhopal | Best Gyne Doctor in Bhopal"
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <h3 className="text-lg font-semibold text-gray-900">
                      NABH Excellence Certification
                    </h3>
                    <div className="flex items-center space-x-2 text-blue-600">
                      <Shield className="w-4 h-4" />
                      <span className="text-sm">
                        Nationally Accredited Healthcare
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right side - Achievement Badge */}
                <div className="flex items-center space-x-4">
                  <div className="hidden md:flex items-center px-4 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full">
                    <Award className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-gray-700">
                      Excellence in Healthcare Since 2018
                    </span>
                  </div>
                  <button
                    onClick={() => window.open("https://nabh.co/", "_blank")}
                    className="px-4 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </button>
                </div>
              </div>

              {/* Mobile Title - Only shows on small screens */}
              <div className="sm:hidden border-t border-gray-100 px-3 py-2">
                <h3 className="text-sm font-semibold text-gray-900">
                  NABH Excellence Certification
                </h3>
                <div className="flex items-center space-x-1 text-blue-600">
                  <Shield className="w-3 h-3" />
                  <span className="text-xs">Nationally Accredited</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* our directors */}

      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-24">
            {directors.map((director, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-16 items-center`}
              >
                <div className="md:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative rounded-2xl overflow-hidden cursor-pointer"
                    onClick={() => setSelectedDirector(director)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                    <Image
                      width={500}
                      height={500}
                      src={director.image}
                      alt={director.alt}
                      className="w-full h-[500px] object-cover"
                    />
                  </motion.div>
                </div>
                <div className="md:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">
                      {director.title}
                    </span>
                    <h3 className="text-3xl font-bold mt-2 mb-4">
                      {director.name}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      {director.description.split("\n\n")[0]}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedDirector(director)}
                      className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                    >
                      View Profile
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <DirectorsModal
            isOpen={selectedDirector !== null}
            onClose={() => setSelectedDirector(null)}
            director={selectedDirector || directors[0]}
          />
        </div>
      </section>

      {/* Team of Consultants Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">
              Our Specialists
            </span>
            <h2 className="text-4xl font-bold mt-2">Team Of Consultants</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultants.map((consultant, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    width={500}
                    height={500}
                    src={consultant.image}
                    alt={consultant.alt}
                    className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">
                    {consultant.name}
                  </h3>
                  <p className="text-blue-600">{consultant.location}</p>
                  <p className="text-gray-600 mt-2">{consultant.speciality}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our Departments
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-8">
                  <img
                    src={dept.icon}
                    alt={dept.alt}
                    className="w-16 h-16 mb-6"
                  />
                  <h3 className="text-xl font-semibold mb-4">{dept.name}</h3>
                  <p className="text-gray-600 mb-6">{dept.description}</p>
                  <a
                    href={dept.link}
                    className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Learn More →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Patient Testimonials
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 italic">{testimonial.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Facilities Section */}
      {/* <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">
                  What We Offer
                </span>
                <h2 className="text-4xl font-bold mt-2">Our Facilities</h2>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {facilities.map((facility, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-2xl shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-50 p-4 rounded-xl">
                        <img
                          src={facility.icon}
                          alt={facility.title}
                          className="w-8 h-8"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          {facility.title}
                        </h3>
                        <p className="text-gray-600">{facility.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/3 lg:mt-[7.5rem]">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-6">Make An Appointment</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select Department</option>
                    <option value="surgery">Surgery</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="neurology">Neurology</option>
                  </select>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select Doctor</option>
                    <option value="dr-atul">Dr. Atul Kumar Agarwal</option>
                    <option value="dr-shraddha">Dr. Shraddha Agarwal</option>
                  </select>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    SUBMIT
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">
                      What We Offer
                    </span>
                    <div className="text-4xl font-bold mt-2 ">
                      Our Facilities
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="flex mb-4 gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevPage}
                  className="p-2 rounded-md bg-white shadow-md hover:bg-gray-50 transition-colors"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextPage}
                  className="p-2 rounded-md bg-white shadow-md hover:bg-gray-50 transition-colors"
                  aria-label="Next page"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </motion.button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentFacilities.map((facility: any, index: any) => (
                  <motion.div
                    key={`${currentPage}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-2xl shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-50 p-4 rounded-xl">
                        <facility.Icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          {facility.title}
                        </h3>
                        <p className="text-gray-600">{facility.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/3 lg:mt-[7.5rem]">
              {/* <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-6">Make An Appointment</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select Department</option>
                    <option value="surgery">Surgery</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="neurology">Neurology</option>
                  </select>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select Doctor</option>
                    <option value="dr-atul">Dr. Atul Kumar Agarwal</option>
                    <option value="dr-shraddha">Dr. Shraddha Agarwal</option>
                  </select>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    SUBMIT
                  </motion.button>
                </form>
              </motion.div> */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-6">Make An Appointment</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Department</option>
                    <option value="surgery">Surgery</option>
                    <option value="gynaecology ">Gynaecology </option>
                    <option value="emergency ">Emergency</option>
                  </select>
                  <select
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Doctor</option>
                    <option value="dr-atul">Dr. Atul Kumar Agarwal</option>
                    <option value="dr-shraddha">Dr. Shraddha Agarwal</option>
                  </select>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={status.loading}
                    className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
                  >
                    {status.loading ? "SUBMITTING..." : "SUBMIT"}
                  </motion.button>

                  {status.error && (
                    <p className="text-red-500 text-sm mt-2">{status.error}</p>
                  )}
                  {status.success && (
                    <p className="text-green-500 text-sm mt-2">
                      Appointment request sent successfully!
                    </p>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

{/* <div className="container mx-auto px-4 py-16">
  <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold mb-2">Your Trusted Center for Laparoscopy, Maternity & IVF Care in Bhopal</h2>
      <p className="text-xl italic text-red-400">Advanced Diagnosis. Ethical Treatment. Personalized Care.</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const HeadingTag = `h${faq.headingLevel}` as keyof JSX.IntrinsicElements;
          const isListType = faq.headingLevel === 5;

          return (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center gap-3">
                  {faq.icon}
                  <HeadingTag className="font-medium text-gray-900 text-lg">
                    {faq.question}
                  </HeadingTag>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  { isListType ? (
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      {faq.answer.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                  faq.answer.map((para, i) => (
                    <p key={i} className="text-gray-600 mb-4 last:mb-0">
                      {para}
                    </p>
                  ))
                )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div> */}

    <div className="container mx-auto px-4 py-16">
  <div className="mb-8 text-center">
      <h2 className="text-3xl font-bold mb-2">Your Trusted Center for Laparoscopy, Maternity & IVF Care in Bhopal</h2>
      <p className="text-xl italic text-red-400">Advanced Diagnosis. Ethical Treatment. Personalized Care.</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <span className="text-blue-600 text-2xl">🏥</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">About BELS Hospital</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      BELS Hospital is a dedicated surgical and maternity care centre in Bhopal, known for precision-driven treatments in gynecology, laparoscopy, infertility, and general surgery. Founded and led by Dr. Shraddha Agarwal (Gynecologist & IVF Specialist) and Dr. Atul Agarwal (Senior Laparoscopic & General Surgeon), BELS stands for outcome-based care with complete transparency.
                      <br />
                      <br />
                      We specialize in laparoscopic gynecological procedures, high-risk pregnancy management, infertility treatments including IVF & IUI, hysteroscopy, and laser surgery for proctology and varicose veins. Every treatment plan is personalized based on thorough diagnosis and patient-specific medical needs.
                    </p>
                  </div>
                </div>
              </div>

      </div>
    </div>


   <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-10 text-center">
              Our Key Services
          </h3>
          <div className="flex flex-col md:flex-row gap-12 mb-5">
            <div className="md:w-1/2">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Gynecology & Laparoscopic Surgery</h4>
                    <p className="text-gray-600 text-sm ml-5">
                      BELS Hospital offers comprehensive gynecological care, including diagnosis, medical management, and surgical treatment of conditions affecting the female reproductive system. Our team handles a wide range of concerns such as menstrual disorders, PCOS, endometriosis, infertility, fibroids, and high-risk pregnancies.
                      <br />
                      <br />
                      We specialize in laparoscopic procedures for cases that require surgical intervention—ensuring reduced pain, minimal scarring, and quicker recovery compared to traditional open surgeries. From laparoscopic hysterectomy to ovarian cyst removal and diagnostic laparoscopy, every case is managed with clinical accuracy and ethical decision-making.
                      <br />
                      <br />
                      Whether you're seeking the Best Gyne Doctor in Bhopal, our team ensures routine consultation or advanced surgical care, our gynecology department delivers treatment that’s focused, responsible, and tailored to each patient's needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div>
                    <h5 className="text-xl font-semibold mb-2">Common Surgeries Performed:</h5>
                    <ul className="text-gray-600 text-sm ml-10 list-disc">
                      <li>Laparoscopic Hysterectomy</li>
                      <li>Ovarian Cyst Removal</li>
                      <li>Myomectomy</li>
                      <li>Tubal Blockage Correction</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Infertility Treatment & IVF Centre</h4>
                    <p className="text-gray-600 text-sm ml-5">
                      BELS is among the Best IVF Centre in Bhopal, offering a clear, result-oriented approach to fertility care. Our in-house fertility unit handles IUI, IVF, ovulation induction, and embryo transfer with proper counseling, baseline investigation, and follow-ups directly with the doctor.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  {/* <div className="bg-blue-100 p-4 rounded-full">
                    <span className="text-blue-600 text-2xl">🏥</span>
                  </div> */}
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Laser Surgery for Proctology & Varicose Veins</h4>
                    <p className="text-gray-600 text-sm ml-5">
                      BELS Hospital offers laser-assisted surgical options for select proctological conditions and varicose veins. These procedures are minimally invasive and are typically associated with less post-operative discomfort, lower risk of bleeding, and shorter recovery periods.
                      <br />
                      <br />
                      All patients undergo thorough clinical evaluation before any surgical recommendation is made. Our approach is evidence-based, and laser is advised only when it is medically appropriate. The focus remains on providing effective, safe, and outcome-oriented care, supported by post-operative guidance and follow-up.
                      <br />
                      <br />
                      Recognized for its precision and ethical clinical practices, BELS is considered a leading choice for those seeking the best laser surgery in Bhopal, offering safe, effective, and outcome-focused care.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div>
                    <h5 className="text-xl font-semibold mb-2">Fertility Services Include:</h5>
                    <ul className="text-gray-600 text-sm ml-10 list-disc">
                      <li>IVF & ICSI</li>
                      <li>IUI (Intrauterine Insemination)</li>
                      <li>Follicular Study & Hormonal Profiling</li>
                      <li>Hysteroscopy & Laparoscopy for Infertility</li>
                      <li>Male & Female Fertility Testing</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div>
                    <h5 className="text-xl font-semibold mb-2">Endoscopy & Diagnostic Services</h5>
                    <p className="text-gray-600 text-sm ml-5">
                      We offer diagnostic & operative hysteroscopy and laparoscopy to detect and treat pelvic adhesions, fibroids, uterine polyps, and more. These minimally invasive procedures allow for precise visualization of internal organs and help avoid unnecessary open surgeries. These procedures are done in controlled environments with complete pre- and post-operative care. BELS Hospital is recognized as the best endoscopy hospital in Bhopal, known for delivering safe, efficient, and ethically driven endoscopic care guided by evidence-based practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-600 text-sm">
                      BELS is among the Best IVF Centre in Bhopal, offering a clear, result-oriented approach to fertility care. Our in-house fertility unit handles IUI, IVF, ovulation induction, and embryo transfer with proper counseling, baseline investigation, and follow-ups directly with the doctor.
                    </p>
        </div>
      </section>

    </div>
  );
};

export default Home;
