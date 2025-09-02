"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  UserRound,
  ChevronLeft,
  ChevronRightIcon,
  Star,
} from "lucide-react";
import { MdOutlineLocalHospital } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "@/components/Sidebar";

interface Doctor {
  name: string;
  location: string;
  phone: string;
  email: string;
  image: string;
}

interface ServiceSection {
  title: string;
  description: string;
}

const carouselImages = [
  "/images/department/Critical-1.jpg",
  "/images/department/Critical-2.jpg",
  "/images/department/Critical-3.jpg",
  "/images/department/Critical-4.jpg",
  "/images/department/Critical-5.jpg",
];
const page = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const doctors: Doctor[] = [
    {
      name: "Dr. Sarah Johnson",
      location: "Critical Care Specialist",
      phone: "+91 9935754963",
      email: "sarah.j@hospitals.com",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Dr. Michael Chen",
      location: "Intensive Care Expert",
      phone: "+91 0987654321",
      email: "michael.c@hospitals.com",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Dr. Emily Roberts",
      location: "Emergency Medicine",
      phone: "+91 0987654321",
      email: "emily.r@hospitals.com",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const services: ServiceSection[] = [
    {
      title: "Continuous Monitoring",
      description:
        "At BELS Hospital, we provide round-the-clock monitoring of vital signs, including heart rate, blood pressure, oxygen saturation, and respiratory rate. Our advanced monitoring technology ensures that any changes in the patient's condition are detected promptly, allowing for immediate intervention.",
    },
    {
      title: "Advanced Life Support",
      description:
        "Our critical care units are equipped with state-of-the-art technology and staffed by trained professionals to deliver advanced life support interventions. This includes mechanical ventilation, cardiac monitoring, and defibrillation, ensuring rapid response to emergencies such as cardiac arrest or respiratory failure.",
    },
    {
      title: "Specialized Nursing Care",
      description:
        "Our team of skilled critical care nurses is dedicated to providing personalized and compassionate care to our patients. Trained in critical care management, our nurses administer medications, monitor patient responses, and manage complex medical equipment to ensure the best possible outcomes for our patients.",
    },
    {
      title: "Multidisciplinary Team Approach",
      description:
        "At BELS Hospital, we understand that critical care requires a coordinated effort among various healthcare professionals. Our multidisciplinary team, including intensivists, nurses, respiratory therapists, pharmacists, and other specialists, works collaboratively to develop and implement individualized treatment plans for each patient.",
    },
    {
      title: "Diagnostic and Therapeutic Interventions",
      description:
        "We offer access to a comprehensive range of diagnostic tests and therapeutic interventions to stabilize and treat our patients' conditions. From advanced imaging studies to specialized procedures, our team is equipped to address a wide spectrum of medical needs in the critical care setting.",
    },
    {
      title: "Family-Centered Care",
      description:
        "We recognize the importance of family support in the critical care journey. At BELS Hospital, we provide ongoing communication and support to the families of our patients, keeping them informed about their loved one's condition, explaining treatment plans, and involving them in decision-making processes.",
    },
    {
      title: "Pain Management",
      description:
        "Ensuring patient comfort and alleviating suffering are paramount in critical care. Our dedicated pain management team employs a variety of strategies, including medications, regional anesthesia techniques, and non-pharmacological approaches, to manage pain effectively and improve the overall patient experience.",
    },
    {
      title: "Rehabilitation Services",
      description:
        "Recovery doesn't end when critical care treatment concludes. BELS Hospital offers comprehensive rehabilitation services to help patients regain function and independence following critical illness or injury. From physical therapy to occupational therapy, our rehabilitation programs are tailored to meet the unique needs of each patient.",
    },
    {
      title: "",
      description:
        "At BELS Hospital, we are committed to providing the highest quality of care to our patients in their time of need. Our comprehensive critical care services are designed to deliver personalized, compassionate, and effective treatment, ensuring the best possible outcomes for our patients and their families.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4"
      >
        <div className="container mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-5xl font-bold mb-4"
          >
            Critical Care
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex items-center space-x-2 text-sm"
          >
            <a
              href="/"
              className="hover:text-blue-200 transition-colors duration-300"
            >
              Home
            </a>
            <ChevronRight className="w-4 h-4" />
            <a
              href="/departments"
              className="hover:text-blue-200 transition-colors duration-300"
            >
              Department
            </a>
            <ChevronRight className="w-4 h-4" />
            <span>Critical Care</span>
          </motion.div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Image Carousel */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-white rounded-xl shadow-lg p-6 mb-8 overflow-hidden"
            >
              <div className="relative">
                <div className="relative h-[500px] overflow-hidden rounded-lg">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={carouselImages[currentImageIndex]}
                      alt={`Critical Care ${currentImageIndex + 1}`}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                      className="absolute w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6 text-blue-600" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                  >
                    <ChevronRightIcon className="w-6 h-6 text-blue-600" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <div className="space-y-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <motion.h2
                    className="text-2xl font-bold mb-4 flex items-center gap-3 text-blue-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <MdOutlineLocalHospital className="text-red-500" />
                    </motion.div>
                    {service.title}
                  </motion.h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white rounded-xl shadow-lg p-6 sticky top-8"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-800">
                Quick Links
              </h3>
              <nav className="space-y-3">
                {[
                  "Emergency Care",
                  "Patient Resources",
                  "Insurance",
                  "Visiting Hours",
                  "Contact Us",
                ].map((item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    whileHover={{ x: 10, color: "#2563eb" }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 1 }}
                    className="flex items-center justify-between p-3 rounded-lg text-gray-600"
                  >
                    {item}
                    <ChevronRight className="w-4 h-4" />
                  </motion.a>
                ))}
              </nav>
            </motion.div> */}
            <Sidebar />
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4 mt-16"
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl font-bold mb-4">
              Exceptional Care When You Need It Most
            </h2>
            <p className="text-blue-100 text-lg">
              Our team of experienced healthcare professionals is ready to
              provide you with the highest quality medical care.
            </p>
          </motion.div>
          <motion.a
            href="/contactUs"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg"
          >
            Schedule an Appointment
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default page;
