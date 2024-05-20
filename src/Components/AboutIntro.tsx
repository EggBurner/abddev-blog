import React from 'react'
import Image from 'next/image'

import me from '../../public/me.jpg'

const AboutIntro = () => {
  return (
    <section>
        <article>
            <h1 className='text-4xl font-bold'>Hi, I'm Abdullah Islam</h1>
            <p className='text-lg'>I'm a full stack developer and a student at the University of Toronto. I love to build things and learn new technologies.</p>
        </article>
        <article className='w-60'>
        <Image src={me} alt='Me irl' className='w-full rounded-2xl'/>
        </article>
    </section>
  )
}

export default AboutIntro
