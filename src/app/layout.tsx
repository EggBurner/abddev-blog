import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import SideBar from "@/Components/SideBar";
import Header from "@/Components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AbdDEV",
  description: "A blog plus portfolio website for Abdullah Islam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} grid grid-cols-10 sm:grid-cols-12 dark:bg-slate-800 dark:text-[#f1f1f1]`}>
        <SideBar />
        <div className=" col-span-7 sm:col-span-10">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
