"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";
import { ResponsiveMenu } from "./ResponsiveMenu";

export const NavLinks = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Contact", link: "#contacts" },
  { id: 3, title: "Projects", link: "#projects" },
  { id: 4, title: "Services", link: "#services" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="text-xl bg-green-600 text-white rounded-full w-[50px] h-[50px] flex justify-center items-center font-extrabold">
            P
          </div>
          <h1 className="font-satisfies text-xl font-bold ml-2">ortfolio.</h1>
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
                    className={`${
                      isActive
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

        {/* Resume Button */}
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1ZlV9aFlcBoDsy6EIpivG6v_BJ8hEaVuJ/view?usp=sharing"
            )
          }
          className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-all duration-500 gradient-to-r from-green-600 via-green-700 to-green-800 cursor-pointer hover:scale-105 mr-4 hidden sm:inline-block"
        >
          Get Resume
        </button>

        {/* Mobile Menu */}
        <div className="md:hidden">
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
