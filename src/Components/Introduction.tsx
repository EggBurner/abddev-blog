import React from "react";
import Image from "next/image";
import Link from "next/link";

import me from "../../public/me.jpg";
import CopyButton from "./CopyButton";

const Intro = () => {
  return (
    <section className="mt-8">
      <Link href={'/about'}>
        <Image
          src={me}
          alt="Profile photo"
          width={60}
          height={60}
          className="rounded-full"
        />
      </Link>

      <article className="mt-6">
        <h1 className=" text-5xl sm:text-8xl font-bold">
          Hey there,<br /> I&apos;m 
          <div className="inline-block text-[hsla(0deg,100%,60%,0.9)] rotate-[-3deg] bg-[hsla(0deg,100%,40%,0.3)] translate-y-3 h-18">
            <div className="inline-block rotate-[3deg] translate-y-[-0.75rem]">
              Abdullah
            </div>
          </div>
        </h1>
        <p className="mt-10 w-4/5 sm:w-3/6 text-justify">
          I am a professional <span className="text-accent">Web Developer</span>{" "}
          based out of Lahore, PK. -----fill here------------
        </p>
      </article>
      <article className="flex mt-10 flex-col sm:flex-row sm:w-2/6 gap-4 ">
        <button className="bg-accent px-8 py-2 rounded-md text-[#f2f2f2] border-accent border-2 text-lg font-semibold">Contact</button>
        <CopyButton />
      </article>
    </section>
  );
};

export default Intro;
