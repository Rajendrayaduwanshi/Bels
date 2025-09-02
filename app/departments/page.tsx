"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
const page = () => {
  const departments = [
    {
      name: "IVF & Fertility",
      icon: "/images/icon/radiology.png",
      link: "departments/ivf_and_fertility",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Critical Care",
      icon: "/images/icon/critical.png",
      link: "departments/critical_care",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Accident & Emergency",
      icon: "/images/icon/accident.png",
      link: "departments/accident_and_emergency",
      color: "from-red-500 to-orange-500",
    },
    {
      name: "Radiology & Pathology",
      icon: "/images/icon/ivf.png",
      link: "departments/radiology_and_path",
      color: "from-green-500 to-teal-500",
    },
    {
      name: "Obstetrics & Gynecology",
      icon: "/images/icon/obstetrics.png",
      link: "departments/obstetrics_and_gynecology",
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "General and Laparoscopic Surgery",
      icon: "/images/icon/laparoscopic.png",
      link: "departments/general_and_laparoscopic_surgery",
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "Trauma Orthopedic & Joint Replacement",
      icon: "/images/icon/trauma.png",
      link: "departments/trauma_orthopedic_and_joint_replacement",
      color: "from-yellow-500 to-amber-500",
    },
    {
      name: "Oncology & Onco-Surgery",
      icon: "/images/icon/oncology.png",
      link: "departments/oncology_and_Onco-surgery",
      color: "from-purple-600 to-indigo-600",
    },
    {
      name: "Gastroenterology & GI Surgery",
      icon: "/images/icon/gastroenterology.png",
      link: "departments/gastroenterology_and_gi_surgery",
      color: "from-emerald-500 to-green-600",
    },
    {
      name: "Neurology & Neurosurgery",
      icon: "/images/icon/neurology.png",
      link: "departments/neurology_and_neurosurgery",
      color: "from-blue-500 to-violet-500",
    },
    {
      name: "Nephrology & Urology",
      icon: "/images/icon/nephrology.png",
      link: "departments/nephrology_and_urology",
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Cardiology",
      icon: "/images/icon/cardiology.png",
      link: "departments/cardiology",
      color: "from-red-500 to-pink-500",
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Parallax Effect */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[300px] overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900"
      >
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Our Departments
          </motion.h1>
          <motion.nav
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
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
              <li className="font-semibold">Departments</li>
            </ol>
          </motion.nav>
        </div>
      </motion.section>
      {/* Departments Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${dept.color}`}></div>
                  <div className="p-6">
                    <div className="mb-6">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${dept.color} p-3 mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Image
                          width={64}
                          height={64}
                          src={dept.icon}
                          alt={dept.name}
                          className="w-full h-full object-contain filter brightness-0 invert"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
                        {dept.name}
                      </h3>
                    </div>
                    <div className="text-center">
                      <a
                        href={dept.link}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 transition-all duration-300 group"
                      >
                        <span>Learn More</span>
                        <ArrowRight
                          size={16}
                          className="transform group-hover:translate-x-1 transition-transform"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default page;
