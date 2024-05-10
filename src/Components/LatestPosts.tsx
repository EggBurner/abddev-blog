import React from "react";
import { PrismaClient } from "@prisma/client";

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
    <section className="mt-10">
      <span className="inline-block h-12 translate-y-3 rotate-[-2deg] bg-[hsla(0deg,100%,40%,0.3)]">
        <h2 className="text-4xl font-bold translate-y-[-0.2em] text-accent rotate-3">
          Latest Posts
        </h2>
      </span>
    </section>
  );
};

export default LatestPosts;
