import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-gray-100 dark:bg-gray-800 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-accent/10">
              <Briefcase className="text-accent" size={28} />
            </div>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-xl font-semibold">
                    Academy of Skill Development
                  </h3>

                  <p className="text-accent font-medium">
                    MERN Stack Web Development Intern
                  </p>
                </div>

                <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                  2026
                </span>
              </div>

              <ul className="mt-5 list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>
                  Developed a full-stack News Aggregator web application using React,
                  Node.js, Express and MongoDB.
                </li>

                <li>
                  Implemented authentication, personalized news feeds and responsive UI
                  components.
                </li>

                <li>
                  Used Git and GitHub for version control and collaborative development.
                </li>

                <li>
                  Built REST APIs and integrated frontend with backend services.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;