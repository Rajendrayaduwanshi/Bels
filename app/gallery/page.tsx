"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Search, ZoomIn } from "lucide-react";
import Image from "next/image";
interface GalleryImage {
  src: string;
  categories: string[];
}
const page = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const galleryImages: GalleryImage[] = [
    { src: "/gallery/gallery-1.jpeg", categories: ["robustness", "workouts"] },
    { src: "/gallery/gallery-2.jpeg", categories: ["robustness", "workouts"] },
    { src: "/gallery/gallery-3.jpeg", categories: ["robustness", "workouts"] },
    { src: "/gallery/gallery-4.jpeg", categories: ["robustness", "workouts"] },
    { src: "/gallery/gallery-5.jpeg", categories: ["robustness", "workouts"] },
    { src: "/gallery/gallery-6.jpeg", categories: ["robustness", "workouts"] },
    { src: "/gallery/gallery-7.jpeg", categories: ["robustness", "workouts"] },
    { src: "/gallery/gallery-8.jpeg", categories: ["robustness", "workouts"] },
    { src: "/gallery/gallery-9.jpeg", categories: ["robustness", "workouts"] },
    // { src: "/gallery/gallery-10.jpeg", categories: ["robustness", "workouts"] },
    { src: "/gallery/gallery-11.jpeg", categories: ["robustness", "workouts"] },
    // { src: "/gallery/gallery-12.jpeg", categories: ["robustness", "workouts"] },
    // { src: "/gallery/gallery-13.jpeg", categories: ["robustness", "workouts"] },
    { src: "/gallery/gallery-14.jpeg", categories: ["robustness", "workouts"] },
    { src: "/gallery/gallery-15.jpeg", categories: ["robustness", "workouts"] },
    { src: "/gallery/gallery-16.jpeg", categories: ["robustness", "workouts"] },
    // { src: "/gallery/gallery-17.jpeg", categories: ["robustness", "workouts"] },
    { src: "/gallery/gallery-18.jpeg", categories: ["robustness", "workouts"] },
  ];
  const categories = ["all", "yoga", "food", "workouts", "robustness"];
  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) =>
          img.categories.includes(selectedCategory)
        );
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
            Our Gallery
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
              <li className="font-semibold">Gallery</li>
            </ol>
          </motion.nav>
        </div>
      </motion.section>
      {/* Category Filter */}
      {/* <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </motion.div>
        </div>
      </section> */}
      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg"
              >
                <div className="aspect-w-4 aspect-h-3 relative">
                  <Image
                    width={640}
                    height={400}
                    src={image.src}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-[14.125rem] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center justify-between">
                        {/* <div className="flex flex-wrap gap-2">
                          {image.categories.map((cat, idx) => (
                            <span
                              key={idx}
                              className="text-xs font-medium text-white bg-white/20 px-2 py-1 rounded-full"
                            >
                              {cat}
                            </span>
                          ))}
                        </div> */}
                        {/* <button className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors">
                          <ZoomIn size={20} />
                        </button> */}
                      </div>
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
