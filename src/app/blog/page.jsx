import React from 'react'
import '../../app/page.css'
import './blog.css'
import Link from 'next/link'
const page = () => {
  return (
    <div>
        <div className="blog-hero">
            <span className="">Our Blog</span>
            <p><Link href={'/'}>Home</Link> <li>Blog</li></p>
        </div>    
        <div className="sep"></div>
    </div>
  )
}

export default page