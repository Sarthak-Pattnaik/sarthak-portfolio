import profilePic from "../assets/profile.jpg";

function About() {
  return (
    <section id="about" className="py-20 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
      <img
        src={profilePic}
        alt="Sarthak Pattnaik"
        className="w-40 md:w-52 lg:w-60 aspect-square object-cover rounded-full shadow-lg border-4 border-accent"
      />

      <div>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          I'm a Computer Science Engineering student passionate about full-stack
          development, data science, and computer networks.
          I enjoy solving complex DSA problems and building impactful projects.
        </p>
      </div>
    </section>
  );
}

export default About;