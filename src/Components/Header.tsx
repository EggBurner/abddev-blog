"use client";

import React from "react";

import { useState, useEffect } from "react";
import Image from "next/image";

import sun from "../../public/sun.png";
import moon from "../../public/moon.png";

const Header = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    let storageTheme = localStorage.getItem("theme");
    if(storageTheme === "light") setTheme('light')
  }, []);


  useEffect(() => {
    if(theme === 'dark') {
        localStorage.setItem('theme', 'dark')
        document.documentElement.classList.add("dark");
    }
    else {
        localStorage.setItem('theme', 'light')
        document.documentElement.classList.remove("dark");
    }
    console.log(theme);
    
  }, [theme])

    
  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark");

    } else {
      setTheme("light");

    }
  };


  return (
    <header className="h-16 flex justify-end items-center pr-10 ">
      <Image
        src={theme === "light" ? moon : sun}
        height={20}
        width={20}
        alt="change theme"
        onClick={handleClick}
        className="dark:invert opacity-50"
      />
    </header>
  );
};

export default Header;
