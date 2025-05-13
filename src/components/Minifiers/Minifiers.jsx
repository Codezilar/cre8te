import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { minifiers } from '@/Data/data'

const Minifier = () => {
  return (
    <div className='calculator converter'>
        <div className="cal-top">
            <h3 className="">Minifiers</h3>
            <span>
                These tools help users reduce the size of files, such as images, videos, and documents, to optimize performance and save storage space.
            </span>
            <div className="cal-line"></div>
        </div>
        <div className="cal-conatiner">
          {minifiers.map((mini) =>(
            <Link href={mini.href} key={mini.text} className="cal-content">
              <Image src={mini.img} alt={mini.text} height={40} width={40} />
              <p>{mini.text}</p>
              <button className="">
                Try It Now
              </button>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default Minifier