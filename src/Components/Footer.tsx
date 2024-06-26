import React from "react";
import Image from "next/image";

import github from '../../public/socials/github-footer.png'
import x from '../../public/socials/x.png'
import insta from '../../public/socials/instagram.png'
import linkedin from '../../public/socials/linkedin.png'
import Contact from "./Contact";

const Footer = () => {
  return (
    <footer className="mt-20 border-t-2 border-gray-200 col-span-12 h-[32rem] relative z-10 ">
      <div className="ml-24 md:ml-32 lg:w-[80%] lg:mx-auto grid grid-cols-1 sm:grid-cols-6 pt-6 gap-12">
        <Contact />
        <article className=" hidden  sm:flex flex-col gap-8 sm:col-span-2">
          <span className="inline-block h-12 translate-y-3 rotate-[-2deg] bg-[hsla(0deg,100%,40%,0.3)] w-fit">
            <h2 className="text-4xl font-bold translate-y-[-0.2em] text-accent rotate-3">
              AbdDEV
            </h2>
          </span>
          <div className="flex flex-col gap-4">
            <a className=" w-fit bg-[hsla(0deg,100%,40%,0.3)] flex items-center gap-2"><Image src={github} alt="github icon" className="w-6 h-6 inline-block"/>Github</a>
            <a className=" w-fit bg-[hsla(0deg,100%,40%,0.3)] flex items-center gap-2"><Image src={linkedin} alt="linkedin icon" className="w-6 h-6 inline-block"/>LinkedIn</a>
            <a className=" w-fit bg-[hsla(0deg,100%,40%,0.3)] flex items-center gap-2"><Image src={x} alt="twitter icon" className="w-6 h-6 inline-block"/>X (Twitter)</a>
            <a className=" w-fit bg-[hsla(0deg,100%,40%,0.3)] flex items-center gap-2"><Image src={insta} alt="insta icon" className="w-6 h-6 inline-block"/>Instagram</a>
          </div>
        </article>

      </div>
      <div className="mt-2"><p className="w-fit block mx-auto text-[0.3em] sm:text-sm text-gray-500">Copyright &copy; Abdullah Islam 2024. All rights reserved.</p></div>
    </footer>
  );
};

export default Footer;
