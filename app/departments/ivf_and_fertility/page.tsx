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
  "/images/department/IVF-1.jpg",
  "/images/department/IVF-2.jpg",
  "/images/department/IVF-3.jpg",
  "/images/department/IVF-4.jpg",
  "/images/department/IVF-5.jpg",
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
      title: "Comprehensive Fertility Evaluation",
      description:
        "BELS Hospital offers comprehensive fertility evaluations for individuals and couples struggling with infertility. Our experienced fertility specialists conduct thorough assessments to identify underlying causes of infertility and develop personalized treatment plans.",
    },
    {
      title: "In Vitro Fertilization (IVF)",
      description:
        "As a leading fertility center, we provide state-of-the-art IVF procedures to help individuals and couples achieve their dream of parenthood. Our IVF process involves retrieving eggs from the ovaries, fertilizing them with sperm in a laboratory setting, and transferring resulting embryos into the uterus for implantation.",
    },
    {
      title: "Ovulation Induction",
      description:
        "For individuals experiencing irregular ovulation or ovulatory disorders, we offer ovulation induction treatments to stimulate egg production and improve the chances of conception. Our fertility experts carefully monitor the ovulation process to optimize treatment outcomes.",
    },
    {
      title: "Intrauterine Insemination (IUI)",
      description:
        "BELS Hospital offers intrauterine insemination (IUI) as a fertility treatment option for individuals with certain types of infertility. During IUI, sperm is directly injected into the uterus during the woman's fertile window, increasing the likelihood of fertilization.",
    },
    {
      title: "Donor Sperm and Eggs",
      description:
        "Our fertility center provides access to donor sperm and eggs for individuals and couples facing infertility due to sperm or egg quality issues. We offer comprehensive donor screening processes to ensure the safety and suitability of donated gametes.",
    },
    {
      title: "Preimplantation Genetic Testing (PGT)",
      description:
        "To enhance the success rates of IVF procedures and reduce the risk of genetic abnormalities, we offer preimplantation genetic testing (PGT). PGT allows for the screening of embryos for chromosomal abnormalities or genetic diseases before embryo transfer.",
    },
    {
      title: "Fertility Preservation",
      description:
        "BELS Hospital offers fertility preservation options for individuals facing medical treatments that may impact their fertility, such as chemotherapy or radiation therapy. Our specialists provide guidance on fertility preservation techniques, including egg and embryo freezing.",
    },
    {
      title: "Compassionate Support",
      description:
        "We understand that infertility can be emotionally challenging, and our team provides compassionate support and counseling throughout the fertility treatment journey. We strive to empower individuals and couples with knowledge, resources, and emotional support to navigate the process with confidence.",
    },
    {
      title: "",
      description:
        "At BELS Hospital, our IVF & Fertility Services are designed to provide comprehensive care and support to individuals and couples on their fertility journey. With advanced technologies, personalized treatment plans, and compassionate care, we aim to help our patients achieve their goals of building a family.",
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
            className="text-5xl capitalize font-bold mb-4"
          >
            IVF And Fertility
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
            <span> IVF And Fertility</span>
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
