"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import home from "../../public/home.png";
import now from "../../public/time.png";
import portfolio from "../../public/briefcase.png";
import blog from "../../public/blog.png";

const SideBar = () => {
  const pathname = usePathname();
  const arr = pathname.split("/");


  return (
    <aside className="sticky top-[0.01em] flex flex-col w-fit  h-[100vh] justify-center items-center border-r-2 border-gray-200 col-span-3 sm:col-span-2">
      <nav className="">
        <menu className="flex flex-col gap-6">
          <li
            className={`w-full  border-red-500 px-3 md:px-6 ${
              arr.includes("", 1) ? "border-r-4" : ""
            }`}
          >
            <Link href={"/"} className="flex flex-col items-center">
              <Image
                src={home}
                alt="home"
                height={20}
                width={20}
                className="opacity-50 dark:invert"
              />
              <p>Home</p>
            </Link>
          </li>
          <li
            className={`w-full  border-red-500  px-3 md:px-6 ${
              arr.includes("about") ? "border-r-4" : ""
            }`}
          >
            <Link href={"/about"} className=" flex flex-col items-center">
              <Image
                src={now}
                alt="now"
                height={20}
                width={20}
                className="opacity-50 dark:invert"
              />
              <p>About</p>
            </Link>
          </li>
          <li
            className={`w-full  border-red-500  px-3 md:px-6 ${
              arr.includes("portfolio") ? "border-r-4" : ""
            }`}
          >
            <Link href={"/portfolio"} className=" flex flex-col items-center">
              <Image
                src={portfolio}
                alt="portfolio"
                height={20}
                width={20}
                className="opacity-50 dark:invert"
              />
              <p>Portfolio</p>
            </Link>
          </li>
          <li
            className={`w-full  border-red-500 px-3 md:px-6 ${
              arr.includes("blog") ? "border-r-4" : ""
            }`}
          >
            <Link href={"/blog"} className=" flex flex-col items-center">
              <Image
                src={blog}
                alt="blog"
                height={20}
                width={20}
                className="opacity-50 dark:invert"
              />
              <p>Blog</p>
            </Link>
          </li>
        </menu>
      </nav>
    </aside>
  );
};

export default SideBar;
