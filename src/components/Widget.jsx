import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Widget({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="bg-white shadow-lg rounded-2xl p-6 cursor-pointer hover:shadow-xl transition-all w-full md:w-1/3"
      onClick={() => setOpen(!open)}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <ChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 text-gray-600 text-sm"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
