import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import { type Dispatch, type SetStateAction } from "react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-xl">SP</h1>

        <div className="hidden md:flex gap-6 items-center">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        <div className="md:hidden flex gap-4 items-center">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <Menu onClick={() => setOpen(!open)} />
        </div>
      </div>

      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;