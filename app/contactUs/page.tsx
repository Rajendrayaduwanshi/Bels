"use client";
import React, { useState } from "react";
import { MapPin, Phone, Mail, Send, Facebook } from "lucide-react";
import { FaFacebookSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { SlSocialYoutube } from "react-icons/sl";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  subject: string;
  message: string;
}
const page = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      // Clear form and show success message
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        subject: "",
        message: "",
      });
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error ? error.message : "Failed to send message",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="bg-gray-50">
      {/* Hero Section with Parallax Effect */}
      {/* Hero Section */}
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
            Contact Us
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
              <li className="font-semibold">Contact Us</li>
            </ol>
          </motion.nav>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Get in Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="bg-white p-8 md:p-10 shadow-xl rounded-2xl">
                <h3 className="text-2xl font-bold mb-8 text-gray-800">
                  Make an Appointment
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name*"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email*"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message.."
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all transform hover:scale-105"
                  >
                    <Send className="w-6 h-6" />
                    {isSubmitting ? "Sending..." : "Send Message"}{" "}
                  </button>
                  {submitStatus.type === "success" && (
                    <p className="text-green-500">
                      {submitStatus.message || "Message sent successfully"}
                    </p>
                  )}
                </form>
              </div>
            </motion.div>
            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white p-8 shadow-xl rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Quick Contact
              </h3>
              <p className="text-gray-600 mb-8">
                If you have any questions simply use the following contact
                details.
              </p>
              <div className="space-y-8">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4 group text-sm"
                >
                  <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-gray-700 ">
                    BELS Hospital Road Next to, Induse Empire (Phase 3),
                    Bawadiya Kalan, Bhopal
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 group text-sm"
                >
                  <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-gray-700">
                    <ul className="space-y-1">
                      <li>+91 8982301793</li>
                      <li>+91 9935754963</li>
                      <li>+91 9584903991</li>
                      <li>0755-352 3939</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 group text-sm"
                >
                  <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-gray-700">belshospital@gmail.com</p>
                </motion.div>
              </div>
              {/* Social Links */}
              <div className="mt-12 border-t pt-8">
                <h4 className="text-lg font-semibold mb-4 text-gray-800">
                  Follow Us
                </h4>
                <div className="flex space-x-6">
                  <a
                    href="https://www.facebook.com/BELSIVF/"
                    className="bg-gray-100 p-3 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all"
                  >
                    <i className="fab fa-facebook text-xl"></i>
                    <FaFacebookSquare className="text-xl text-blue-700" />
                  </a>
                  <a
                    href="https://www.instagram.com/bels_bhopal/"
                    className="bg-gray-100 p-3 rounded-lg text-gray-600 hover:bg-pink-50 hover:text-pink-600 transition-all"
                  >
                    <i className="fab fa-instagram text-xl"></i>
                    <FaInstagram className="text-xl  text-pink-500" />
                  </a>
                  <a
                    href="/"
                    className="bg-gray-100 p-3 rounded-lg text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-all"
                  >
                    <i className="fa-brands fa-x-twitter text-xl"></i>
                    <CiTwitter className="text-xl" />
                  </a>
                  <a
                    href="https://www.youtube.com/@drshraddhaagarwalbhopal4320"
                    className="bg-gray-100 p-3 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all"
                  >
                    <i className="fab fa-youtube text-xl"></i>
                    <SlSocialYoutube className="text-xl text-red-500" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="h-[650px] w-full"
      >
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3237.7817254750566!2d77.42520467531874!3d23.185678979059738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDExJzA4LjQiTiA3N8KwMjUnNDAuMCJF!5e1!3m2!1sen!2sin!4v1739694608658!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        /> */}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3237.7817254750566!2d77.42520467531874!3d23.185678979059738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDExJzA4LjQiTiA3N8KwMjUnNDAuMCJF!5e1!3m2!1sen!2sin!4v1739694608658!5m2!1sen!2sin"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.section>
    </div>
  );
};
export default page;
