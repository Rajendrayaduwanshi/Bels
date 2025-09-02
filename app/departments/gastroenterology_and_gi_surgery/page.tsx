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
  "/images/department/Gastroenterology-1.jpg",
  "/images/department/Gastroenterology-2.jpg",
  "/images/department/Gastroenterology-3.jpg",
  "/images/department/Gastroenterology-4.jpg",
  "/images/department/Gastroenterology-5.jpg",
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
      title: "Comprehensive Gastrointestinal Care",
      description:
        "BELS Hospital offers comprehensive care for a wide range of gastrointestinal (GI) conditions, including disorders of the esophagus, stomach, intestines, liver, pancreas, and gallbladder. Our team of gastroenterologists and GI surgeons provides expert diagnosis, treatment, and management of GI disorders.",
    },
    {
      title: "Diagnostic Endoscopy",
      description:
        "We perform a variety of diagnostic endoscopic procedures to evaluate and diagnose GI conditions, including esophagogastroduodenoscopy (EGD), colonoscopy, sigmoidoscopy, and endoscopic ultrasound (EUS). These procedures allow for direct visualization of the GI tract and biopsy collection for further evaluation.",
    },
    {
      title: "Therapeutic Endoscopy",
      description:
        "BELS Hospital offers advanced therapeutic endoscopic procedures for the treatment of GI conditions, such as polyp removal, endoscopic mucosal resection (EMR), endoscopic submucosal dissection (ESD), stent placement, and dilation of strictures. These minimally invasive techniques can often provide effective alternatives to surgery.",
    },
    {
      title: "Gastrointestinal Surgery",
      description:
        "Our experienced GI surgeons perform a variety of gastrointestinal surgeries to treat conditions such as colorectal cancer, inflammatory bowel disease (Crohn's disease and ulcerative colitis), diverticulitis, gallbladder disease, and pancreatic disorders. Surgical interventions may include laparoscopic procedures, open surgeries, and minimally invasive techniques.",
    },
    {
      title: "Liver and Pancreatic Surgery",
      description:
        "BELS Hospital specializes in liver and pancreatic surgeries for conditions such as liver tumors, pancreatic cancer, pancreatic cysts, and chronic pancreatitis. Our surgeons utilize advanced surgical techniques to achieve optimal outcomes while preserving liver and pancreatic function.",
    },
    {
      title: "Bariatric Surgery",
      description:
        "We offer bariatric surgery as a treatment option for patients with severe obesity and related health conditions. Our bariatric surgeons perform procedures such as gastric bypass, sleeve gastrectomy, and gastric banding to help patients achieve significant weight loss and improve their overall health.",
    },
    {
      title: "Liver Transplantation",
      description:
        "BELS Hospital provides comprehensive care for patients with end-stage liver disease who may require liver transplantation. Our multidisciplinary team evaluates patients for transplant candidacy, performs liver transplant surgeries, and provides post-transplant care to ensure long-term success.",
    },
    {
      title: "Nutritional Support Services",
      description:
        "We offer nutritional counseling and support services to help patients manage GI conditions, optimize their nutritional status, and improve their overall health and well-being. Our dietitians work closely with patients to develop personalized nutrition plans tailored to their specific needs and dietary preferences.",
    },
    {
      title: "",
      description:
        "At BELS Hospital, our Gastroenterology & GI Surgery services are dedicated to providing high-quality, compassionate care for patients with a wide range of GI disorders. Whether it's diagnostic procedures, medical management, or surgical interventions, our team is committed to improving patients' digestive health and quality of life with expertise and empathy.",
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
            gastroenterology & gi surgery
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
            <span> Gastroenterology & Gi Surgery</span>
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
