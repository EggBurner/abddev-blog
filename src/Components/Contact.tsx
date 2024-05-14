"use client";

import React, { useRef } from "react";

const Contact = () => {
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        ref.current?.reset();
      } else {
        alert("Failed to send message, try again later.");
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };
  return (
    <article className=" sm:col-span-4 flex flex-col gap-8 w-[90%] lg:w-full">
      <span className="inline-block h-12 translate-y-3 rotate-[-2deg] bg-[hsla(0deg,100%,40%,0.3)] w-fit">
        <h2 className="text-4xl font-bold translate-y-[-0.2em] text-accent rotate-3">
          Contact
        </h2>
      </span>
      <form action={handleSubmit} ref={ref} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            type={"text"}
            required
            minLength={3}
            maxLength={25}
            placeholder="Enter your name here"
            name="name"
            className=" bg-gray-300 placeholder-gray- dark:bg-gray-700  p-2 rounded-md text-slate-300 border-none outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type={"text"}
            placeholder="Enter your Email here"
            name="email"
            className=" bg-gray-300 placeholder-gray- dark:bg-gray-700 p-2 rounded-md text-slate-300 border-none outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="Type your message here"
            required
            name="message"
            rows={5}
            className=" bg-gray-300 placeholder-gray- dark:bg-gray-700  p-2 rounded-md text-slate-300 border-none outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 resize-none message-textarea"
          />
        </div>
        <div>
          <button type={"submit"} className="bg-accent px-4 py-2 rounded-md text-[#f3f3f3]" >Send</button>
        </div>
      </form>
    </article>
  );
};

export default Contact;
