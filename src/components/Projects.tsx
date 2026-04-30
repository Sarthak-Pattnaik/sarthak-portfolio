import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";

interface Project {
  title: string;
  desc: string;
  image: string;
  liveLink: string;
  codeLink: string;
}

function Projects() {
  const projects: Project[] = [
    {
      title: "Yukumi",
      desc: "Social cataloging website for anime",
      image: proj1,
      liveLink: "https://yukumi.pages.dev/",
      codeLink: "https://github.com/AsherTime/Yukumi",
    },
    {
      title: "Olympics Analytics Report",
      desc: "Power BI report analyzing 120 years of Olympic data.",
      image: proj2,
      liveLink: "",
      codeLink: "https://github.com/Sarthak-Pattnaik/Olympics-Analytics",
    },
    {
      title: "Heart Disease Risk Prediction",
      desc: "Heart disease risk prediction using ML models.",
      image: proj3,
      liveLink: "https://heart-disease-prediction-pied.vercel.app/",
      codeLink: "https://github.com/Sarthak-Pattnaik/Heart-Disease-Prediction",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 hover:scale-105 transition duration-300">
              <img src={proj.image} className="rounded-md mb-4 h-40 mx-auto" />
              <h3 className="font-semibold">{proj.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 my-2">{proj.desc}</p>

              <div className="flex gap-2">
                {proj.liveLink && (
                  <a
                    href={proj.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent text-white px-3 py-3 rounded-lg hover:scale-105 hover:shadow-lg transition duration-300"
                  >
                    Live Demo
                  </a>)
                }
                <a
                  href={proj.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-accent text-accent px-3 py-3 rounded hover:bg-accent hover:text-white transition"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;