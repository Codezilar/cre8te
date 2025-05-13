import BasicHero from '@/components/BasicHero/BasicHero'
import Calculator from '@/components/Calculator/Calculator'
import React from 'react'
import './BasicTool.css'
import Converter from '@/components/Converter/Converter'
import Minifier from '@/components/Minifiers/Minifiers'
import Counters from '@/components/Counters/Counters'


const BasicTool = () => {
  return (
      <div className='BasicToolContainer'>
          <BasicHero />
          <Calculator />
          <Converter />
          <Minifier />
          <Counters />
      </div>
  )
}

export default BasicTool