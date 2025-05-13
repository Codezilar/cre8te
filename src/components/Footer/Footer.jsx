"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import './Footer.css'
import Link from 'next/link'
import person from '../../assets/person.webp'
import { accordins, boost, create, reviews} from '@/Data/data'
import logo from '../../assets/logo.webp'
import { FaArrowRight } from "react-icons/fa";
import '../Calculator/Calculator.css'
import avaCha from '../../assets/boy.png';
import { FaPlus } from "react-icons/fa";
import { LuCheckCheck } from "react-icons/lu";

import trust from '../../assets/trust.png';
import vert from '../../assets/vert.png';
import pent from '../../assets/pent.png';
import hit from '../../assets/hit.png';
import level from '../../assets/level.png';
import lum from '../../assets/lum.png';
import vol from '../../assets/vol.png';
import home from '../../assets/home.png';
import minty from '../../assets/minty.png';
import network from '../../assets/network.png';
import umb from '../../assets/umb.png';
import st from '../../assets/st.png';

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  return (
    <div className='footer'>
        <div className="sep"></div>
        <div className="first-container">
          <div className="instant">
            <Image src={person} alt='person' className='person' />
            <div className="right">
                <h2 className="">
                  Instant Content Creation with AI
                </h2>
                <p className="">
                  Unlock Conversion-Driven Content: Business Bios, Facebook Ads, Product Descriptions, Emails, Landing Pages, Social Ads, and Beyond.
                </p>
                <div className="craft">
                  <p>
                    - Craft Articles in Under 20 Seconds.
                  </p>
                  <p className="">
                    - Generate High-Quality Images in Seconds.
                  </p>
                  <p className="">
                    - Create Videos in Minutes.
                  </p>
                  <p className="">
                    - Save $1000s on Multiple Subscriptions.
                  </p>
                  <p className="">
                    - Reclaim Hundreds of Valuable Hours with AI
                  </p>
                </div>
                <Link href={'/'} className='get' >
                  Get Started Now
                </Link>
            </div>
          </div>
          <div className="footer-banner">
              <div className="footer-banner-left">
                 <h2 className="">
                    Let’s Create 
                    <br />
                    Something 
                    <br />
                    Awesome with
                    <br />
                    <span>Cre8teGPT</span>
                 </h2>
                 <p>
                  Your All-in-One AI Content Creation Platform 
                  <br />
                  that helps you create content faster and better.
                 </p>
                 <Link href={'/'} className='banner-foot-btn' >
                  Get Started Free
                 </Link>
              </div>
              <div className="footer-banner-right">
                {create.map((creat, index)=>(
                  <Link href={'/'} key={index} className='banner_right_link' >
                    <Image src={creat.img} className='banner_right_ig' alt='alt' />
                  </Link>
                ))}
              </div>
          </div>
            <div>
              <div className="sep2"></div>

              <div className="review">
                <div className="top">
                  <div className='top_text'>
                    <span>
                      Reviews
                    </span>
                  </div>
                  <h3>
                    2,000+ Cre8tors & Teams
                    <br/>
                    Choose Cre8teGPT
                  </h3>
                </div>
                <div className="review-wrapp">
                  <div className="review-container review_left">
                      {reviews.map((review, index)=>(
                        <div className="review-content" key={index}>
                          <div className="review-content-top">
                              <div className="review-avatar">
                                <Image src={avaCha} className='review_img' height={50} width={50} alt="alt" />
                                <div className="review-info">
                                  <h3>{review.name}</h3>
                                  <p>{review.niche}</p>
                                </div>
                              </div>
                          </div>
                          <p className="review-text">
                            {review.desc}
                          </p>
                        </div>
                      ))}
                  </div>
                  <div className="review-container review_right">
                      {reviews.map((review, index)=>(
                        <div className="review-content" key={index}>
                          <div className="review-content-top">
                              <div className="review-avatar">
                                <Image src={avaCha} className='review_img' height={50} width={50} alt="alt" />
                                <div className="review-info">
                                  <h3>{review.name}</h3>
                                  <p>{review.niche}</p>
                                </div>
                              </div>
                          </div>
                          <p className="review-text">
                            {review.desc}
                          </p>
                        </div>
                      ))}
                  </div>
                  <div className="review-container review_left">
                      {reviews.map((review, index)=>(
                        <div className="review-content" key={index}>
                          <div className="review-content-top">
                              <div className="review-avatar">
                                <Image src={avaCha} className='review_img' height={50} width={50} alt="alt" />
                                <div className="review-info">
                                  <h3>{review.name}</h3>
                                  <p>{review.niche}</p>
                                </div>
                              </div>
                          </div>
                          <p className="review-text">
                            {review.desc}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              
              <div className="sep2"></div>
              

              <div className="pricing">
                <div className="top">
                  <div className='top_text'>
                    <span>
                    Pricing
                    </span>
                  </div>
                  <h3>
                    Gain access to 100s of Tools
                    <br/>
                    for the price of Starbucks  
                  </h3>
                  <p>
                    For only $9.99 per month charged annually, you can access all of our tools  
                  </p>
                </div>
                <div className="price-bar">
                  <div className='price-btn'><p>Monthly</p></div>
                  <div className="price-btn yearly">Yearly <span>35% Off</span></div>
                </div>
                <div className="price-container">
                  <div className="price-content">
                    <div className='price-top'>
                      <span>Free</span>
                      <div className="digit">Free</div>
                      <p>
                        Forever
                        <br />
                        Billed yearly at 
                        <br />
                        $00.00
                      </p>                  
                    </div>
                    
                    <div className="cal-line"></div>

                    <div className="price-center">
                      <div className="">             
                        <p><LuCheckCheck /> 10 Cre8dits / month</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> +1 daily when monthly cre8dits run out</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> 1 Language</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Basic Tools</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Content Prompts</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Content Generators</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Content Editors</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Content Assistants</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Content Agents</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Full Access</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Purchase more cre8dits at a discount</p>
                      </div>
                      <Link className="try_it_now" href={'/'} >Try it now</Link>
                    </div>
                  </div> 
                  <div className="price-content">
                    <div className='price-top'>
                      <span className="starter">Starter</span>
                      <div className="digit"> <span>$</span>9.99</div>
                      <p>
                      USD Per Month
                        <br />
                        Billed yearly at
                        <br />
                        $119.99
                      </p>                  
                    </div>
                    
                    <div className="cal-line"></div>

                    <div className="price-center">
                      <div className="">             
                        <p><LuCheckCheck /> 10 Cre8dits / month</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> +1 daily when monthly cre8dits run out</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> 1 Language</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Basic Tools</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Content Prompts</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Content Generators</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Content Editors</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Content Assistants</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Content Agents</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Full Access</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Purchase more cre8dits at a discount</p>
                      </div>
                      <Link className="try_it_now ty_it_now_background" href={'/'} >Try it now</Link>
                    </div>
                  </div> 
                  <div className="price-content">
                    <div className='price-top'>
                      <span className="starter">Cre8tor</span>
                      <div className="digit"><span>$</span>19.99</div>
                      <p>
                        USD Per Month
                        <br />
                        Billed yearly at 
                        <br />
                        $239.99
                      </p>                  
                    </div>
                    
                    <div className="cal-line"></div>

                    <div className="price-center">
                      <div className="">             
                        <p><LuCheckCheck /> 10 Cre8dits / month</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> +1 daily when monthly cre8dits run out</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> 1 Language</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Basic Tools</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Content Prompts</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Content Generators</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Content Editors</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Content Assistants</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Content Agents</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Full Access</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Purchase more cre8dits at a discount</p>
                      </div>
                      <Link className="try_it_now ty_it_now_background" href={'/'} >Try it now</Link>
                    </div>
                  </div> 
                  <div className="price-content">
                    <div className='price-top'>
                      <span className="starter">Business</span>
                      <div className="digit"><span>$</span>39.99</div>
                      <p>
                        USD Per Month
                        <br />
                        Billed yearly at 
                        <br />
                        $479.99
                      </p>                  
                    </div>
                    
                    <div className="cal-line"></div>

                    <div className="price-center">
                      <div className="">             
                        <p><LuCheckCheck /> 10 Cre8dits / month</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> +1 daily when monthly cre8dits run out</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> 1 Language</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Basic Tools</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Content Prompts</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Content Generators</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Content Editors</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Content Assistants</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Content Agents</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Full Access</p>
                      </div>
                      <div className="">             
                        <p><LuCheckCheck /> Purchase more cre8dits at a discount</p>
                      </div>
                      <Link className="try_it_now" href={'/'} >Try it now</Link>
                    </div>
                  </div> 
                </div>
              </div>
              
              <div className="sep"></div>

              <div className="accordion">
                <div className="top">
                  <div className='top_text'>
                    <span>
                      Accordion
                    </span>
                  </div>
                  <h3>
                    Frequently Asked Questions
                  </h3>
                </div>
                <div className="accordion-wrapper">
                {accordins.map((accordin, index) => (
                  <div className="accordion-container" key={accordin.text}>
                    <span onClick={() => toggleAccordion(index)}>
                      <h3>{accordin.text}</h3>
                      <FaPlus />
                    </span>
                    <p className={`${openIndex === index ? 'show-accord' : ''}`}>
                      {accordin.desc}
                    </p>
                  </div>
                ))}
                </div>
              </div>

                
              <div className="sep team-container-none"></div>
              <div className="teams team-container-none">
                <h3>Trusted by 5.5k+ content cre8tors, teams, and companies.2</h3>
                <div className="team-container">
                  <Image src={trust} alt="alt" />
                  <Image src={vert} alt="alt" />
                  <Image src={pent} alt="alt" />
                  <Image src={hit} alt="alt" />
                  <Image src={level} alt="alt" />
                  <Image src={lum} alt="alt" />
                  <Image src={vol} alt="alt" />
                  <Image src={home} alt="alt" />
                  <Image src={minty} alt="alt" />
                  <Image src={network} alt="alt" />
                  <Image src={umb} alt="alt" />
                  <Image src={st} alt="alt" />
                </div>
              </div>
            </div>
          <div className="sep2"></div>

          <div className="boost">
            <span>
              Boost your writing productivity
            </span>
            <h1>
              Overcome Writer's Block Today
            </h1>
            <p>
              Gain Access to 100s of <strong>Powerful AI Tools</strong> under One Roof
            </p>
            <Link href={'/'} className='boost-btn'>
              Get 10 FREE Cre8dits
            </Link>
          </div>
          <div className="boost-conatiner">
            <div className="cal-conatiner">
              {boost.map((boos) =>(
                <Link href={boos.href} key={boos.text} className={`${boos.margin === '2'?'margin-2': ''} ${boos.margin === '3'?'margin-3': ''} cal-content`}>
                  {boos.feature?
                    <span className="">
                      {boos.feature}
                    </span>:
                    ""
                  }
                  <Image src={boos.img} alt={boos.text} height={40} width={40} />
                  <p>{boos.text}</p>
                  <button className="">
                    Try It Now
                  </button>
                </Link>
              ))}
          </div>
          </div>
        </div>
        <div className="sep2 sep-foot"></div>
        <div className="before-foot">
          <Image src={logo} alt='logo' className='foot-logo' />
          <p className="">
            Cre8te Anything With Cre8teGPT. Only 
            <br />
            $9.99
          </p>
         <div className="cal-line"></div>
        </div>
        <footer>
          <div className="newsletter">
              <h4 className="">Newsletter</h4>
              <p>
                2000+ Our clients are <br/> subscribe Around the World
              </p>
              <form className="">
                <input className="" type='text' placeholder='Enter Your Email Here' />
                <button className="">
                  <FaArrowRight />
                </button>
              </form>
          </div>
          <div className='footer-item'>
            <div className="services">
              <h4 className="">Newsletter</h4>
              <ul className="">
                <Link className="foot-link" href={'#'}>Testimonials</Link>
                <Link className="foot-link" href={'#'}>Company</Link>
                <Link className="foot-link" href={'#'}>Marketing</Link>
                <Link className="foot-link" href={'#'}>Startup</Link>
              </ul>
            </div>
            <div className="product">
              <h4 className="">Products</h4>
              <ul className="">
                <Link className="foot-link" href={'#'}>About</Link>
                <Link className="foot-link" href={'#'}>Portfolio</Link>
                <Link className="foot-link" href={'#'}>Blog</Link>
                <Link className="foot-link" href={'#'}>Contact</Link>
                <Link className="foot-link" href={'#'}>Service</Link>
              </ul>
            </div>
            <div className="company">
              <h4 className="">Company</h4>
              <ul className="">
                <Link className="foot-link" href={'#'}>Corporate</Link>
                <Link className="foot-link" href={'#'}>Portfolio</Link>
                <Link className="foot-link" href={'#'}>SEO Agency</Link>
                <Link className="foot-link" href={'#'}>Web Agency</Link>
              </ul>
            </div>
            <div className="solutions">
              <h4 className="">Solutions</h4>
              <ul className="">
                <Link className="foot-link" href={'#'}>Gallery</Link>
                <Link className="foot-link" href={'#'}>Testimonial</Link>
                <Link className="foot-link" href={'#'}>Contact</Link>
                <Link className="foot-link" href={'#'}>Service</Link>
              </ul>
            </div>
          </div>
        </footer>
        <div className="footer-last">
          <div className="footer-left">
            <p>Privacy Policy</p>
            <p>Terms Of Service</p>
            <p>Contact Us</p>
          </div>
          <div className="footer-right">
            <p>Copyright © 2024</p>
            <Link href={'/'} className='footer-last-link'>Cre8teGPT</Link>
          </div>
        </div>

    </div>
  )
}

export default Footer