"use client";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from "clsx";

interface NavData {
  name: string;
  icon: React.ReactElement;
  path: string;
}

export const navData: NavData[] = [
  {
    name: "home",
    icon: <HiHome />,
    path: "/",
  },
  {
    name: "about",
    icon: <HiUser />,
    path: "/about",
  },
  {
    name: "services",
    icon: <HiRectangleGroup />,
    path: "/services",
  },
  {
    name: "work",
    icon: <HiViewColumns />,
    path: "/work",
  },
  {
    name: "testimonials",
    icon: <HiChatBubbleBottomCenterText />,
    path: "/testimonials",
  },
  {
    name: "contact",
    icon: <HiEnvelope />,
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav
      className="flex text-white flex-col items-center xl:justify-center gap-y-4 fixed
  h-max bottom-0 z-50 w-full xl:w-16 xl:max-w-md xl:h-screen mt:auto xl:right-[2%]"
    >
      <div
        className="flex w-full xl:flex-col items-center justify-between
    xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] bg-sky-400 p-[20px] xl:h-max
    backdrop-blur-sm text-3xl xl:text-[30px] xl:rounded-full"
      >
        {navData.map((link, index) => {
          const isActive = pathname === link.path;
          return <Link key={index} href={link.path}
          className={clsx('transition-all duration-300',
            isActive ?
            'text-pink-500 drop-shadow-xl/50 xl:translate-x-[-6px] md:translate-y-[-8px] sm:translate-y-[-8px]'
            : 'hover:text-pink-500'
          )}>{link.icon}</Link>;
        })}
      </div>
    </nav>
  );
};

export default Nav;
