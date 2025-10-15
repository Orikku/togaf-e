import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const defaultPhases = [
	{
		title: "Mapa de Calor de Capacidades",
		content: <HeatMapPhase />,
	},
	{
		title: "Diagrama de Gantt",
		content: <GanttPhase />,
	},
	{
		title: "Paquetes de Trabajo",
		content: <WorkPackagesPhase />,
	},
	{
		title: "Escenarios",
		content: <ScenariosPhase />,
	},
	{
		title: "Arquitecturas de Transición",
		content: <TransitionArchitecturesPhase />,
	},
];

// Genera puntos y ruta suave segun cantidad de items
const VIEW_W = 1200;
const VIEW_H = 400;
const genPoints = (n) => {
	if (n <= 0) return [];
	if (n === 1) return [{ x: VIEW_W / 2, y: VIEW_H * 0.55 }];
	const m = 0.06 * VIEW_W; // margen
	const amp = VIEW_H * 0.22; // amplitud
	const base = VIEW_H * 0.65; // línea base
	const span = VIEW_W - m * 2;
	const pts = [];
	for (let i = 0; i < n; i++) {
		const t = i / (n - 1);
		const x = m + t * span;
		const y = base - Math.sin(t * Math.PI) * amp;
		pts.push({ x, y });
	}
	return pts;
};

const controlPoint = (current, previous, next, reverse = false, smoothing = 0.2) => {
	const p = previous || current;
	const n = next || current;
	const o = { x: n.x - p.x, y: n.y - p.y };
	const len = Math.sqrt(o.x * o.x + o.y * o.y) || 1;
	const angle = Math.atan2(o.y, o.x) + (reverse ? Math.PI : 0);
	const length = (len * smoothing) / 2;
	return { x: current.x + Math.cos(angle) * length, y: current.y + Math.sin(angle) * length };
};

const svgPathFromPoints = (points) => {
	if (!points.length) return "";
	if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;
	const d = points.reduce((acc, point, i, a) => {
		if (i === 0) return `M ${point.x} ${point.y}`;
		const cps = controlPoint(a[i - 1], a[i - 2], point, false);
		const cpe = controlPoint(point, a[i - 1], a[i + 1], true);
		return `${acc} C ${cps.x} ${cps.y}, ${cpe.x} ${cpe.y}, ${point.x} ${point.y}`;
	}, "");
	return d;
};

const RoadMap = ({ items = defaultPhases }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const phases = items.length ? items : defaultPhases;
	const points = genPoints(phases.length);
	const pathD = svgPathFromPoints(points);

	return (
		<section id="roadmap" className="mt-20">
			<div className="text-center mb-8">
				<h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">Roadmap del Proyecto</h2>
				<p className="text-gray-600 max-w-2xl mx-auto">
					Explora las fases clave y su propósito. Haz clic en cada hito para ver detalles.
				</p>
			</div>

			<div className="relative w-full h-[360px] md:h-[420px] bg-gray-100 rounded-3xl overflow-hidden border border-gray-200">
				<svg
					className="absolute inset-0 w-full h-full"
					viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
					preserveAspectRatio="none"
					aria-hidden
				>
					<path
						d={pathD}
						fill="none"
						stroke="#111827"
						strokeWidth="14"
						strokeLinecap="round"
						strokeDasharray="14 26"
						opacity="0.25"
					/>
				</svg>

				{points.map((pt, idx) => (
					<motion.button
						key={idx}
						type="button"
						aria-label={`Fase ${idx + 1}: ${phases[idx]?.title ?? ""}`}
						onClick={() => setActiveIndex(idx)}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") setActiveIndex(idx);
						}}
						className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
						style={{ left: `${(pt.x / VIEW_W) * 100}%`, top: `${(pt.y / VIEW_H) * 100}%` }}
					>
						<div
							className={`relative w-16 h-16 md:w-18 md:h-18 rounded-full ring-4 transition-all ${
								activeIndex === idx ? "ring-indigo-400/70" : "ring-black/30"
							}`}
						>
							<div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-700 to-purple-700" />
							<div className="absolute inset-0 rounded-full grid place-items-center text-white font-bold text-lg">
								{idx + 1}
							</div>
							<div className="absolute -bottom-1 inset-x-2 h-2 rounded-full bg-black/10 blur-md" />
						</div>
					</motion.button>
				))}
			</div>

			<AnimatePresence mode="wait">
				{phases.length > 0 && (
					<motion.div
						key={activeIndex}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.25 }}
						className="mt-8 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm max-w-4xl mx-auto"
					>
						<div className="flex items-start gap-4">
							<div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-indigo-700 to-purple-700 grid place-items-center text-white font-bold">
								{activeIndex + 1}
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-1">{phases[activeIndex]?.title}</h3>
								{phases[activeIndex]?.content}
							</div>
						</div>

						<div className="mt-6 flex justify-between">
							<button
								type="button"
								className="px-4 py-2 text-sm rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800"
								onClick={() => setActiveIndex((a) => Math.max(0, a - 1))}
							>
								Anterior
							</button>
							<button
								type="button"
								className="px-4 py-2 text-sm rounded-full bg-gray-900 text-white hover:bg-gray-800"
								onClick={() => setActiveIndex((a) => Math.min(phases.length - 1, a + 1))}
							>
								Siguiente
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

