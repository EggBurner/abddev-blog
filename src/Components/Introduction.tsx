import React from 'react'
import Image from 'next/image'

import me from '../../public/me.jpg'

const Intro = () => {
  return (
    <section className="mt-8">
        <Image src={me} alt='Profile photo' width={60} height={60} className="rounded-full" />
        <h1 className="text-6xl">Hey there, its Addy</h1>
    </section>
  )
}

export default Intro
