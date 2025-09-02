"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const departments = [
  { name: "IVF & Fertility", path: "ivf_and_fertility" },
  { name: "Critical Care", path: "critical_care" },
  { name: "Accident & Emergency", path: "accident_and_emergency" },
  { name: "Radiology & Pathology", path: "radiology_and_path" },
  { name: "Obstetrics & Gynecology", path: "obstetrics_and_gynecology" },
  {
    name: "General and Laparoscopic Surgery",
    path: "general_and_laparoscopic_surgery",
  },
  {
    name: "Trauma Orthopedic & Joint Replacement",
    path: "trauma_orthopedic_and_joint_replacement",
  },
  { name: "Oncology & Onco-Surgery", path: "oncology_and_Onco-surgery" },
  {
    name: "Gastroenterology & GI Surgery",
    path: "gastroenterology_and_gi_surgery",
  },
  { name: "Neurology & Neurosurgery", path: "neurology_and_neurosurgery" },
  { name: "Nephrology & Urology", path: "nephrology_and_urology" },
  { name: "Cardiology", path: "cardiology" },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="bg-white rounded-xl shadow-lg p-6 sticky top-8"
      >
        <h3 className="text-xl font-bold mb-6 text-gray-800">Departments</h3>
        <nav className="space-y-3">
          {departments.map((dept) => {
            const isActive = pathname.includes(dept.path);

            return (
              <motion.a
                key={dept.name}
                href={`/departments/${dept.path}`}
                whileHover={{ x: 10, color: "#2563eb" }}
                className={`flex items-center p-3 rounded-lg transition-all duration-300
                  ${
                    isActive
                      ? "bg-blue-100 text-blue-600 font-semibold"
                      : "text-gray-600 hover:bg-blue-50"
                  }
                `}
              >
                {dept.name}
              </motion.a>
            );
          })}
        </nav>
      </motion.div>
    </div>
  );
};

export default Sidebar;
