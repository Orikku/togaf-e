import Widget from "./components/Widget";
import VideoSection from "./components/VideoSection";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      {/* HEADER */}
      <header className="bg-indigo-600 text-white py-6 shadow-md">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold">
            Fase E de TOGAF – Oportunidades y Soluciones
          </h1>
          <p className="mt-2 text-indigo-100">
            Caso de estudio: Automatización de auditorías para PYMES
          </p>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-10">
        {/* VIDEO SECTION (mejorada con imagen de portada) */}
        <VideoSection />

        {/* WIDGET SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Widget
            title="Objetivos Clave"
            content={
              <ul className="list-disc ml-4 space-y-2">
                <li>Desarrollar la Hoja de Ruta de la Arquitectura.</li>
                <li>Identificar oportunidades, soluciones y dependencias.</li>
                <li>Definir arquitecturas de transición.</li>
                <li>Validar viabilidad técnica y de negocio.</li>
              </ul>
            }
          />
          <Widget
            title="Técnicas del Roadmap"
            content={
              <ul className="list-disc ml-4 space-y-2">
                <li>Definición de entregables y componentes prioritarios.</li>
                <li>Diagramas de transición arquitectónica.</li>
                <li>Análisis de brechas (Gap Analysis).</li>
                <li>Modelado de dependencias entre fases.</li>
              </ul>
            }
          />
          <Widget
            title="Rol de las Arquitecturas de Transición"
            content={
              <ul className="list-disc ml-4 space-y-2">
                <li>Guiar la implementación progresiva de la arquitectura.</li>
                <li>Reducir riesgos y complejidad técnica.</li>
                <li>Permitir entregas intermedias de valor.</li>
                <li>Dar visibilidad al progreso del cambio.</li>
              </ul>
            }
          />
        </section>
      </main>

      {/* FOOTER BANNER */}
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
