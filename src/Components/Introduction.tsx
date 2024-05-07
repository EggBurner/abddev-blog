import React from "react";
import Image from "next/image";
import Link from "next/link";

import me from "../../public/me.jpg";
import CopyButton from "./CopyButton";

const Intro = () => {
  return (
    <section className="mt-8">
      <Link href={'/now'}>
        <Image
          src={me}
          alt="Profile photo"
          width={60}
          height={60}
          className="rounded-full"
        />
      </Link>

      <article className="mt-6">
        <h1 className=" text-5xl sm:text-7xl font-bold">
          Hey there, I&apos;m
          <div className="inline-block text-[hsla(0deg,100%,60%,0.9)] rotate-[-3deg] bg-[hsla(0deg,100%,40%,0.3)] translate-y-3 h-18">
            <div className="inline-block rotate-[3deg] translate-y-[-0.75rem]">
              Abdul
            </div>
          </div>
        </h1>
        <p className="mt-10 w-4/5 sm:w-3/6 text-justify">
          I am a professional <span className="text-accent">Web Developer</span>{" "}
          based out of Lahore, PK. I am a problem solver and I place an emphesis
          on both the <span className="text-accent">design</span> and the{" "}
          <span className="text-accent">performance</span> while building your
          dream website
        </p>
      </article>
      <article className="flex mt-10 flex-col sm:flex-row w-[60%] sm:w-2/6 justify-evenly">
        <button>Contact</button>
        <CopyButton />
      </article>
    </section>
  );
};

export default Intro;
