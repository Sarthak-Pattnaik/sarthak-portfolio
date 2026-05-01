import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";

interface Project {
  title: string;
  desc: string;
  tags?: string[];
  image: string;
  liveLink?: string;
  codeLink: string;
}

function Projects() {
  const projects: Project[] = [
    {
      title: "Yukumi",
      desc: "Full-stack anime tracking platform with 38 registered users, featuring authentication, personalized watchlists, community discussions designed for scalable multi-user interaction, and rating system displaying average community score and watch status across 100+ anime entries.",
      tags: ["React", "Supabase", "Tailwind", "Next.js", "ImageKit", "Vercel"],
      image: proj1,
      liveLink: "https://yukumi.pages.dev/",
      codeLink: "https://github.com/AsherTime/Yukumi",
    },
    {
      title: "Olympics Analytics Report",
      desc: "6-page interactive Power BI report analyzing 120 years of Olympic data, discovering key insights such as how athletes competing in their 4th or 5th Games are ~3x more likely to medal than first-timers, and that host nations show a consistent performance lift in medal efficiency across decades.",
      tags: ["Power BI"],
      image: proj2,
      codeLink: "https://github.com/Sarthak-Pattnaik/Olympics-Analytics",
    },
    {
      title: "Heart Disease Risk Prediction",
      desc: "Trained multiple classification models to predict heart disease risk using parameters such as age, cholesterol, blood pressure, etc. and achieved 85% prediction accuracy using Logistic Regression.",
      tags: ["Python", "FastAPI", "React", "Vercel"],
      image: proj3,
      liveLink: "https://heart-disease-prediction-pied.vercel.app/",
      codeLink: "https://github.com/Sarthak-Pattnaik/Heart-Disease-Prediction",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

        <div className="grid md:grid-rows-1 lg:grid-rows-3 grid-flow-col gap-6">
          {projects.map((proj, i) => (
            <div key={i} className="flex flex-col md:flex-row bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 hover:scale-105 transition duration-300 gap-6">

              {/* Left Side: Image */}
              <img
                src={proj.image}
                className="rounded-md h-40 w-full md:w-48 object-cover shrink-0"
              />

              {/* Right Side: Content */}
              <div className="flex flex-col justify-center flex-grow">
                <h3 className="font-semibold text-lg">{proj.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 my-2">
                  {proj.desc}
                </p>
                {proj.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex gap-2 mt-auto">
                  {proj.liveLink && (
                    <a
                      href={proj.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-accent text-white px-3 py-2 rounded-lg hover:scale-105 hover:shadow-lg transition duration-300 text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={proj.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-accent text-accent px-3 py-2 rounded-lg hover:bg-accent hover:text-white transition text-sm"
                  >
                    View Code
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;