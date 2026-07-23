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

I'm a Computer Science and Engineering undergraduate at KIIT with a passion for building scalable software and solving challenging problems.

I enjoy working across the full stack—developing responsive and intuitive user interfaces with React while building robust backend applications using Node.js, Express, and MongoDB. Alongside software development, I enjoy solving complex data structure and algorithm problems in Java and continuously expanding my knowledge by building real-world projects.
        </p>
      </div>
    </section>
  );
}

export default About;