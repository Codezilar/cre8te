import React from 'react'
import './Calculator.css'
import Image from 'next/image'
import Link from 'next/link'
import { cal } from '@/Data/data'

const Calculator = () => {
  return (
    <div className='calculator'>
        <div className="cal-top">
            <h3 className="">Calculators</h3>
            <span>
                These tools help users perform mathematical calculations, such as addition, subtraction, multiplication, division, and more. 
                <br />
                They can be used to solve a wide range of problems, from simple arithmetic to complex equations.
            </span>
            <div className="cal-line"></div>
        </div>
        <div className="cal-conatiner">
          {cal.map((culate) =>(
            <Link href={culate.href} key={culate.text} className="cal-content">
              <Image src={culate.img} alt={culate.text} height={40} width={40} />
              <p>{culate.text}</p>
              <small>{culate.desc}</small>
              <button className="">
                Try It Now
              </button>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default Calculator