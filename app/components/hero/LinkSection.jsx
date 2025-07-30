import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6'; // updated X (Twitter) icon
import Link from "next/link";
export const LinkSection = () => {
  const links = [
    {
      link: 'https://github.com/Amitaarav',
      label: 'GitHub',
      icon: <FaGithub size={20} />,
      color: 'bg-gradient-to-r from-gray-900 to-red-800',
    },
    {
      link: 'https://www.linkedin.com/in/amitkrgupta8',
      label: 'LinkedIn',
      icon: <FaLinkedin size={20} />,
      color: 'bg-gradient-to-r from-gray-900 to-red-800',
    },
    {
      link: 'https://leetcode.com/u/amit_gupta_512/',
      label: 'LeetCode',
      icon: <SiLeetcode size={20} />,
      color: 'bg-gradient-to-r from-gray-900 to-red-800 ',
    },
    {
      link: 'https://x.com/AmitAarav1205',
      label: 'X (Twitter)',
      icon: <FaXTwitter size={20} />,
      color: 'bg-gradient-to-r from-gray-900 to-red-800 ',
    },
  ];

  const onClickHandler = (link) => {
  if (typeof window !== "undefined") {
    window.open(link, '_blank', 'noopener,noreferrer');
  }
    };

  return (
    <section className=" text-white">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 flex-wrap">
        {links.map(({ link, label, icon, color }) => (
          <Link
            key={label}
            href={link}
            onClick={onClickHandler(link)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`flex items-center gap-2 ${color} text-gray-100 font-medium py-2 px-4 rounded-md transition duration-300`}
          >
            {icon}
            {label}
          </Link>
        ))}
      </div>
    </section>
  );
};
