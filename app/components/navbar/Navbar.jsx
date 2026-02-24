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
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950 text-white shadow-md border-b border-gray-700 border-opacity-50 border-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="text-xl bg-red-600 text-white rounded-full w-[50px] h-[50px] flex justify-center items-center font-extrabold">
            A
          </div>
          <h1 className="font-satisfies text-xl font-bold ml-2">mit Gupta.</h1>
        </div>

        {/* Nav Links */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4">
            {NavLinks.map((link) => {
              const isActive = pathname === link.link;
              return (
                <li key={link.id}>
                  <a
                    href={link.link}
                    onMouseEnter={playHover}
                    onClick={(e) => handleNavClick(e, link.link)}
                    className={`${isActive
                      ? "text-red-600 text-xl font-bold"
                      : "text-red-700"
                      } inline-block text-lg py-1 px-4 hover:[box-shadow:0_0_10px_0_rgba(255,0,0,0.8)] hover:bg-red-500 hover:text-white transition-all duration-500 hover:scale-105 hover:rounded-sm`}
                  >
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Theme Toggle & Sound Toggle & Resume Button */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={toggleSound}
            onMouseEnter={playHover}
            className="p-2 rounded-md bg-gray-900 border border-gray-700 hover:border-red-500 transition-colors text-gray-400 hover:text-red-500"
            title={isEnabled ? "Mute Sounds" : "Unmute Sounds"}
          >
            {isEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>
          <button
            onClick={() => {
              playClick();
              window.open(
                "https://drive.google.com/file/d/1TfBWWerakNOgpbR3HF2sknR65U2Enc5Q/view?usp=sharing"
              );
            }}
            onMouseEnter={playHover}
            className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-all duration-500 cursor-pointer hover:scale-105"
          >
            Get Resume
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleSound}
            className="p-2 rounded-md bg-gray-800 border border-gray-700 text-gray-400"
          >
            {isEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>
          <IoMenuSharp
            onClick={toggleMenu}
            className="text-4xl cursor-pointer"
          />
        </div>

        {/* Mobile Sidebar */}
        {isMenuOpen && (
          <div className="fixed top-0 left-0 z-[60] w-2/3 sm:w-1/3 h-full bg-gray-800">
            <ResponsiveMenu show={isMenuOpen} onClose={closeMenu} />
          </div>
        )}
      </div>
    </nav>
  );
};
