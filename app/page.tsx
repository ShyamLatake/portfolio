"use client";
import { useState, useEffect } from "react";
import Image from 'next/image';

export default function Home() {
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
    <>
      <section id="welcomeSection" className=" flex items-end justify-center sm:justify-end">
        <span className="drop bg-black before:bg-black dark:bg-white dark:before:bg-white"></span>
        <div className="flex flex-col items-center justify-center sm:items-center sm:justify-end sm:self-end w-4/6 h-full">
          <Image src="/images/mainImage.svg" alt="Shyam Latake" width={400} height={200} className="" />
          <h1 className="text-xl sm:w-4/5 subpixel-antialiased font-signature text-center mt-4 text-black dark:text-white">
            Hello, I am Shyam Latake, a passionate developer dedicated to crafting innovative and impactful digital experiences.  </h1>
          {/* <p className="text-center mt-4">
          Dive into my projects to see the blend of creativity and technology that drives my work. Join me on a journey of innovation and excellence. Thank you for visiting and enjoy exploring!                   </p> */}
        </div>

      </section>
      <section id="aboutSection" className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-4/6 h-full">
          <h1 className="text-2xl subpixel-antialiased font-signature text-center mt-4 text-black dark:text-white">
            About Me
          </h1>
          <p className="text-center mt-4">
            I am a passionate developer dedicated to crafting innovative and impactful digital experiences. Dive into my projects to see the blend of creativity and technology that drives my work. Join me on a journey of innovation and excellence. Thank you for visiting and enjoy exploring!
          </p>
        </div>
      </section>
    </>

  );
}
