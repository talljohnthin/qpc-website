import clsx from "clsx";
import Link from "next/link";
import Logo from "../../assets/images/logo.webp";
import Image from "next/image";
import { useState } from "react";

type NavItems = {
  label: string;
  link: string;
};

const navItems: NavItems[] = [
  {
    label: "Quantum Pulse Consulting",
    link: "#",
  },
  {
    label: "About Us",
    link: "#",
  },
  {
    label: "Experiences",
    link: "#",
  },
  {
    label: "Case Studies",
    link: "#",
  },
  {
    label: "Contact Us",
    link: "#",
  },
];

type NavbarProps = {
  classes: string;
};

const Navbar = ({ classes }: NavbarProps) => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  return (
    <nav className={clsx("bg-brand-black-pearl", classes)}>
      <div className="flex flex-wrap items-center justify-between p-4 md:px-6">
        <Link
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src={Logo} className="max-w-28 md:max-w-48" alt="Logo" />
        </Link>
        <button
          onClick={() => setIsOpenNav((prevState) => !prevState)}
          type="button"
          className="inline-flex hover:opacity-70 transition-opacity items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none border-2 border-gray-200"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <MobileNav isOpen={isOpenNav} />
        <DesktopNav />
      </div>
    </nav>
  );
};

const MobileNav = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={clsx(
        "w-full md:hidden md:w-auto max-h-0 transition-all duration-500",
        isOpen && "max-h-[1000px] transition-all duration-500"
      )}
    >
      <ul className="font-medium flex flex-col p-3 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
        {navItems.map((navItem, idx) => (
          <li
            key={idx}
            className="group text-gray-900 rounded hover:bg-brand-east-bay md:hover:bg-transparent md:border-0 md:p-0 transition-colors"
          >
            <Link
              href={navItem.link}
              className="font-acumin-reg block py-2 px-3 text-brand-east-bay rounded md:p-0 transition-colors group-hover:text-white"
            >
              {navItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const DesktopNav = () => {
  return (
    <div className="hidden w-full md:block md:w-auto">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
        {navItems.map((navItem, idx) => (
          <li
            key={idx}
            className="group py-1 border-b-2 border-transparent hover:border-b-3 hover:border-white transition-colors"
          >
            <Link
              href={navItem.link}
              className="font-acumin-reg block py-2 px-3 text-white rounded md:p-0 transition-colors group-hover:text-brand-steel-blue"
            >
              {navItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
