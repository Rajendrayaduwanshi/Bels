import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DirectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  director: {
    name: string;
    title: string;
    image: string;
    alt: string;
    description: string;
  };
}

const DirectorsModal = ({ isOpen, onClose, director }: DirectorModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-[300px] md:h-full">
                <img
                  src={director.image}
                  alt={director.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">{director.name}</h3>
                  <p className="text-white/90">{director.title}</p>
                </div>
              </div>
              <div className="p-6 md:p-8 overflow-y-auto max-h-[500px] md:max-h-[600px] custom-scrollbar">
                <h4 className="text-xl font-semibold mb-4">
                  About {director.name}
                </h4>
                <div className="space-y-4 text-gray-600">
                  {director.description
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DirectorsModal;
