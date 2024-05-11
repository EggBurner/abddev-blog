import React from "react";
import Idianly from "../../public/idiantly.png";
import weatherApp from "../../public/weather-app.png";
import virtualAcadmey from '../../public/virtual-acadmey.png'
import Image from "next/image";
import Link from "next/link";

const LatestProjects = () => {
  return (
    <section className="mt-20 mb-10 w-[90%]">
      <span className="inline-block h-12 translate-y-3 rotate-[-2deg] bg-[hsla(0deg,100%,40%,0.3)]">
        <h2 className="text-4xl font-bold translate-y-[-0.2em] text-accent rotate-3">
          Latest Projects
        </h2>
      </span>
      <article className="grid grid-cols-3 gap-6 w-full mt-16 ">
        <div className=" bg-transparent border-2 border-gray-400">
          <div className="h-80 overflow-hidden w-full bg-[hsla(0deg,100%,40%,0.3)]">
            <Image
              src={Idianly}
              alt="idianlty project"
              className="block mx-auto w-[80%]"
            />
          </div>
          <div className="pt-8 px-3 -translate-y-4 rounded-2xl bg-white border dark:bg-slate-800 dark:border-none">
            <h2 className="text-lg font-semibold">A Portfolio Application Development</h2>
          </div>
        </div>
        <div className=" bg-transparent border-2 border-gray-400">
          <div className="h-80 overflow-hidden w-full bg-[hsla(0deg,100%,40%,0.3)]">
            <Image
              src={weatherApp}
              alt="a weather app"
              className="block mx-auto w-[80%]"
            />
          </div>
          <div className="pt-8 px-3 -translate-y-4 rounded-2xl bg-white border dark:bg-slate-800 dark:border-none">
            <h2 className="text-lg font-semibold">A Weather Application Development</h2>
          </div>
        </div>
        <div className=" bg-transparent border-2 border-gray-400">
          <div className="h-80 overflow-hidden w-full bg-[hsla(0deg,100%,40%,0.3)]">
            <Image
              src={virtualAcadmey}
              alt="A virtual Acadmey"
              className="block mx-auto w-[80%]"
            />
          </div>
          <div className="pt-8 px-3 -translate-y-4 rounded-2xl bg-white border dark:bg-slate-800 dark:border-none">
            <h2 className="text-lg font-semibold">Virtual Acadmey's Website Development</h2>
          </div>
        </div>
      </article>
      <div>
        <Link href={'/portfolio'}><button className="float-right mt-6 bg-accent px-4 py-2 rounded-md text-[#f3f3f3]">More Projects</button></Link>
      </div>
    </section>
  );
};

export default LatestProjects;
