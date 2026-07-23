import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import yukumi_movies from "../assets/yukumi_movies.png";
import news_aggregator from "../assets/news_aggregator.png";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      title: "Yukumi Movies",
      desc: "Developed a full-stack social movie tracking platform where users can discover films, maintain personalized watchlists, rate and review movies, follow other users, receive notifications, and engage through a community activity feed powered by thousands of TMDB movie records.",
      tags: ["React", "TypeScript", "Tailwind", "MongoDB", "Node.js", "Express", "Vercel"],
      image: yukumi_movies,
      liveLink: "https://yukumi-movies.vercel.app/",
      codeLink: "https://github.com/Sarthak-Pattnaik/yukumi-movies",
    },
    {
      title: "News Aggregator",
      desc: "Developed a full-stack News Aggregator Web Application with personalized recommendations, search, reading history, user authentication, and real-time news aggregation from NewsAPI and six RSS feeds.",
      tags: ["React", "TypeScript", "Tailwind", "MongoDB", "Node.js", "Express", "Vercel"],
      image: news_aggregator,
      liveLink: "https://news-aggregator-ashen-ten.vercel.app/",
      codeLink: "https://github.com/NewsAggregatorASD/news-aggregator",
    },
    {
      title: "Heart Disease Risk Prediction",
      desc: "Trained multiple classification models to predict heart disease risk using parameters such as age, cholesterol, blood pressure, etc. and achieved 85% prediction accuracy using Logistic Regression.",
      tags: ["Python", "FastAPI", "React", "Vercel"],
      image: proj3,
      liveLink: "https://heart-disease-prediction-pied.vercel.app/",
      codeLink: "https://github.com/Sarthak-Pattnaik/Heart-Disease-Prediction",
    },
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
    }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;

    // Scroll by approximately one card
    const scrollAmount = container.clientWidth / 3;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
  id="projects"
  className="py-20 px-4"
>
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-10">
      Projects
    </h2>

    <div className="relative">

      {/* Left Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-gray-900/80 text-white hover:bg-accent transition"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide px-12 "
      >
        {projects.map((proj, i) => (
          <div
            key={i}
            className="
              flex-shrink-0
              w-full
              md:w-[48%]
              lg:w-[31%]
              bg-white
              dark:bg-gray-700
              rounded-xl
              shadow-lg
              p-4
              hover:scale-[1.02]
              hover:shadow-xl
              transition-all
              duration-300
            "
          >
            {/* Image */}
            <img
              src={proj.image}
              className="rounded-md h-48 w-full object-cover mb-4"
              alt={proj.title}
            />

            {/* Content */}
            <div className="flex flex-col h-full">
              <h3 className="font-semibold text-lg">
                {proj.title}
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400 my-3">
                {proj.desc}
              </p>

              {proj.tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex gap-2 mt-4">
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
      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-gray-900/80 text-white hover:bg-accent transition"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  </div>
</section>
  );
}

export default Projects;