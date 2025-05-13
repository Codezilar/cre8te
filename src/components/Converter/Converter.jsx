import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { converter } from '@/Data/data'

const Converter = () => {
  return (
    <div className='calculator converter'>
        <div className="cal-top">
            <h3 className="">Converters</h3>
            <span>
                These tools help users convert data from one format to another. They can be used to convert text, images, audio, video, and other types of data.
            </span>
            <div className="cal-line"></div>
        </div>
        <div className="cal-conatiner">
          {converter.map((convo) =>(
            <Link href={convo.href} key={convo.text} className="cal-content">
              <Image src={convo.img} alt={convo.text} height={40} width={40} />
              <p>{convo.text}</p>
              <button className="">
                Try It Now
              </button>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default Converter