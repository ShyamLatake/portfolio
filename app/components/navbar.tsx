"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from 'next/image';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "Projects" },
    { id: 2, link: "Life Journey" },
    { id: 3, link: "contact" },
  ];

  const getInitialDarkMode = () => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode !== null) {
        return savedMode === "true";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode);


  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDarkMode]);


  return (
    <div className="flex justify-between items-center bg-transparent w-full h-14 px-4 mt-4 text-black dark:text-white">
      <div className="bg-transparent">
          Shyam Latake
      </div>


      <div className="flex justify-conten items-center">
        <ul className="hidden sm:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="nav-links ease-in-out px-4 cursor-pointer capitalize font-medium dark:text-gray-500 hover:scale-105 hover:text-black dark:hover:text-white duration-200 hover:underline hover:underline-offset-8"
            >
              <Link href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</Link>
            </li>
          ))}
        </ul>

        <div
      className="relative flex justify-center items-center cursor-pointer bg-black dark:bg-white rounded-lg  border border-slate-700 dark:border-zinc-300"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {/* <div className="absolute rounded-full h-full w-6/12 bg-white right-px dark:bg-black dark:left-px  flex justify-center items-center"> </div> */}
      {
        isDarkMode ? (
          <div className="m-1">
        <Image
            src="/images/sun.png"
            width={15}
            height={15}
            alt="Sun icon"
          /></div>
        ):(
          <div className="m-1">
          <Image
            src="/images/moon.png"
            width={15}
            height={15}
            alt="Moon icon"
          />
          </div>
        )
      }
      
          
    </div>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 dark:text-gray-200 sm:hidden"
      >
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 dark:text-gray-200">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setNav(!nav)}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
