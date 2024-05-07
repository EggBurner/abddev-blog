"use client"

import React, { useState} from 'react'
import Image from 'next/image'
import copy from '../../public/copy.png'


const CopyButton = () => {
    const [copied, setCopied] = useState(false)
    const email = 'itsabddev@gmail.com'


    const handleClick = () => {
        navigator.clipboard.writeText(email)
        .then(() => setCopied(true))
        .catch((err) => console.log("Error while copying email", err))

    }
  return (
    <button className="flex gap-2 border-2 border-gray-700 text-gray-600 px-4 py-2 rounded-md items-center justify-center" onClick={handleClick}>
    <Image
      src={copy}
      alt="copy email"
      width={20}
      height={20}
      className="opacity-50 dark:invert"
    />
    {copied? 'Email Copied' : 'Copy email'}
  </button>
  )
}

export default CopyButton