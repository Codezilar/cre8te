import React from 'react'
import './tools.css'
import Image from 'next/image'
import cat from '../../assets/cat.png'
import anime from '../../assets/anime.png'
import anigirl from '../../assets/anigirl.png'
import cusmic from '../../assets/cusmic.png'
import '../../components/Calculator//Calculator.css'
import Link from 'next/link'
import { cal } from '@/Data/data'

const page = () => {
  return (
    <div className='tool-browser'>
        <div className="tool_wrapp">
            <div className="tools-hero">
                <div className="tools-left tool-fly">
                    <p>Content Generators</p>
                    <Image src={cat} height={70} width={70} alt='img'/>
                </div>
                <div className="tools-right tool-fly">
                    <Image src={anime} height={70} width={70} alt='img'/>
                    <p>Content Assistants</p>
                </div>
                <div className="tools-bottom-left tool-fly">
                    <Image src={anigirl} height={50} width={50} alt='img'/>
                    <p>Content Editors</p>
                </div>
                <div className="tools-bottom-right tool-fly">
                    <p>Content Agents</p>
                    <Image src={cusmic} height={50} width={50} alt='img'/>
                </div>
                <div className="tool-center">
                    <h1>
                        BROWSE <span>148</span> POWERFUL AI TOOLS
                    </h1>
                    <p className="">
                        Feeling overwhelmed by all the overly expensive AI 
                        tools out there? We've been there! That's why we 
                        built this directory repository – to be your personal 
                        guide to the coolest and most helpful AI solutions. 
                        Whether you're a content creating machine or just 
                        getting started with AI, there are over 100 tools 
                        here to boost your creativity, marketing, and 
                        productivity.
                    </p>
                </div>
                <div className="tools-left tool-fly">

                </div>
                <div className="tool-form">
                    <input type="text" placeholder="Describe your goal and we'll list the AI tools you need to make sure" />
                    <button>Search</button>
                </div>

                <div className="want-to">
                    <p>Want to publish a story</p>
                    <p>Need help with writing a blog post</p>
                    <p>Create a logo for my business</p>
                    <p>Looking to make ads for my social media</p>
                    <p>Need a logo for my business</p>
                    <p>Need help with creating a website</p>
                    <p>Want to create realistic 3D avatars</p>
                    <p>Need to grow my YouTube channel</p>
                </div>

            </div>
        </div>
        <div className="BasicToolContainer">
            <div className='calculator'>
                <div className="cal-top">
                    <h3 className="">Content Generators</h3>
                    <span>
                        These tools generate various types of content, such as text, images, videos, and more, based on user input or predefined parameters. They are designed to assist users in quickly creating high-quality and relevant content for a variety of purposes, including marketing, communication, and creative projects.
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
        </div>
    </div>
  )
}

export default page