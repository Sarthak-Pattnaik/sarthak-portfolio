import { Github, Linkedin, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="py-6 text-center border-t border-gray-200 dark:border-gray-700">
      <div className="flex justify-center gap-6 mb-4">
        
        <a
          href="https://github.com/Sarthak-Pattnaik"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition hover:scale-110"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>

        <a
          href="https://www.linkedin.com/in/sarthak-pattnaik-348ba72a9/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition hover:scale-110"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>

        <a
          href="https://x.com/SarthakDevelops"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition hover:scale-110"
          aria-label="Twitter"
        >
          <Twitter size={24} />
        </a>

      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Sarthak Pattnaik. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;