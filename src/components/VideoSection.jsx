import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import video from "../assets/video.mp4";
import preview from "../assets/preview.jpg";

function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-6 text-center">Video Explicativo</h2>

      <div className="flex justify-center">
        <div className="relative w-full md:w-11/12 lg:w-10/12 h-[520px] rounded-2xl overflow-hidden shadow-2xl bg-black">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            controls
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
          >
            <source src={video} type="video/mp4" />
            Tu navegador no soporta el formato de video.
          </video>

          <AnimatePresence>
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 flex items-center justify-center bg-black/40"
              >
                <img
                  src={preview}
                  alt="Portada del video"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <motion.button
                  onClick={handlePlay}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="z-10 bg-white/90 text-indigo-600 rounded-full p-6 shadow-xl backdrop-blur-md hover:bg-white transition-all"
                >
                  ▶
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
