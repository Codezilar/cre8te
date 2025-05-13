import Image from "next/image";
import "./page.css";
import Link from "next/link";
import editors from '@/assets/editor.webp'
import copywriter from '@/assets/copywriter.webp'
import developer from '@/assets/developer.webp'
import startup from '@/assets/startup.webp'

import ava1 from '@/assets/150.png'
import ava2 from '@/assets/1501.png'
import ava3 from '@/assets/1502.png'
import ava4 from '@/assets/1503.png'
import ava5 from '@/assets/1504.png'
import ava6 from '@/assets/1505.png'

import leftHand from '@/assets/hand (1).png'
import rightHand from '@/assets/hand.png'
import laptop from '@/assets/laptop.webp'

import { FcDownRight } from "react-icons/fc";
import { IoSunnyOutline } from "react-icons/io5";
import { MdOutlineShowChart, MdOutlineSpeaker } from "react-icons/md";
import { FaTv } from "react-icons/fa6";
import { GiFoldedPaper } from "react-icons/gi";


import Casess from "@/components/Cases/Casess";

export default function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="home-hero">
          <div className="home-hero-left hero-suspend">
            <div className="home-fly fly-1">
              <Image className="hero-image" height={40} width={40} src={editors} alt="fly" />
              <p className="">Editor</p>
            </div>
            <div className="home-fly fly2">
              <Image className="hero-image" height={40} width={40} src={copywriter} alt="fly" />
              <p className="">Copywritters</p>
            </div>
            <div className="home-fly fly5">
              <Image className="hero-image" height={40} width={40} src={copywriter} alt="fly" />
              <p className="">Content Creators</p>
            </div>
            <div className="home-fly fly6">
              <Image className="hero-image" height={40} width={40} src={copywriter} alt="fly" />
              <p className="">Businesses</p>
            </div>
            <div className="home-fly fly9">
              <Image className="hero-image" height={40} width={40} src={copywriter} alt="fly" />
              <p className="">Non-Profit</p>
            </div>
          </div>
          <div className="home-hero-center">
            <span className="theme-gradient">Try Cre8teGPT</span>
            <h2 className="">
              100s of <span>AI Tools</span> 1 <span>Subscription</span> $9.99
            </h2>
            <p className="ai-power">
              Your <span>All-in-One AI-Powered Game Changer</span> designed to empower content creators, copywriters, students, influencers and businesses of all sizes.
              <span>Discover 100+ AI Tools In 1 Place!</span>
            </p>
            <Link className="hero_link" href={'/'}>Try with 30 FREE cre8dits</Link>
            
          </div>
          <div className="home-hero-right hero-suspend">
            <div className="home-fly fly3">
              <Image className="hero-image" height={40} width={40} src={developer} alt="fly" />
              <p className="">Developers</p>
            </div>
            <div className="home-fly fly4">
              <Image className="hero-image" height={40} width={40} src={developer} alt="fly" />
              <p className="">Startups</p>
            </div>
            <div className="home-fly fly7">
              <Image className="hero-image" height={40} width={40} src={startup} alt="fly" />
              <p className="">Freelancers</p>
            </div>
            <div className="home-fly fly8">
              <Image className="hero-image" height={40} width={40} src={startup} alt="fly" />
              <p className="">YouTubers</p>
            </div>
            <div className="home-fly fly10">
              <Image className="hero-image" height={40} width={40} src={startup} alt="fly" />
              <p className="">Students</p>
            </div>
          </div>
        </div>
        <div className="user-area">
            <p className="">
              2,000+ Cre8tors saving 100s of hours
            </p>
            <div className="avatar-container">
              <div className="avatar">
                <Image className='avatar-img' src={ava1} height={40} width={40} alt='avatar' />
              </div>
              <div className="avatar avatar1 ava-color1">
                <Image className='avatar-img' src={ava2} height={40} width={40} alt='avatar' />
              </div>
              <div className="avatar avatar1 ava-color2">
                <Image className='avatar-img' src={ava3} height={40} width={40} alt='avatar' />
              </div>
              <div className="avatar avatar1 ava-color3">
                <Image className='avatar-img' src={ava4} height={40} width={40} alt='avatar' />
              </div>
              <div className="avatar avatar1 ava-color4">
                <Image className='avatar-img' src={ava5} height={40} width={40} alt='avatar' />
              </div>
              <div className="avatar avatar1 ava-color5">
                <Image className='avatar-img' src={ava6} height={40} width={40} alt='avatar' />
              </div>
        
            </div>
        </div>
        <div className="laptop">
          <Image height={470} width={691} className="lap" src={laptop} alt="laptop" />
          <div className="hands">
            <Image height={575} width={231} src={leftHand} alt="hand" className="left" />
            <Image height={575} width={231} src={rightHand} alt="hand" className="right" />
          </div>
        </div>
        <div className="key">
          <div className="sep2">

          </div>
          <div className="boost">
            <span>
              KEY FEATURES & BENEFITS
            </span>
            <h3>
              Why Cre8teGPT is Your Creative Playground
            </h3>
            <p>
            We're not just another app; we're your one-stop shop for cutting-edge AI tools designed to supercharge your creativity and productivity
            </p>
          </div>
          <div className="key-container">
            <div className="key-content">
              <FcDownRight className="key-icon" />
              <h3>All-in-one AI Arsenal</h3>
              <p className="">
                Ditch the app overload! Cre8teGPT offers a vast library of advanced AI tools under one roof. From content generation and code writing to video editing and data analysis, we've got you covered.
              </p>
            </div>
            <div className="key-content">
              <IoSunnyOutline className="key-icon" />
              <h3>Unlock Your Potential</h3>
              <p className="">
                Whether you're a YouTuber crafting killer scripts, a novelist battling writer's block, or a marketer brainstorming brilliant campaigns, Cre8teGPT empowers everyone to achieve more.
              </p>
            </div>
            <div className="key-content">
              <MdOutlineShowChart className="key-icon" />
              <h3>Improved Content Quality</h3>
              <p className="">
                Cre8teGPT doesn't just generate content, it optimizes it for success with SEO suggestions, audience personalization, and content quality improvement.
              </p>
            </div>
            <div className="key-content">
              <FaTv className="key-icon" />
              <h3>Effortless Efficiency</h3>
              <p className="">
                Say goodbye to tedious tasks! Cre8teGPT automates repetitive processes, freeing up your time to focus on what matters most – your creative vision.
              </p>
            </div>
            <div className="key-content">
              <MdOutlineSpeaker className="key-icon" />
              <h3>Level Up Your Skills</h3>
              <p className="">
                Boost your expertise with AI-powered suggestions, tutorials, and insights. Whether you're a seasoned pro or just starting out, Cre8teGPT helps you learn and grow.
              </p>
            </div>
            <div className="key-content">
              <GiFoldedPaper className="key-icon" />
              <h3>Stand Out from the Crowd</h3>
              <p className="">
              Impress your audience with unique, AI-assisted content and workflows. Cre8teGPT is your secret weapon for making a lasting impact.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sep2">
      </div>
      <Casess />

      <div className="sep"></div>
      <div className="works">
        <div className="boost">
            <span>
              HOW IT WORKS
            </span>
            <h3>
              3 Steps Content Cre8tion Journey
            </h3>
            <p>
              Imagine having a team of the world's brightest AI minds at your beck and call, all accessible through one subscription. That's the magic of Cre8teGPT!
            </p>
        </div>
        <div className="works-wrapper">
          <div className="works-container">
            <div className="works-content">
              <h3>1. Input Your Ideas</h3>
              <div className="work-line">
                <div className="work-circle">
                  <div className="small-circle">

                  </div>
                </div>
                <span className="">
                  
                </span>
              </div>
              <p className="">
                Begin by inputting your ideas, prompts, or requirements into Cre8teGPT's user-friendly interface.
              </p>
            </div>
            <div className="works-content">
              <h3>2. Let AI Get to Work</h3>
              <div className="work-line">
                <span className="">

                </span>
                <div className="work-circle">
                  <div className="small-circle">

                  </div>
                </div>
                <span className="">

                </span>
              </div>
              <p className="">
                Sit back and watch as Cre8teGPT works its magic to produce engaging and relevant content in mere seconds.
              </p>
            </div>
            <div className="works-content">
              <h3>3. Refine and Customize</h3>
              <div className="work-line work_right">
                <span className="">

                </span>
                <div className="work-circle">
                  <div className="small-circle">

                  </div>
                </div>
              </div>
              <p className="">
                Review the results & refine it to perfection. Cre8teGPT ensures your creations are polished and ready to captivate your audience.
              </p>
            </div>
          </div>
          <div className="works-btns">
            <Link href={'/'} className="colored" >Explore More AI Tools</Link>
            <Link href={'/'} className="non-colored" >See action in video</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
