import { motion } from "framer-motion";
import heroBg from "../assets/hero-bg.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />

      {/* Content */}
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white"
        >
          Sarthak Pattnaik
        </motion.h1>

        <p className="mt-4 text-lg text-gray-200">
          CSE Student
        </p>

        <a
          href="#projects"
          className="mt-8 inline-block bg-accent text-white px-6 py-3 rounded-lg hover:scale-105 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}

export default Hero;