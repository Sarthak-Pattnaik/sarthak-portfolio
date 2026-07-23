import {
  SiMongodb,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiGithub,
  SiPostgresql,
} from "react-icons/si";

import {
  FaJava,
  FaPython,
  FaReact,
} from "react-icons/fa";
import PowerBIIcon from "../assets/PowerBIIcon.svg";


function Skills() {
  return (
    <section className="py-20 mx-auto px-4 text-center bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <div className="flex justify-center gap-12 flex-wrap">


        <div className="flex flex-col items-center hover:scale-110 transition">
          <FaJava size={50} className="text-red-600" />
          <p className="mt-2">Java</p>
        </div>

        <div className="flex flex-col items-center hover:scale-110 transition">
          <FaReact size={50} className="text-cyan-400" />
          <p className="mt-2">React</p>
        </div>
      
        <div className="flex flex-col items-center hover:scale-110 transition">
          <SiMongodb size={50} className="text-green-500" />
          <p className="mt-2">MongoDB</p>
        </div>

        <div className="flex flex-col items-center hover:scale-110 transition">
          <SiTypescript size={50} className="text-blue-500" />
          <p className="mt-2">TypeScript</p>
        </div>

        <div className="flex flex-col items-center hover:scale-110 transition">
          <SiJavascript size={50} className="text-yellow-500" />
          <p className="mt-2">JavaScript</p>
        </div>

        <div className="flex flex-col items-center hover:scale-110 transition">
          <SiNodedotjs size={50} className="text-green-500" />
          <p className="mt-2">Node.js</p>
        </div>


        <div className="flex flex-col items-center hover:scale-110 transition">
          <FaPython size={50} className="text-yellow-500" />
          <p className="mt-2">Python</p>
        </div>

        <div className="flex flex-col items-center hover:scale-110 transition">
          <SiPostgresql size={50} className="text-blue-500" />
          <p className="mt-2">PostgreSQL</p>
        </div>

        <div className="flex flex-col items-center hover:scale-110 transition">
          <SiGithub size={50} className="text-blue-500" />
          <p className="mt-2">GitHub</p>
        </div>

        <div className="flex flex-col items-center hover:scale-110 transition">
          <img src={PowerBIIcon} alt="Power BI" width={52} />
          <p className="mt-2">Power BI</p>
        </div>

        
      </div>
    </section>
  );
}

export default Skills;