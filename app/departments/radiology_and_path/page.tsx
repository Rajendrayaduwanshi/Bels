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
  "/images/department/Pathology-1.jpg",
  "/images/department/Pathology-2.jpg",
  "/images/department/Radiology-1.jpg",
  "/images/department/Radiology-2.jpg",
  "/images/department/Radiology-3.jpg",
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
      title: "Radiology",
      description:
        "Radiology employs advanced imaging techniques like X-rays, CT scans, and MRIs to visualize internal structures, aiding in the diagnosis and treatment of medical conditions. Our radiology services provide detailed insights, facilitating accurate diagnoses and personalized healthcare plans. Trust us for state-of-the-art imaging that prioritizes precision and patient well-being.",
    },
    {
      title: "Digital Fixed X-ray",
      description:
        "Digital fixed X-ray is a quick and non-invasive diagnostic imaging test capturing clear pictures of bones, teeth, chest, and abdomen. It employs low radiation levels, ensuring safety. Recommended by doctors for various conditions, it provides essential insights for diagnosing infections, cancers, and other medical issues with precision and efficiency.",
    },
    {
      title: "CT Scan",
      description:
        "A CT scan is a non-invasive medical imaging procedure that combines X-rays and computer technology to create detailed cross-sectional images of the body. It aids in diagnosing various conditions, including injuries, tumors, and internal organ abnormalities, providing valuable insights for medical professionals in planning treatment.",
    },
    {
      title: "Digital Mobile X-ray",
      description:
        "Digital mobile X-ray offers on-the-go diagnostic imaging, swiftly capturing detailed images of bones, teeth, chest, and abdomen. Its portability ensures accessibility, allowing medical professionals to perform on-site examinations. With low radiation levels, it prioritizes safety while efficiently aiding in the diagnosis of diverse medical conditions.",
    },
    {
      title: "C-arm",
      description:
        "C-arm is a versatile medical imaging device with a pivoted X-ray source and detector, enabling real-time imaging during surgical and medical procedures. Its flexibility aids in visualizing dynamic processes and guiding interventions with precision. This portable unit plays a crucial role in enhancing diagnostic and therapeutic capabilities in medical settings.",
    },
    {
      title: "Pathology",
      description:
        "In pathology, we analyze tissues and bodily fluids to uncover the root causes of diseases. Our expert pathologists use cutting-edge techniques to provide accurate diagnoses, guiding effective treatment plans. Trust our pathology services for comprehensive insights, contributing to better healthcare outcomes and personalized patient care.",
    },
    {
      title: "Hematology",
      description:
        "Our hematology services focus on studying blood and its components to diagnose and treat disorders like anemia, leukemia, and clotting disorders. With advanced technologies, our expert hematologists deliver precise analyses, ensuring comprehensive care. Trust us for accurate assessments and personalized treatment strategies to optimize your hematologic health.",
    },
    {
      title: "Biochemistry",
      description:
        "Explore the intricacies of health through our biochemistry services. Our experts analyze biological molecules to understand metabolic processes, aiding in disease diagnosis and monitoring. With cutting-edge technology, we provide accurate insights for personalized healthcare. Rely on us for advanced biochemistry assessments that contribute to your overall well-being.",
    },
    {
      title: "Microbiology",
      description:
        "Dive into the world of microbiology with our services, where we study microorganisms to identify infections and diseases. Our expert microbiologists employ state-of-the-art techniques for precise analyses, contributing to effective treatment strategies. Trust us for comprehensive microbiological insights that play a crucial role in safeguarding your health.",
    },
    {
      title: "Histopathology",
      description:
        "In histopathology, we examine tissues at a microscopic level, uncovering the cellular details essential for accurate disease diagnosis. Our expert pathologists utilize advanced techniques to provide in-depth insights, guiding effective treatment plans. Trust our histopathology services for comprehensive analyses that contribute to improved healthcare outcomes and personalized patient care.",
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
            className="text-5xl font-bold mb-4 capitalize"
          >
            Radiology & Path
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
            <span> Radiology & Path</span>
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
