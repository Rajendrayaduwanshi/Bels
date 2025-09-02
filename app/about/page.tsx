"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  CreditCard,
  Ambulance,
  Milk,
  User,
  Church,
  Pill,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const iconMap = {
  transport: Ambulance,
  drink: Milk,
  avatar: User,
  church: Church,
  phone: Phone,
  medical: Pill,
} as const;

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ReactNode;
}

const page = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Where is the hospital located?",
      answer:
        "BELS Hospital Is Situated Next to Induse Empire (Phase 3), Bawadiya Kalan, Bhopal, MP 462026",
      icon: <MapPin className="w-5 h-5 text-blue-600" />,
    },
    {
      question: "What are the visiting hours?",
      answer:
        "Our general visiting hours are from 10:00 AM to 8:00 PM daily. However, these hours may vary for different departments and special care units. Please check with the specific ward for exact timings.",
      icon: <Clock className="w-5 h-5 text-blue-600" />,
    },
    {
      question: "How many visitors are allowed at a time?",
      answer:
        "To maintain a peaceful environment for our patients, we allow two visitors per patient at a time. This policy may be adjusted based on the patient's condition and department guidelines.",
      icon: <Users className="w-5 h-5 text-blue-600" />,
    },
    {
      question: "What is the deposit amount for admission?",
      answer:
        "The admission deposit varies depending on the type of treatment and room category selected. Please contact our admission desk for specific details about your case.",
      icon: <CreditCard className="w-5 h-5 text-blue-600" />,
    },
    {
      question: "How can I schedule an appointment?",
      answer:
        "You can schedule an appointment by calling our reception at [phone number] or visiting our hospital during working hours. We also offer online appointment booking through our website.",
      icon: <Phone className="w-5 h-5 text-blue-600" />,
    },
  ];

  const features = [
    {
      title: "24 Hrs Ambulance",
      icon: "transport",
      description:
        "How all this mistaken idea denoucing pleasure and praisings pain was born complete account expound.",
    },
    {
      title: "Food & Dietary",
      icon: "drink",
      description:
        "There anyone who loves or pursues or to obtain pain of itself, because it is but because occasionally.",
    },
    {
      title: "Special Nurses",
      icon: "avatar",
      description:
        "Pursues or desires to obtain pain itself, because is pain, because occasionally circumstances occur procure.",
    },
    {
      title: "Places of Worship",
      icon: "church",
      description:
        "Undertakes laborious physical exercise, except to obtain some advantage from it but who has any right.",
    },
    {
      title: "Pathology",
      icon: "phone",
      description:
        "Bels Hospital boasts state-of-the-art pathology facilities staffed by expert professionals, ensuring accurate diagnoses and effective treatment planning.",
    },
    {
      title: "Pharmacy",
      icon: "medical",
      description:
        "Pursues or desires to obtain pain itself, because is pain, because occasionally circumstances occur procure.",
    },
  ];

  const doctors = [
    {
      name: "Dr. Atul Kumar Agarwal",
      image: "/Dr Atul Agarwal.jpeg",
      role: "Consultant Laparoscopic & GI Surgeon",
      description: `Dr. Atul Kumar Agarwal is a highly accomplished Consultant Laparoscopic & GI Surgeon based in Bhopal, India. He possesses an impressive array of qualifications, including MBBS, MS, MRCS (Edin-UK), DMAS (France), FIAGES, FMAS, and MIHS.`,
    },
    {
      name: "Dr. Shraddha Agarwal",
      image: "/shraddha mam final pic web.png",
      role: "Reproductive Medicine Consultant",
      description: `Dr. Shraddha Agarwal is a highly accomplished Reproductive Medicine Consultant and Laparoscopic & Endoscopic Gynaecologist with a wealth of experience and qualifications.`,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[300px] overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900"
      >
        {/* <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div> */}
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold text-white mb-6"
          >
            About Us
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
              <li className="font-semibold">About Us</li>
            </ol>
          </motion.nav>
        </div>
      </motion.section>

      {/* Welcome Section */}
      {/* <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src="/belsHopital.jpg"
              alt="BELS Hospital"
              className="rounded-lg shadow-lg"
            />
            <div className="mt-4 text-gray-600">
              <p>Bhopal Endoscopy And Laparoscopic Surgery (BELS)</p>
              <p>
                Address: BELS Hospital Road Next to, Induse Empire (Phase 3),
                Bawadiya Kalan, Bhopal
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Welcome to The BELS Hospital
            </h2>
            <p className="text-gray-600 mb-8">
              Your surgical Journey and Your health is our priority. We provide
              exceptional Surgical Care. Our team of doctors offer surgical
              expertise with unmatched precision.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  Patient health is of paramount importance to us. From the
                  moment a patient walks in, our focus is on ensuring well-being
                  and compassionate care by our staff.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                <p className="text-gray-600">
                  A seamless blend of surgical excellence and patient-centered
                  care. We aspire to redefine healthcare by prioritizing
                  precision, compassion, and patient well-being above all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <Image
                width={800}
                height={450}
                src="/hospital-real.jpeg"
                alt="Hospital"
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

      {/* Features Grid */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap]; // Fix here
              return (
                <div
                  key={index}
                  className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-start"
                >
                  {Icon && <Icon className="w-10 h-10 text-blue-600 mb-4" />}
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Doctors Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Directors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                width={400}
                height={400}
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-96 object-center rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-2">{doctor.name}</h3>
              <h4 className="text-lg text-blue-600 mb-4">{doctor.role}</h4>
              <p className="text-gray-600">{doctor.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-12">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            If you are a patient seeking quality healthcare at affordable
            prices!
          </h2>
          <button
            onClick={() => window.open("/contactUs", "_blank")}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Make an Appointment
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl text-center font-bold mb-12">
          Frequently Asked Questions
        </h1>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <div className="flex items-center gap-3">
                    {faq.icon}
                    <span className="font-medium text-gray-900">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
