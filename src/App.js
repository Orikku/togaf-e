import Widget from "./components/Widget";
import VideoSection from "./components/VideoSection";
import Hero from "./components/Hero";
import RoadMap from "./components/RoadMap";

if (typeof document !== "undefined") {
	document.documentElement.style.scrollBehavior = "smooth";
}

function App() {
	return (
		<div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
			<Hero />

			<main className="flex-grow max-w-7xl mx-auto px-6 py-10">
				<VideoSection />

				<section className="bg-gray-900 text-white rounded-3xl py-12 px-8 mt-16 shadow-xl max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
						<div className="col-span-1 md:col-span-1 flex flex-col justify-center">
							<h2 className="text-3xl font-bold mb-4">Explora los pilares de la Fase E</h2>
							<p className="text-gray-300 mb-6">
								Comprende cómo TOGAF orienta la planificación arquitectónica mediante objetivos claros, hojas de ruta
								estratégicas y arquitecturas de transición.
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
								title="Técnicas del Mapa de Transición Arquitectónica"
								content={
									<ul className="list-disc ml-4 space-y-2 text-black leading-relaxed">
										<li>
											<b>Roadmap de Implementación:</b> Representa la evolución desde la arquitectura base
											hasta el estado objetivo.
										</li>
										<li>
											<b>Diagramas de Transición:</b> Ilustran los cambios tecnológicos y de flujo de
											información por fase.
										</li>
										<li>
											<b>Gap Analysis:</b> Identifica diferencias entre el estado actual y el deseado,
											priorizando mejoras.
										</li>
										<li>
											<b>Mapas de Dependencias:</b> Coordina fases para evitar retrasos e incompatibilidades.
										</li>
										<li>
											<b>Priorización de Proyectos:</b> Evalúa impacto, costo y beneficio para optimizar el
											retorno de inversión.
										</li>
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

				<section className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
					<Widget
						title="Obstáculos y Estrategias"
						content={
							<ul className="space-y-2 list-disc ml-4 text-black">
								<li>🧱 Escasez de datos digitalizados → 🔧 Integrar OCR y recolección automatizada.</li>
								<li>🧱 Resistencia de auditores → 🔧 Capacitaciones y piloto de adopción gradual.</li>
								<li>🧱 Limitaciones presupuestales → 🔧 Implementación modular por fases.</li>
							</ul>
						}
					/>

					<Widget
						title="Valor y Costo del Cambio"
						content={
							<div className="text-black">
								<p className="mb-2">La automatización optimiza recursos humanos y reduce costos operativos:</p>
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

				<section className="mt-20 bg-white rounded-3xl shadow-xl p-10">
					<h2 className="text-3xl font-bold text-center mb-8 text-indigo-700">Costos Hipotéticos e Incertidumbre</h2>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
						<div className="bg-gray-100 rounded-2xl p-6 shadow-inner">
							<h3 className="text-2xl font-semibold mb-4 text-black text-center">Costos</h3>
							<table className="w-full text-left border-collapse text-black">
								<thead>
									<tr className="border-b border-gray-300">
										<th className="py-2 font-bold">Concepto</th>
										<th className="py-2 font-bold">Costo Estimado (USD)</th>
									</tr>
								</thead>
								<tbody>
									<tr className="border-b border-gray-200">
										<td className="py-2">Desarrollo del sistema web</td>
										<td className="py-2">$18,000</td>
									</tr>
									<tr className="border-b border-gray-200">
										<td className="py-2">Implementación de IA y OCR</td>
										<td className="py-2">$8,000</td>
									</tr>
									<tr className="border-b border-gray-200">
										<td className="py-2">Capacitación del personal</td>
										<td className="py-2">$2,000</td>
									</tr>
									<tr className="border-b border-gray-200">
										<td className="py-2">Infraestructura y hosting anual</td>
										<td className="py-2">$1,500</td>
									</tr>
									<tr className="font-semibold text-indigo-700">
										<td className="py-2">Costo total aproximado</td>
										<td className="py-2">$29,500</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div className="bg-gray-100 rounded-2xl p-6 shadow-inner">
							<h3 className="text-2xl font-semibold mb-4 text-black text-center">Incertidumbre y Mitigación</h3>
							<ul className="list-disc ml-6 space-y-3 text-black leading-relaxed">
								<li>
									<b>Tecnológica:</b> riesgo de incompatibilidad entre módulos o fallas en la IA.
									<span className="text-indigo-700"> Mitigación:</span> pruebas piloto y despliegue gradual por fases.
								</li>
								<li>
									<b>Humana:</b> resistencia de auditores al cambio y curva de aprendizaje.
									<span className="text-indigo-700"> Mitigación:</span> capacitaciones progresivas y acompañamiento técnico.
								</li>
								<li>
									<b>Económica:</b> variaciones de costo o retrasos en desarrollo.
									<span className="text-indigo-700"> Mitigación:</span> planificación flexible y fases modulares de inversión.
								</li>
							</ul>
						</div>
					</div>
				</section>

				<RoadMap />
			</main>

			<footer className="bg-indigo-700 text-white py-8 mt-10 text-center">
				<h2 className="text-lg font-semibold">Arquitectura Empresarial TOGAF - Fase E: Oportunidades y Soluciones</h2>
				<p className="mt-2 text-indigo-200">
					Caso de estudio: Automatización de procesos de auditoría para PYMES <br />
					<span className="font-semibold">Daniel Estevez, Mateo Olarte - Universidad Libre - 2025</span>
				</p>
			</footer>
		</div>
	);
}

export default App;
