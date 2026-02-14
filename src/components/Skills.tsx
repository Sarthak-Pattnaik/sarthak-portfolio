import { FaJava, FaPython, FaReact, FaFigma } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

function Skills() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <div className="flex justify-center gap-12 flex-wrap">
        <div className="flex flex-col items-center hover:scale-110 transition">
          <FaJava size={50} className="text-red-600" />
          <p className="mt-2">Java</p>
        </div>

        <div className="flex flex-col items-center hover:scale-110 transition">
          <FaPython size={50} className="text-yellow-500" />
          <p className="mt-2">Python</p>
        </div>

        <div className="flex flex-col items-center hover:scale-110 transition">
          <SiMysql size={50} className="text-blue-600" />
          <p className="mt-2">SQL</p>
        </div>

        <div className="flex flex-col items-center hover:scale-110 transition">
          <FaReact size={50} className="text-cyan-400" />
          <p className="mt-2">React</p>
        </div>

        <div className="flex flex-col items-center hover:scale-110 transition">
          <FaFigma size={50} className="text-pink-500" />
          <p className="mt-2">Figma</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;