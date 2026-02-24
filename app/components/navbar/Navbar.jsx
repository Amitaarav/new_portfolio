"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";
import { ResponsiveMenu } from "./ResponsiveMenu";
import { ThemeToggle } from "../theme/ThemeToggle";
import { useSound } from "../sound/SoundProvider";
import { Volume2, VolumeX } from "lucide-react";

export const NavLinks = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Services", link: "#services" },
  { id: 3, title: "Experience", link: "#experience" },
  { id: 4, title: "Projects", link: "#projects" },
  { id: 5, title: "Skills", link: "#skills" },
  { id: 6, title: "Contact", link: "#contacts" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isEnabled, toggleSound, playHover, playClick } = useSound();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (e, link) => {
    playClick();
    if (link === "/") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">
        {/* Logo Section */}
        <div className="flex items-center group cursor-pointer">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-rose-400 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative text-xl bg-gradient-to-br from-red-600 to-rose-700 text-white rounded-full w-[45px] h-[45px] flex justify-center items-center font-extrabold shadow-lg shadow-red-900/20">
              A
            </div>
          </div>
          <h1 className="font-satisfies text-2xl font-bold ml-3 tracking-tight text-white group-hover:text-red-500 transition-colors duration-300">
            mit<span className="text-red-600">.</span>
          </h1>
        </div>

        {/* Nav Links */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-2">
            {NavLinks.map((link) => {
              const isActive = pathname === link.link;
              return (
                <li key={link.id} className="relative group">
                  <a
                    href={link.link}
                    onMouseEnter={playHover}
                    onClick={(e) => handleNavClick(e, link.link)}
                    className={`${isActive
                      ? "text-white font-medium"
                      : "text-gray-400 hover:text-white"
                      } relative px-4 py-2 text-sm uppercase tracking-wider transition-all duration-300 block`}
                  >
                    {link.title}
                    {/* Animated Underline */}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full ${isActive ? "w-full" : ""
                        }`}
                    ></span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Theme Toggle & Sound Toggle & Resume Button */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center bg-white/5 p-1 rounded-full border border-white/10">
            <ThemeToggle />
            <button
              onClick={toggleSound}
              onMouseEnter={playHover}
              className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
              title={isEnabled ? "Mute Sounds" : "Unmute Sounds"}
            >
              {isEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>
          </div>

          <button
            onClick={() => {
              playClick();
              window.open(
                "https://drive.google.com/file/d/1TfBWWerakNOgpbR3HF2sknR65U2Enc5Q/view?usp=sharing"
              );
            }}
            onMouseEnter={playHover}
            className="relative group px-6 py-2 overflow-hidden rounded-full bg-red-600 text-white font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] active:scale-95"
          >
            <span className="relative z-10 text-sm uppercase tracking-widest">Resume</span>
            <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleSound}
            className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400"
          >
            {isEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>
          <button
            onClick={toggleMenu}
            className="text-white p-1 hover:bg-white/5 rounded-md transition-colors"
          >
            <IoMenuSharp size={32} />
          </button>
        </div>

        {/* Mobile Sidebar */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm md:hidden" onClick={closeMenu}>
            <div
              className="absolute top-0 left-0 w-[280px] h-full bg-gray-950 border-r border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <ResponsiveMenu show={isMenuOpen} onClose={closeMenu} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
