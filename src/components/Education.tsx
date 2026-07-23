import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

function Education() {
  const education = [
    {
      degree: "Bachelor of Technology",
      institute: "KIIT University",
      subtitle: "Computer Science & Engineering",
      duration: "2023 - 2027",
      details: [
        "Current CGPA: 9.49 / 10",
      ]
    },
    {
      degree: "Indian School Certificate (Class XII)",
      institute: "Salt Lake School",
      subtitle: "Science Stream",
      duration: "2021 - 2023",
      details: [
        "Percentage: 94.8%"
      ]
    },
    {
      degree: "Indian Certificate of Secondary Education (Class X)",
      institute: "Salt Lake School",
      subtitle: "",
      duration: "2009 - 2021",
      details: [
        "Percentage: 97.5%"
      ]
    }
  ];

  return (
    <section
      id="education"
      className="py-20  px-4"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-14"
        >
          Education
        </motion.h2>

        <div className="relative border-l-2 border-accent ml-5">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative mb-12 ml-10"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[53px] top-2 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <GraduationCap className="text-white" size={20} />
              </div>

              {/* Card */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700">
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold ">
                      {item.degree}
                    </h3>

                    <p className="text-accent font-medium mt-1">
                      {item.institute}
                    </p>

                    {item.subtitle && (
                      <p className=" mt-1">
                        {item.subtitle}
                      </p>
                    )}
                  </div>

                  <p className="mt-3 md:mt-0">
                    {item.duration}
                  </p>
                </div>

                <ul className="mt-5 list-disc list-inside space-y-2 ">
                  {item.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;