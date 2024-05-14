import React, { Suspense } from "react";
import BlogIntro from "@/Components/BlogIntro";
import AllBlogs from "@/Components/AllBlogs";
import Fallback from "./Fallback";

const page = () => {
  return (
    <main>
      <BlogIntro />
      <Suspense fallback={<Fallback />} >
        <AllBlogs />
      </Suspense>
    </main>
  );
};

export default page;
