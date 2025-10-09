import { motion } from "framer-motion";
import { useState } from "react";

function Widget({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="bg-white text-black rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between border border-gray-200"
      whileHover={{ scale: 1.02 }}
      onClick={() => setOpen(!open)}
    >
      {/* Título */}
      <h3 className="text-xl font-semibold mb-3 text-indigo-700 flex items-center gap-2">
        {title}
      </h3>

      {/* Contenido desplegable */}
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-base text-black leading-relaxed"
        >
          {content}
        </motion.div>
      ) : (
        <p className="text-gray-600 italic select-none">
          Haz clic para ver más información
        </p>
      )}
    </motion.div>
  );
}

export default Widget;
