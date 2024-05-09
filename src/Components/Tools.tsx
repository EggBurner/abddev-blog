import React from "react";
import Image from "next/image";

import git from "../../public/technologies/git-seeklogo.svg";
import github from "../../public/technologies/github-seeklogo.svg";
import mongoDB from "../../public/technologies/mongodb-seeklogo.svg";
import express from "../../public/technologies/express.png";
import nodejs from "../../public/technologies/node-js-seeklogo.svg";
import react from "../../public/technologies/react-seeklogo.svg";
import tailwind from "../../public/technologies/tailwind-css-seeklogo.svg";
import nextjs from "../../public/technologies/next-js-seeklogo.svg";
import typescript from "../../public/technologies/typescript-seeklogo.svg";
import prisma from "../../public/technologies/prisma-seeklogo.svg";
import postman from "../../public/technologies/postman-seeklogo.svg";
import { it } from "node:test";

const Tools = () => {
  const toolArr = [
    {
      name: "MERN Stack",
      tools: [mongoDB, express, react, nodejs],
    },
    {
      name: "Meta Frameworks",
      tools: [nextjs],
    },
    {
      name: "Version Control",
      tools: [git, github],
    },
    {
      name: "Miscellaneous",
      tools: [typescript, tailwind, prisma, postman],
    },
  ];
  return (
    <section className="mt-12">
      <span className="inline-block h-12 translate-y-3 rotate-[-2deg] bg-[hsla(0deg,100%,40%,0.3)]">
        <h2 className="text-4xl font-bold translate-y-[-0.2em] text-accent rotate-3">
          Tools
        </h2>
      </span>
      <article className="grid grid-cols-2 gap-1 rounded-lg w-[90%] mt-10 tools-article">
        {toolArr.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[hsla(0deg,0%,30%,0.2)] dark:bg-[hsla(0deg,100%,0%,0.4)] px-6 py-6 font-semibold text-lg flex items-center justify-between group tool"
            >
              <p>{item.name}</p>
              <div className="flex w-fit justify-end gap-4">
                {item.tools.map((tool, index) => {
                  return <Image src={tool} key={index} alt="Tool Icons" className=" w-9 translate-y-20 opacity-0 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 tool-icon"/>;
                })}
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Tools;
