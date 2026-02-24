import { NavLinks } from "./Navbar";
import Link from "next/link";
import { X } from "lucide-react";

export const ResponsiveMenu = ({ show, onClose }) => {
    return (
        <div className="flex flex-col h-full p-6">
            {/* Menu Header */}
            <div className="flex items-center justify-between mb-10">
                <div className="flex items-center">
                    <div className="text-lg bg-gradient-to-br from-red-600 to-rose-700 text-white rounded-full w-[35px] h-[35px] flex justify-center items-center font-extrabold">
                        A
                    </div>
                    <span className="font-satisfies text-xl font-bold ml-2 text-white">mit.</span>
                </div>
                <button
                    onClick={onClose}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>
            </div>

            {/* Nav Links */}
            <nav className="flex-1">
                <ul className="flex flex-col gap-6">
                    {NavLinks.map((link) => (
                        <li key={link.id}>
                            <Link
                                href={link.link}
                                onClick={onClose}
                                className="text-2xl font-semibold text-gray-400 hover:text-white transition-all duration-300 block py-2 border-b border-white/5"
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Menu Footer */}
            <div className="mt-auto pt-6 border-t border-white/10">
                <p className="text-sm text-gray-500 mb-4 italic">Available for new opportunities</p>
                <div className="flex gap-4">
                    {/* Social icons could go here */}
                </div>
            </div>
        </div>
    );
};
