import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { counter } from '@/Data/data'

const Counters = () => {
  return (
    <div className='calculator converter'>
        <div className="cal-top">
            <h3 className="">Counters</h3>
            <span>
            These tools help users count the number of words, characters, sentences, and other elements in a text or document.
            </span>
            <div className="cal-line"></div>
        </div>
        <div className="cal-conatiner">
          {counter.map((count) =>(
            <Link href={count.href} key={count.text} className="cal-content">
              <Image src={count.img} alt={count.text} height={40} width={40} />
              <p>{count.text}</p>
              <button className="">
                Try It Now
              </button>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default Counters