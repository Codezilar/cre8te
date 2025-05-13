"use client"
import React, { useEffect, useState } from 'react';
import { FaRegTimesCircle } from "react-icons/fa";
import './Nav.css';
import logo from '../../assets/logo.webp';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/Data/data';
import { PiSquaresFour } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Nav = () => {
    const [fixed, setFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;
            setFixed(scroll > 200);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`nav-container`}>
            <div className="top-nav">
                <div className="limit">
                    <button className="">Limited Offer</button>
                    <p className='limit-text'>
                        30% off on all premium plans to first 600 users
                    </p>
                    <Link className="purchace" href='/'>
                        <p className="">Purchase Now</p> <FaArrowRight />
                    </Link>
                </div>
                <FaRegTimesCircle className='cancle' />
            </div>
            <nav className={`${fixed ? 'fixed' : ''}`}>
                <div>
                    <Image className="logo" height={55} width={201} alt="Company Logo" src={logo} />
                </div>
                <div className="nav-right">
                    <ul>
                        {navLinks.map((link) => (
                            <Link href={link.href}  key={link.label} className="li">
                                {link.label}
                            </Link>
                        ))}
                        <Link href="/" className="button">
                            Get Started FREE
                        </Link>
                    </ul>
                    <span>
                        <div className="menu">
                            <PiSquaresFour className='icon' />
                        </div>
                    </span>
                    <span>
                        <div className="menu bar">
                            <FaBars className='icon' />
                        </div>
                    </span>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
