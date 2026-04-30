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
          Hi, I'm Sarthak!

          I'm a Computer Science and Engineering undergraduate at KIIT with a strong interest in building scalable software and extracting insights from data.

          I enjoy working across the stack—designing responsive user interfaces with React and Next.js, building backend systems using Supabase, and working with PostgreSQL for efficient data management. Alongside development, I also work on data-driven projects using Python and Power BI to uncover meaningful patterns and trends.
        </p>
      </div>
    </section>
  );
}

export default About;