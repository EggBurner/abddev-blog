import React from "react";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

const AllBlogs = async () => {
  let response;
  try {
    // await new Promise((resolve) => setTimeout(resolve, 900000))
    response = await prisma.blog.findMany({
      select: {
        title: true,
        contentOne: true,
        createdAt: true,
        id: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 10,
    });
  } catch (error) {
    console.error("Error while retreiving form data", error);
  } finally {
    await prisma.$disconnect();
  }

  return (
    <section className="flex flex-col gap-4 mt-12">
      {response?.map((blog, index) => {
        return (
          <Link href={`/blog/${blog.id}`} key={index} >
            <article
              className="w-[90%] sm:w-[70%] bg-black bg-opacity-30 py-6 px-8 rounded-2xl flex flex-col gap-2 border-2 border-transparent hover:border-accent transition duration-300 ease-in-out"
            >
              <h2 className=" text-lg sm:text-2xl text-accent font-semibold">
                {blog.title}
              </h2>
              <p className="truncate text-sm sm:text-lg">{blog.contentOne}</p>
              <p className="text-[0.6em] text-gray-700 dark:text-gray-400">
                {blog.createdAt.toDateString()}
              </p>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default AllBlogs;
