import React from "react";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import red from "../../public/red.jpeg";

const prisma = new PrismaClient();

const LatestPosts = async () => {
  let blogs;
  try {
    blogs = await prisma.blog.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 4,
    });
  } catch (err) {
    console.log("Error while fetching blogs for latest posts", err);
  } finally {
    await prisma.$disconnect();
  }

  return (
    <section className="mt-12 w-[90%]">
      <span className="inline-block h-12 translate-y-3 rotate-[-2deg] bg-[hsla(0deg,100%,40%,0.3)]">
        <h2 className="text-4xl font-bold translate-y-[-0.2em] text-accent rotate-3">
          Latest Posts
        </h2>
      </span>
      <article className="grid grid-cols-1 sm:grid-cols-2 gap-1 rounded-lg w-full mt-10  tools-article">
        {blogs?.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-[hsla(0deg,0%,30%,0.2)] dark:bg-[hsla(0deg,100%,0%,0.4)] px-6 py-6 group"
          >
            <Image
              src={red}
              alt="red color decoration"
              className="w-12 h-12 block rounded-lg"
            />
            <div className="flex flex-col flex-wrap w-4/5 gap-1 text-ellipsis overflow-hidden">
              <h2 className="text-lg font-semibold group-hover:underline">{item.title}</h2>
              <p className="text-ellipsis overflow-hidden dark:text-[hsla(0deg,0%,100%,0.5)] text-[hsla(0deg,100%,0%,0.8)]">
                {item.contentOne}
              </p>
            </div>
          </div>
        ))}
      </article>
      <div>
        <Link href={'/blog'}><button className="float-right mt-6 bg-accent px-4 py-2 rounded-md text-[#f3f3f3]">More Posts</button></Link>
      </div>

    </section>
  );
};

export default LatestPosts;
