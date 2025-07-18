import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope,FaMapMarkerAlt } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-red-900 via-red-950 to-red-900 text-gray-200 py-4">
            <div className="container flex justify-between items-center mx-auto px-6 lg:px-0 ml-8">
                <h2 className="text-4xl font-bold mb-6">
                        Amit Kumar Gupta
                </h2>
                <div className="flex justify-between md:items-center space-x-4 mt-4 md:mb-6 md:mr-50 text-gray-300">
                         <h2 className="text-2xl font-bold text-white ">Follow Me On: </h2>
                        <Link href="https://www.facebook.com/">
                            <FaFacebookF size={20} className="hover:text-white"/> 
                            
                        </Link>
                        <Link href="https://twitter.com/">
                            <FaTwitter size={20} className="hover:text-white"/>
                            
                        </Link>
                        <Link href="https://www.instagram.com/">
                        <FaInstagram size={20} className="hover:text-white"/>
                            
                        </Link>
                        <Link href="https://www.linkedin.com/">
                        <FaLinkedin  size={20} className="hover:text-white"/>
                            
                        </Link>
                </div>
            </div>
            <div className="container mx-auto px-6 lg:px-0 grid grid-cols-1 md:grid-cols-3 gap-8 ml-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">
                     Contacts
                    </h3>
                    <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center hover:text-white">
                            <FaPhoneAlt className="mr-2"/>
                            <span>+91 6392995549</span>
                        </li>
                        <li className="flex items-center hover:text-white">
                            <FaEnvelope className="mr-2"/>
                            <span>aaravamit555@gmail.com</span>
                        </li>
                        <li className="flex items-center hover:text-white">
                            <FaMapMarkerAlt className="mr-2"/>
                            <span>Uttar Pradesh, India</span>
                        </li>
                    </ul>
                </div>
 
            </div>
            <div className="border-t border-gray-200 mt-12 pt-6">
                <p className="flex justify-center items-centertext-center text-gray-200">Copyright © 2025 All Rights Reserved.</p>
            </div>
        </footer>
    )
}