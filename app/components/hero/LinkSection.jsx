import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

export const LinkSection = () => {
  const links = [
    {
      link: 'https://github.com/Amitaarav',
      label: 'GitHub',
      icon: <FaGithub size={22} />,
      hoverColor: 'hover:bg-gray-700 hover:border-gray-500',
    },
    {
      link: 'https://www.linkedin.com/in/amitkrgupta8',
      label: 'LinkedIn',
      icon: <FaLinkedin size={22} />,
      hoverColor: 'hover:bg-gray-700 hover:border-blue-500',
    },
    {
      link: 'https://leetcode.com/u/amit_gupta_512/',
      label: 'LeetCode',
      icon: <SiLeetcode size={22} />,
      hoverColor: 'hover:bg-gray-700 hover:border-yellow-500',
    },
    {
      link: 'https://x.com/AmitAarav1205',
      label: 'X',
      icon: <FaXTwitter size={22} />,
      hoverColor: 'hover:bg-gray-800 hover:border-gray-600',
    },
  ];

  return (
    <section className="text-white">
      <div className="flex flex-row justify-center items-center gap-3 flex-wrap">
        {links.map(({ link, label, icon, hoverColor }) => (
          <motion.a
            key={label}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 bg-gray-900 border-2 border-red-900/50 px-4 py-2.5 rounded-lg transition-all duration-300 ${hoverColor} cursor-pointer z-20 relative`}
          >
            <span className="text-red-400 group-hover:text-white transition-colors">{icon}</span>
            <span className="font-medium text-sm">{label}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