function HeatMapPhase() {
	const capacidades = [
		{
			nombre: "Automatización de Recolección de Evidencia",
			valor: "Alto",
			costo: "Medio",
			incertidumbre: "Bajo",
			prioridad: "Alto",
		},
		{
			nombre: "Análisis Inteligente de Datos de Auditoría (IA)",
			valor: "Alto",
			costo: "Alto",
			incertidumbre: "Medio",
			prioridad: "Alto",
		},
		{
			nombre: "Integración con Sistemas Contables de PYMES",
			valor: "Medio",
			costo: "Medio",
			incertidumbre: "Medio",
			prioridad: "Medio",
		},
		{
			nombre: "Gestión de Reportes y Documentación Automática",
			valor: "Alto",
			costo: "Bajo",
			incertidumbre: "Bajo",
			prioridad: "Alto",
		},
		{
			nombre: "Seguridad y Cumplimiento Normativo (DIAN, NIIF)",
			valor: "Alto",
			costo: "Alto",
			incertidumbre: "Alto",
			prioridad: "Medio",
		},
		{
			nombre: "Portal de Clientes y Comunicación Transparente",
			valor: "Medio",
			costo: "Medio",
			incertidumbre: "Bajo",
			prioridad: "Medio",
		},
		{
			nombre: "Analítica Empresarial y Control de Desempeño",
			valor: "Alto",
			costo: "Medio",
			incertidumbre: "Medio",
			prioridad: "Alto",
		},
	];

	const colorMap = {
		Alto: "bg-red-500 text-white",
		Medio: "bg-yellow-400 text-black",
		Bajo: "bg-green-400 text-black",
	};

	return (
		<div className="bg-white p-8 rounded-3xl shadow-xl max-w-5xl mx-auto">
			<h3 className="text-3xl font-bold text-center text-indigo-700 mb-8">Mapa de Calor de Capacidades</h3>

			<div className="overflow-x-auto">
				<table className="min-w-full border border-gray-300 rounded-lg text-center">
					<thead>
						<tr className="bg-gray-100">
							<th className="py-3 px-4 border-b border-gray-300 font-semibold text-gray-700">Capacidad</th>
							<th className="py-3 px-4 border-b border-gray-300 font-semibold text-gray-700">Valor</th>
							<th className="py-3 px-4 border-b border-gray-300 font-semibold text-gray-700">Costo</th>
							<th className="py-3 px-4 border-b border-gray-300 font-semibold text-gray-700">Incertidumbre</th>
							<th className="py-3 px-4 border-b border-gray-300 font-semibold text-gray-700">Prioridad</th>
						</tr>
					</thead>
					<tbody>
						{capacidades.map((cap, i) => (
							<tr key={i} className="border-t border-gray-200">
								<td className="py-3 px-4 border-b border-gray-300 text-gray-800 font-medium text-left">{cap.nombre}</td>
								<td className={`py-3 px-4 border-b border-gray-300 ${colorMap[cap.valor]}`}>{cap.valor}</td>
								<td className={`py-3 px-4 border-b border-gray-300 ${colorMap[cap.costo]}`}>{cap.costo}</td>
								<td className={`py-3 px-4 border-b border-gray-300 ${colorMap[cap.incertidumbre]}`}>
									{cap.incertidumbre}
								</td>
								<td className={`py-3 px-4 border-b border-gray-300 ${colorMap[cap.prioridad]}`}>{cap.prioridad}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<p className="text-sm text-gray-600 text-center mt-6">
				<span className="text-red-500 font-semibold">Rojo:</span> Alto &nbsp;|&nbsp;
				<span className="text-yellow-500 font-semibold">Amarillo:</span> Medio &nbsp;|&nbsp;
				<span className="text-green-500 font-semibold">Verde:</span> Bajo
			</p>
		</div>
	);
}

function GanttPhase() {
	const tasks = [
		{ name: "Análisis de capacidades", duration: "Ene - Feb", color: "bg-indigo-500" },
		{ name: "Diseño de arquitectura", duration: "Mar - Abr", color: "bg-blue-500" },
		{ name: "Prototipo y pruebas", duration: "May - Jul", color: "bg-green-500" },
		{ name: "Implementación gradual", duration: "Ago - Oct", color: "bg-yellow-500" },
		{ name: "Optimización y cierre", duration: "Nov - Dic", color: "bg-purple-500" },
	];

	return (
		<div className="bg-white p-6 rounded-2xl shadow-md">
			<h3 className="text-2xl font-semibold text-indigo-700 mb-4 text-center">Diagrama de Gantt</h3>
			<p className="text-gray-700 mb-6 text-justify">
				El cronograma de implementación define los tiempos de ejecución por fases, asegurando que cada entregable esté
				alineado con los recursos disponibles y las dependencias del proyecto. El enfoque escalonado permite mitigar
				riesgos tecnológicos y financieros.
			</p>
			<div className="space-y-4">
				{tasks.map((task, i) => (
					<div key={i}>
						<p className="font-semibold text-gray-700">{task.name}</p>
						<div className="w-full bg-gray-200 h-4 rounded-full">
							<div className={`${task.color} h-4 rounded-full`} style={{ width: `${20 * (i + 1)}%` }}></div>
						</div>
						<p className="text-sm text-gray-500 mt-1">{task.duration}</p>
					</div>
				))}
			</div>
		</div>
	);
}

function WorkPackagesPhase() {
	const packages = [
		{ name: "Infraestructura Digital", desc: "Modernización de servidores y seguridad de datos." },
		{ name: "IA de Auditoría", desc: "Desarrollo del motor de análisis automatizado." },
		{ name: "Capacitación", desc: "Formación del personal y manuales técnicos." },
		{ name: "Integración API", desc: "Conexión con sistemas contables existentes." },
		{ name: "Evaluación de Resultados", desc: "Medición del impacto financiero y de productividad." },
	];

	return (
		<div className="bg-white p-6 rounded-2xl shadow-md">
			<h3 className="text-2xl font-semibold text-indigo-700 mb-4 text-center">Paquetes de Trabajo</h3>
			<p className="text-gray-700 leading-relaxed mb-6 text-justify">
				Los paquetes de trabajo agrupan actividades específicas para optimizar la ejecución y el control del proyecto.
				Cada paquete tiene responsables definidos, objetivos medibles y un presupuesto estimado.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{packages.map((pkg, i) => (
					<div key={i} className="border border-gray-300 p-4 rounded-xl hover:shadow-lg transition">
						<h4 className="font-semibold text-indigo-600">{pkg.name}</h4>
						<p className="text-gray-600 mt-2">{pkg.desc}</p>
					</div>
				))}
			</div>
		</div>
	);
}

function ScenariosPhase() {
	return (
		<div className="bg-white p-6 rounded-2xl shadow-md">
			<h3 className="text-2xl font-semibold text-indigo-700 mb-4 text-center">Escenarios</h3>
			<p className="text-gray-700 mb-6 text-justify">
				Los escenarios permiten visualizar cómo reaccionará la organización ante distintos contextos futuros. Se
				analizan las variables económicas, tecnológicas y humanas que podrían alterar la adopción del sistema
				automatizado, facilitando la anticipación y adaptación a cambios.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-800">
				<div className="p-4 bg-green-100 rounded-xl">
					<h4 className="font-semibold text-green-700 mb-2">Optimista</h4>
					<p>Adopción total, ROI anticipado y expansión de la automatización a nuevas áreas.</p>
				</div>
				<div className="p-4 bg-yellow-100 rounded-xl">
					<h4 className="font-semibold text-yellow-700 mb-2">Moderado</h4>
					<p>Adopción gradual, resultados estables y necesidad de ajustes técnicos menores.</p>
				</div>
				<div className="p-4 bg-red-100 rounded-xl">
					<h4 className="font-semibold text-red-700 mb-2">Crítico</h4>
					<p>Retrasos por resistencia o costos, mitigados mediante pilotos y retroalimentación constante.</p>
				</div>
			</div>
		</div>
	);
}

function TransitionArchitecturesPhase() {
	return (
		<div className="bg-white p-6 rounded-2xl shadow-md">
			<h3 className="text-2xl font-semibold text-indigo-700 mb-4 text-center">Arquitecturas de Transición</h3>
			<p className="text-gray-700 leading-relaxed mb-6 text-justify">
				La arquitectura de transición actúa como un puente entre el entorno actual y la visión objetivo. Cada iteración
				reduce el impacto operativo y acelera la madurez digital. Las fases se articulan con entregas parciales que
				permiten validar resultados tempranos y corregir desviaciones antes del despliegue final.
			</p>
			<div className="relative flex items-center justify-center">
				<div className="flex flex-col md:flex-row items-center md:space-x-4">
					{["Actual", "Transición 1", "Transición 2", "Objetivo"].map((phase, i) => (
						<div key={i} className="flex flex-col items-center">
							<div
								className={`w-20 h-20 flex items-center justify-center rounded-full font-semibold text-white ${
									i === 0 ? "bg-gray-400" : i === 3 ? "bg-green-500" : "bg-indigo-500"
								}`}
							>
								{phase}
							</div>
							{i < 3 && <div className="hidden md:block w-16 h-1 bg-gray-300 mx-2"></div>}
						</div>
					))}
				</div>
			</div>
			<p className="text-sm text-gray-500 mt-4 text-center">
				Cada transición incluye validación funcional, capacitación y medición de impacto.
			</p>
		</div>
	);
}

export default RoadMap;
