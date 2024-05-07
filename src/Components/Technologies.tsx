import React from 'react'
import Image from 'next/image'

import bash from '../../public/technologies/bash-seeklogo.svg'
import bootstrap from '../../public/technologies/bootstrap-5-seeklogo.svg'
import git from '../../public/technologies/git-seeklogo.svg'
import github from '../../public/technologies/github-seeklogo.svg'
import mongoDB from '../../public/technologies/mongodb-seeklogo.svg'
import nodejs from '../../public/technologies/node-js-seeklogo.svg'
import netlify from '../../public/technologies/netlify-icon-seeklogo.svg'
import postman from '../../public/technologies/postman-seeklogo.svg'
import prisma from '../../public/technologies/prisma-seeklogo.svg'
import react from '../../public/technologies/react-seeklogo.svg'
import typescript from '../../public/technologies/typescript-seeklogo.svg'
import vercel from '../../public/technologies/vercel-seeklogo.svg'
import vite from '../../public/technologies/vite-seeklogo.svg'
import tailwind from '../../public/technologies/tailwind-css-seeklogo.svg'
import nextjs from '../../public/technologies/next-js-seeklogo.svg'
import express from '../../public/technologies/express.png'

const Technologies = () => {

  const arr = [
    {
        tech: react,
        name: 'React'
    },
    {
        tech: nextjs,
        name: 'Next Js'
    },
    { 
        tech: mongoDB,
        name: 'MongoDB'
    },
    {
        tech: nodejs,
        name: 'NodeJS'
    },
    {
        tech: express,
        name: 'Express'
    },
    { 
        tech: typescript,
        name: 'TypeScript'
    },
    {
        tech: tailwind,
        name: 'TailwindCSS'
    },
    {
        tech: git,
        name: 'Git'
    },
    {
        tech: github,
        name: 'Github'
    },
    {
        tech: bootstrap,
        name: 'Bootstrap'
    },
    {
        tech: postman,
        name: 'Postman',
    },
    {
        tech: prisma,
        name: 'Prisma'
    },
    {
        tech: vite,
        name: 'Vite'
    },
    {
        tech: bash,
        name: 'Bash'
    },
    {
        tech: vercel,
        name: 'Vercel'
    },
    {
        tech: netlify,
        name: 'Netlify'
    }
  ]

  return (
    <section className="mt-16">
      <span className="inline-block h-12 translate-y-3 rotate-[-2deg] bg-[hsla(0deg,100%,40%,0.3)]"><h2 className="text-4xl font-bold translate-y-[-0.2em] text-accent rotate-3">Technologies</h2></span>
      <p className="mt-8">Here are some of the technologies I use everday:</p>
      <article className="grid grid-cols-6 w-full items-center justify-center gap-y-6 mt-10">
        {arr.map((obj, index) => (
            <div key={index} className="flex flex-col gap-2 justify-center center w-fit">
                <Image src={obj.tech} alt='a technology' width={50} height={50} className='peer translate-all duration-200 hover:translate-y-[-1em]'/>
                <p className="self-center opacity-0 peer-hover:opacity-100 transition-all duration-200">{obj.name}</p>
            </div>

        ))}
      </article>
    </section>
  )
}

export default Technologies



