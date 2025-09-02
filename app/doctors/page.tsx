"use client";
import { motion } from "framer-motion";
import { ChevronRight, Mail, MapPin, Phone, UserRound } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const doctors = [
  {
    id: 1,
    name: "DR. ATUL K. AGARWAL ICS (UK)",
    specialty: "GENERAL & GASTRO SURGERY",
    image: "/Dr Atul Agarwal.jpeg",
  },
  {
    id: 2,
    name: "DR. SHRADDHA AGARWAL ",
    specialty: "IVF, MATERNITY & GYNAE",
    image: "/shraddha mam final pic web.png",
  },
  {
    id: 3,
    name: "DR. SHIVRAJ SINGH ",
    specialty: "PEDIA. & NEONATOLOGY",
    image: "/doctors/dr Shivraj Singh.png",
  },
  {
    id: 4,
    name: "DR. D. P. SINGH ",
    specialty: "CARDIOLOGY",
    image: "/doctors/Dr DP Singh.png",
  },
  {
    id: 5,
    name: "Prof. DR. ABHISHEK SHARMA",
    specialty: "ONCO SURGERY",
    image: "/doctors/Dr Abhishek Sharma.png",
  },
  {
    id: 6,
    name: "DR PRATEEK TIWARI",
    specialty: "ONCOLOGY",
    image: "/doctors/dr prateek tiwari.png",
  },
  {
    id: 7,
    name: "DR. MRIDUL SHAHI",
    specialty: "NEURO SURGERY",
    image: "/doctors/dr mridul shahi.png",
  },
  {
    id: 8,
    name: "DR SIDDHARTH RAGHUVANSHI",
    specialty: "NEUROLOGY",
    image: "/doctors/Dr Siddharth raghuvanshi.png",
  },
  {
    id: 9,
    name: "DR. TANMAYEE ABHAY THITE ",
    specialty: "PLASTIC SURGERY",
    image: "/doctors/dr tanmayee Abhay Thite.png",
  },
  {
    id: 10,
    name: "DR. AJAY RAO THITE",
    specialty: "RESPIRATORY MEDICINE",
    image: "/doctors/doctor icon.png",
  },
  {
    id: 11,
    name: "DR. V. K. DUBEY",
    specialty: "MEDICINE",
    image: "/doctors/doctor icon.png",
  },
  {
    id: 12,
    name: "Dr. Vivek Arora",
    specialty: "MBBS, MD ( Respiratory Medicine)",
    image: "/doctors/dr.vivek.jpg",
  },
  {
    id: 13,
    name: "Dr. B. S. Raghuwanshi",
    specialty: "Consultant Physician",
    image: "/doctors/dr-bs.jpg",
  },
];

// Minimal blur placeholder
const shimmer = `data:image/svg+xml;base64,${Buffer.from(
  `<svg width="400" height="256" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="256" fill="#f3f4f6"/></svg>`
).toString("base64")}`;

function page() {
  const [loadedImages, setLoadedImages] = useState(new Set());

  const handleImageLoad = (doctorId: any) => {
    setLoadedImages((prev) => new Set([...prev, doctorId]));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Preload critical images */}
      <div className="hidden">
        {doctors.slice(0, 8).map((doctor) => (
          <link key={doctor.id} rel="preload" as="image" href={doctor.image} />
        ))}
      </div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-[300px] overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900"
      >
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Our Doctors
          </motion.h1>
          <motion.nav
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex"
            aria-label="Breadcrumb"
          >
            <ol className="flex items-center space-x-2 text-blue-100">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li className="font-semibold">Our Doctors</li>
            </ol>
          </motion.nav>
        </div>
      </motion.section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Expert Doctors
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Meet our team of experienced and dedicated medical professionals
              committed to providing you with the highest quality healthcare
              services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className={`object-cover transition-opacity duration-300 ${
                        loadedImages.has(doctor.id)
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                      priority={index < 4}
                      placeholder="blur"
                      blurDataURL={shimmer}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      quality={85}
                      onLoad={() => handleImageLoad(doctor.id)}
                    />
                  </motion.div>

                  {/* Overlay - Only show on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/95 to-blue-600/80 text-white p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-xl mb-2">{doctor.name}</h3>
                    <p className="text-blue-100 mb-4">{doctor.specialty}</p>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="mt-auto flex items-center gap-2 text-white group/btn"
                      onClick={() => window.open("/contactUs", "_blank")}
                    >
                      Book Appointment
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="font-bold text-xl text-gray-800 leading-tight">
                    {doctor.name}
                  </h3>
                  <p className="text-blue-600 mt-2 font-medium">
                    {doctor.specialty}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
