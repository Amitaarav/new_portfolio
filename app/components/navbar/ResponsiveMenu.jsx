import { NavLinks } from "./Navbar";
import Link from "next/link";
export const ResponsiveMenu = ({showMenu}) => {
    return (
        <div className="md:hidden">
            <div className={`${showMenu ? "left-0" : "-left-[100%]"} fixed top-0 left-0 z-[999] text-white w-[75%] h-screen bg-black mt-20 pl-10 duration-300 md:hidden shadow-md flex flex-col justify-center`}>
                    <div>
                        <div>
                                <ul className="flex flex-col items-start justify-center gap-10 w-[20%]">
                                {NavLinks.map((link) => {
                                    return (
                                    <li key={link.id} className="py-2 border-b-2 border-gray-700 hover:text-green-800 transition-all duration-300 font-medium">
                                            <Link href={link.link}>
                                                {link.title}
                                            </Link> 

            
                                    </li>
                                    )
                                })}
                                </ul>
                        </div>
                    </div>
            </div>
        </div>
    )
}
