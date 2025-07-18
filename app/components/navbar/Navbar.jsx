"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";
import { ResponsiveMenu } from "./ResponsiveMenu";
export const NavLinks = [
    {
        id: 1,
        title: "Home",
        link: "/"
    },
    {
        id: 2,
        title: "Contact",
        link: "#contacts"
    },
    {
        id: 3,
        title: "Projects",
        link: "#projects"
    },
    {
        id: 4,
        title: "Services",
        link: "#services"
    }
]
export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return <nav className=" bg-gray-950 text-white">
        <div className="container flex items-center justify-between py-5 relative z-[9999]">
            {/* Logo Section  */}
            <div className="relative z-[-999]">
                <div className="flex items-start justify-left ml-4">
                    <div className="text-xl bg-red-600 text-white rounded-full w-[40px] h-[40px] flex justify-center items-center font-extrabold">P</div>
                    <h1 className="font-satisfies text-xl text-white font-bold ml-1"> ortfolio.</h1>
                </div>
            </div>
            
            {/* Nav Links Section */}
            <div className="hidden md:block">
                <ul className="flex items-center gap-4">
                    {NavLinks.map((link) => {
                        const isActive = usePathname() === link.link;

                        return(
                        <li key={link.id}>
                            <a 
                            className={`${isActive ? "text-red-600 text-xl font-bold hover:text-red-700 hover:rounded-sm" : "text-red-700 hover:text-red-600 hover:rounded-md"}
                            inline-block text-lg py-1 px-4 hover:[box-shadow:0_0_10px_0_rgba(255,0,0,0.8)] hover:bg-red-500 hover:text-white transition-all duration-500 hover:scale-105 hover:rounded-sm
                            `} href={link.link}>{link.title}</a>
                        </li>
                    )})}
                </ul>
                
            </div>
            <button onClick={() => window.open("https://drive.google.com/file/d/1ZlV9aFlcBoDsy6EIpivG6v_BJ8hEaVuJ/view?usp=sharing")} className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-all duration-500 gradient-to-r from-orange-600 via-red-700 to-orange-800 cursor-pointer hover:scale-105 mr-4">
                    Get Resume
            </button>
            {/* Mobile Menu section */}
            <div className="md:hidden">
                <IoMenuSharp onClick={toggleMenu} className="text-4xl cursor-pointer" />
            </div>
            {/* Mobile Side bar  section */}
            { isMenuOpen && <div className="fixed top-0 left-0 z-[999] w-1/3">
                <ResponsiveMenu show={isMenuOpen} onClose={closeMenu}/>
                </div>}
        </div>
    </nav>
}