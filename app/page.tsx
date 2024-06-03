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
    <section id="welcomeSection" className=" flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-3/5 h-full ">
        <h1 className="text-2xl font-signature text-center">
          Hello, I am Shyam Latake, a passionate developer dedicated to crafting innovative and impactful digital experiences.  </h1>
        <p className="text-center mt-4">
          Dive into my projects to see the blend of creativity and technology that drives my work. Join me on a journey of innovation and excellence. Thank you for visiting and enjoy exploring!                   </p>
      </div>
      <span className="drop bg-black before:bg-black dark:bg-white dark:before:bg-white"></span>

      <div className="w-2/5 h-screen">
        {/* <Image src="/images/hero.svg" alt="hero" layout="fill" objectFit="contain" />  */}
      </div>

    </section>
  );
}
