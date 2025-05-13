import React from 'react'
import Casess from '@/components/Cases/Casess'
import '../../app/page.css'
import './usecases.css'

const page = () => {
  return (
    <div>
        <div className="usecase">
            <span className="use-case">
                Use Cases
            </span>
            <h2 className="">
                Discover how Cre8teGPT can
                <br />
                boost your creativity & productivity
            </h2>
            <p>
                Cre8teGPT is a versatile platform that can be used 
                <br />
                for a wide range of purposes. Here are some of 
                <br />
                the most popular use cases of Cre8teGPT.
            </p>
        </div>
        <Casess /> 
    </div>
  )
}

export default page