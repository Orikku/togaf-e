import Widget from "./components/Widget";
import VideoSection from "./components/VideoSection";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-4 text-center shadow-lg">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-3">
            Arquitectura Empresarial TOGAF - Fase E
          </h1>
          <p className="text-indigo-100 text-lg">
            Oportunidades y Soluciones: Caso de Estudio – Automatización de
            Procesos de Auditoría para PYMES
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-10">
        {/* VIDEO SECTION */}
        <VideoSection />

        {/* WIDGETS SECTION */}
        <section className="bg-gray-900 text-white rounded-3xl py-12 px-8 mt-16 shadow-xl max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            {/* INTRO TEXT */}
            <div className="col-span-1 md:col-span-1 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">
                Explora los pilares de la Fase E
              </h2>
              <p className="text-gray-300 mb-6">
                Comprende cómo TOGAF orienta la planificación arquitectónica mediante
                objetivos claros, hojas de ruta estratégicas y arquitecturas de transición.
              </p>

              <ul className="space-y-3 text-gray-200">
                <li className="flex items-center gap-3">
                  <span className="bg-indigo-600 p-2 rounded-full">🎯</span>
                  Define metas y oportunidades
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-green-600 p-2 rounded-full">🧭</span>
                  Crea rutas de implementación
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-yellow-500 p-2 rounded-full">⚙️</span>
                  Asegura una transición efectiva
                </li>
              </ul>
            </div>

            {/* WIDGETS */}
            <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Widget
                title="Objetivos Clave"
                content={
                  <ul className="list-disc ml-4 space-y-2 text-black">
                    <li>Desarrollar la Hoja de Ruta de la Arquitectura.</li>
                    <li>Identificar oportunidades, dependencias y limitaciones.</li>
                    <li>Definir arquitecturas de transición viables.</li>
                    <li>Seleccionar la mejor estrategia de implementación.</li>
                    <li className="text-indigo-700 font-semibold">
                      Se eligió la automatización total por su mayor reducción de tiempo y error humano.
                    </li>
                  </ul>
                }
              />

              <Widget
                title="Técnicas del Roadmap"
                content={
                  <ul className="list-disc ml-4 space-y-2 text-black">
                    <li>Definición de entregables y prioridades por impacto.</li>
                    <li>Uso de diagramas de transición arquitectónica.</li>
                    <li>Análisis de brechas (Gap Analysis).</li>
                    <li>Modelado de dependencias entre fases.</li>
                    <li>Priorización de beneficios y riesgos.</li>
                  </ul>
                }
              />

              <Widget
                title="Rol de las Arquitecturas de Transición"
                content={
                  <ul className="list-disc ml-4 space-y-2 text-black">
                    <li>Reducir riesgos mediante fases intermedias.</li>
                    <li>Permitir entregas progresivas de valor.</li>
                    <li>Guiar la evolución tecnológica y organizacional.</li>
                    <li>Garantizar compatibilidad con la arquitectura final.</li>
                  </ul>
                }
              />
            </div>
          </div>
        </section>

        {/* ADDITIONAL CRITERIA SECTIONS */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <Widget
            title="Obstáculos y Estrategias"
            content={
              <ul className="space-y-2 list-disc ml-4 text-black">
                <li>
                  🧱 Escasez de datos digitalizados → 🔧 Integrar OCR y recolección automatizada.
                </li>
                <li>
                  🧱 Resistencia de auditores → 🔧 Capacitaciones y piloto de adopción gradual.
                </li>
                <li>
                  🧱 Limitaciones presupuestales → 🔧 Implementación modular por fases.
                </li>
              </ul>
            }
          />

          <Widget
            title="Valor y Costo del Cambio"
            content={
              <div className="text-black">
                <p className="mb-2">
                  La automatización optimiza recursos humanos y reduce costos operativos:
                </p>
                <ul className="space-y-1">
                  <li>⏱️ Reducción del tiempo de auditoría: <b>45%</b></li>
                  <li>💰 Disminución de costos: <b>30%</b></li>
                  <li>📊 ROI esperado: <b>1.8 en 6 meses</b></li>
                  <li>✅ Mejora en precisión de informes: <b>+25%</b></li>
                </ul>
              </div>
            }
          />
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-indigo-700 text-white py-8 mt-10 text-center">
        <h2 className="text-lg font-semibold">
          Arquitectura Empresarial TOGAF - Fase E: Oportunidades y Soluciones
        </h2>
        <p className="mt-2 text-indigo-200">
          Caso de estudio: Automatización de procesos de auditoría para PYMES <br />
          <span className="font-semibold">
            Daniel Estevez - Universidad Libre - 2025
          </span>
        </p>
      </footer>
    </div>
  );
}

export default App;
