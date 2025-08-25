import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6'; // updated X (Twitter) icon
import Link from "next/link";
import FlipLink from "../../../components/ui/text-effect-flipper";
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
          <div className="bg-gradient-to-r from-gray-900 to-red-800 p-[8px] rounded-md hover:scale-115 transition-transform duration-300 border-2 border-red-900" key={label}>
            <FlipLink href={link}>
              {label}
            </FlipLink>
          </div>
        ))}
      </div>
    </section>
  );
};
