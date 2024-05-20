import React from "react";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";

const prisma = new PrismaClient();

const page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  let blog;

  try {
    blog = await prisma.blog.findUnique({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.error("Error while retreiving form data", error);
  } finally {
    await prisma.$disconnect();
  }

  return (
    <main>
      <section>
        <article className="mt-10">
          <p className="text-gray-400 text-sm">{blog?.createdAt.toDateString()}</p>
          <div className="h-96 w-[90%] overflow-hidden group">
            <Image
              src={blog?.titleImg ?? ""}
              alt={blog?.title ?? ""}
              width={600}
              height={400}
              className="w-[60%] sm:w-[75%] h-96 object-cover rounded-xl absolute peer"
            />
            <h1 className="relative sm:translate-y-[28rem] translate-x-4 w-[60%] sm:w-[75%] text-2xl sm:text-4xl font-bold sm:group-hover:translate-y-80 transition-transform duration-300 text-white">{blog?.title}</h1>
          </div>
        </article>
        <article className="mt-10 w-[90%] sm:w-[80%]">
          <p>{blog?.contentOne}</p>
          <Image
            src={blog?.imageOne ?? ""}
            alt="decoration"
            width={600}
            height={400}
            className="w-full h-60 sm:h-96 object-cover rounded-xl mt-10 "
          />
        </article>
        <article className="mt-10 w-[90%] sm:w-[80%]">
          <p>{blog?.contentTwo}</p>
          <Image
            src={blog?.imageTwo ?? ""}
            alt="decoration"
            width={600}
            height={400}
            className="w-full h-60 sm:h-96 object-cover rounded-xl mt-10 "
          />
        </article>
        <article className="mt-10 w-[90%] sm:w-[80%]">
          <p>{blog?.contentThree}</p>
          <Image
            src={blog?.imageThree ?? ""}
            alt="decoration"
            width={600}
            height={400}
            className="w-full h-60 sm:h-96 object-cover rounded-xl mt-10 "
          />
        </article>
        <article className="mt-10 w-[90%] sm:w-[80%]">
          <p>{blog?.contentFour}</p>
          <Image
            src={blog?.imageFour ?? ""}
            alt="decoration"
            width={600}
            height={400}
            className="w-full h-60 sm:h-96 object-cover rounded-xl mt-10 "
          />
        </article>
        <article className="mt-10 w-[90%] sm:w-[80%]">
          <p>{blog?.contentFive}</p>
          <Image
            src={blog?.imageFive ?? ""}
            alt="decoration"
            width={600}
            height={400}
            className="w-full h-60 sm:h-96 object-cover rounded-xl mt-10 "
          />
        </article>
      </section>
    </main>
  );
};

export default page;
