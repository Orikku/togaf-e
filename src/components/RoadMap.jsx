import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const defaultPhases = [
	{
		title: "Definición de Alcance",
		description:
			"Alineación con objetivos del negocio, actores y criterios de éxito. Identificación de dependencias y restricciones iniciales.",
	},
	{
		title: "Mapa de Capacidades",
		description: "Priorización por valor, costo y riesgo. Identificación de quick wins y capacidades habilitadoras.",
	},
	{
		title: "Arquitecturas de Transición",
		description: "Diseño de iteraciones intermedias que reduzcan riesgo y aceleren el delivery incremental.",
	},
	{
		title: "Plan de Implementación",
		description: "Roadmap con releases, dependencias, costos estimados y métricas de adopción.",
	},
	{
		title: "Operación y Mejora Continua",
		description: "Medición de valor, gobierno del cambio y retroalimentación para optimizar el roadmap.",
	},
	{
		title: "Operación y Mejora Continua",
		description: "Medición de valor, gobierno del cambio y retroalimentación para optimizar el roadmap.",
	},
	{
		title: "Operación y Mejora Continua",
		description: "Medición de valor, gobierno del cambio y retroalimentación para optimizar el roadmap.",
	},
	{
		title: "Operación y Mejora Continua",
		description: "Medición de valor, gobierno del cambio y retroalimentación para optimizar el roadmap.",
	},
	{
		title: "Operación y Mejora Continua",
		description: "Medición de valor, gobierno del cambio y retroalimentación para optimizar el roadmap.",
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
								<p className="text-gray-600 leading-relaxed">{phases[activeIndex]?.description}</p>
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

export default RoadMap;
