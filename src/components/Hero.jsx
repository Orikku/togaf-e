import React from "react";

const Hero = () => {
	return (
		<section className="relative bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-12 overflow-hidden">
			<div className="absolute inset-0 pointer-events-none">
				<svg className="absolute top-0 left-0 w-1/2 h-full opacity-30" viewBox="0 0 400 400" fill="none">
					<circle cx="200" cy="200" r="200" fill="url(#paint0_radial)" />

					<defs>
						<radialGradient
							id="paint0_radial"
							cx="0"
							cy="0"
							r="1"
							gradientTransform="translate(200 200) scale(200)"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#a78bfa" />
							<stop offset="1" stopColor="#6366f1" stopOpacity="0" />
						</radialGradient>
					</defs>
				</svg>

				<svg className="absolute bottom-0 right-0 w-1/3 h-1/3 opacity-40" viewBox="0 0 200 200" fill="none">
					<circle cx="100" cy="100" r="100" fill="url(#paint1_radial)" />
					<defs>
						<radialGradient
							id="paint1_radial"
							cx="0"
							cy="0"
							r="1"
							gradientTransform="translate(100 100) scale(100)"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#c4b5fd" />
							<stop offset="1" stopColor="#8b5cf6" stopOpacity="0" />
						</radialGradient>
					</defs>
				</svg>
			</div>

			<div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
				<span className="inline-block bg-white bg-opacity-10 rounded-full px-4 py-1 text-sm font-semibold tracking-wide mb-4 border border-white border-opacity-20 shadow-md animate-pulse">
					Caso de Estudio – Automatización de Auditoría para PYMES
				</span>

				<h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg leading-tight">
					Arquitectura Empresarial TOGAF <span className="text-indigo-200">Fase E</span>
				</h1>
				<p className="text-indigo-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
					Oportunidades y Soluciones para la transformación digital en pequeñas y medianas empresas. Descubre cómo la
					automatización revoluciona los procesos de auditoría, optimizando recursos y generando valor.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
					<a
						href="#video"
						className="bg-white text-indigo-700 font-bold px-6 py-3 rounded-full shadow-lg hover:bg-indigo-100 transition duration-200"
					>
						Ver Video
					</a>

					<a
						href="#widgets"
						className="bg-indigo-900 bg-opacity-80 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-purple-800 transition duration-200"
					>
						Explorar Pilares
					</a>
				</div>

				<br />

				<br />
			</div>

			<div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none">
				<svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
					<path d="M0,0 C150,60 350,90 600,70 C850,50 1050,30 1200,60 L1200,120 L0,120 Z" fill="#f9fafb" />
				</svg>
			</div>
		</section>
	);
};

export default Hero;
