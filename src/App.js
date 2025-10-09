import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function App() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      title: "🎯 Objetivos Clave",
      key: "objetivos",
      points: [
        "Construir la hoja de ruta de la arquitectura.",
        "Evaluar y seleccionar arquitecturas candidatas.",
        "Definir arquitecturas de transición.",
        "Identificar paquetes de trabajo.",
        "Alinear con la estrategia de negocio.",
      ],
    },
    {
      title: "🗺️ Técnicas del Mapa de Transición",
      key: "tecnicas",
      points: [
        "Hoja de ruta con pasos anuales.",
        "Mapa de calor para priorizar procesos.",
        "Gráfico de ciclo de vida de sistemas.",
        "Mapa de dependencias e impactos.",
        "Escenarios alternativos de implementación.",
      ],
    },
    {
      title: "🧩 Rol de las Arquitecturas de Transición",
      key: "transicion",
      points: [
        "Reducen el riesgo de transformación.",
        "Permiten planificación progresiva.",
        "Entregan valor incremental.",
        "Sirven de base para la hoja de ruta.",
        "Actúan como puntos de control.",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <div className="max-w-5xl w-full space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-slate-800"
        >
          Fase E de TOGAF: Hoja de Ruta de Arquitectura
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-slate-600 text-lg"
        >
          Caso: Automatización de procesos de auditoría para PYMES
        </motion.p>

        {/* Secciones interactivas */}
        <div className="grid md:grid-cols-3 gap-4">
          {sections.map((section) => (
            <motion.div
              key={section.key}
              className="bg-white shadow-lg rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div
                className="flex justify-between items-center px-6 py-4 cursor-pointer bg-slate-100 hover:bg-slate-200 transition-colors"
                onClick={() => toggleSection(section.key)}
              >
                <h2 className="text-xl font-semibold">{section.title}</h2>
                {openSection === section.key ? <ChevronUp /> : <ChevronDown />}
              </div>
              {openSection === section.key && (
                <div className="p-6 space-y-2">
                  <ul className="list-disc pl-5 text-slate-700 space-y-1">
                    {section.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Video explicativo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-6 mt-10 w-full max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">🎥 Video explicativo</h2>
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg border">
            {/* Reemplaza VIDEO_ID con tu enlace de YouTube */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Video explicativo Fase E"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        <div className="text-center mt-8">
          <button className="bg-slate-800 text-white px-6 py-3 rounded-xl shadow-md hover:bg-slate-700 transition">
            Ver más detalles
          </button>
        </div>
      </div>
    </div>
  );
}
