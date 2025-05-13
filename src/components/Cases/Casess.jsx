import Image from "next/image";
import Link from "next/link";

import text_line from '@/assets/text_line.webp'
import photo_line from '@/assets/photo_line.webp'
import video_camera_line from '@/assets/video-camera_line.webp'
import articlce_line from '@/assets/article_line.webp'
import recipe_line from '@/assets/recipe_line.png'
import text_voice_line from '@/assets/text-voice_line.png'
import voice_line from '@/assets/voice_line.png'
import photo_editor_line from '@/assets/photo-editor_line.png'
import writing_assistant_line from '@/assets/writing-assistant_line.png'
import youtube_assistant_line from '@/assets/youtube-assistant_line.png'
import youtube_script_line from '@/assets/youtube-script_line.png'


import { FaArrowRightLong } from "react-icons/fa6";

const cases = () => {
  return (
    <div className="home-tools">
        <div className="home-tools-container">
          <div className="home-tools-content">
            <span className="">
              Hundreds of AI Tools
            </span>
            <h2>
              What You 
              <br/> 
              Get
              <br/> 
              On 
              <br/> 
              Cre8teGPT
            </h2>
            <Link className="firt-tool-link" href={'/'}>View All Tools <FaArrowRightLong /></Link>
          </div>
          <div className="tools-content">
            <span>
              <Image src={text_line} height={50} width={50} alt="'tools" />
            </span>
            <h2>AI Chat</h2>
            <p>
              Running GPT-4o, our AI chat tool can help you generate human-like text responses to any prompt or question you provide.
            </p>
            <Link href={'/'} className="tool-link">Try AI Chat  <FaArrowRightLong /></Link>
          </div>
          <div className="tools-content">
            <span>
              <Image src={photo_line} height={50} width={50} alt="'tools" />
            </span>
            <h2>Image Generator</h2>
            <p>
              Create stunning images for your website, social media, or marketing campaigns with our AI-powered image generator.
            </p>
            <Link href={'/'} className="tool-link">Try Image Generator <FaArrowRightLong /></Link>
          </div>
          <div className="tools-content">
            <span>
              <Image src={video_camera_line} height={50} width={50} alt="'tools" />
            </span>
            <h2>Video Generator</h2>
            <p>
              Quickly create engaging videos for your business, blog, or social media with our AI-powered video generator.
            </p>
            <Link href={'/'} className="tool-link">Try Video Generator <FaArrowRightLong /></Link>
          </div>
          <div className="tools-content">
            <span>
              <Image src={articlce_line} height={50} width={50} alt="'tools" />
            </span>
            <h2>Article Generator</h2>
            <p>
              Stop staring at a blank page. Generate high-quality, SEO-friendly articles from keywords, domains, or URLs.
           </p>
            <Link href={'/'} className="tool-link">Try Article Generator <FaArrowRightLong /></Link>
          </div>
          <div className="tools-content">
            <span>
              <Image src={recipe_line} height={50} width={50} alt="'tools" />
            </span>
            <h2>Recipe Generator</h2>
            <p>
              Our recipe generator suggests delicious dishes based on your available ingredients, helping you cook with what you have at home.
            </p>
            <Link href={'/'} className="tool-link">Try Recipe Generator <FaArrowRightLong /></Link>
          </div>
          <div className="tools-content">
            <span>
              <Image src={text_voice_line} height={50} width={50} alt="'tools" />
            </span>
            <h2>Text to speech</h2>
            <p>
            Convert any text into a human-like voice with our AI-powered text-to-speech generator.
            </p>
            <Link href={'/'} className="tool-link">Try Text to speech <FaArrowRightLong /></Link>
          </div>
          <div className="tools-content">
            <span>
              <Image src={voice_line} height={50} width={50} alt="'tools" />
            </span>
            <h2>Speech to text</h2>
            <p>
            Convert any recording or audio file into text with our AI-powered speech-to-text generator.
            </p>
            <Link href={'/'} className="tool-link">Try Speech to text <FaArrowRightLong /></Link>
          </div>
          <div className="tools-content">
            <span>
              <Image src={'/'} height={50} width={50} alt="'tools" />
            </span>
            <h2>YouTube Summarizer</h2>
            <p>
              Summarize any YouTube video into a concise text summary with our AI-powered YouTube video summarizer.
            </p>
            <Link href={'/'} className="tool-link">Try YouTube Summarizer <FaArrowRightLong /></Link>
          </div>
          <div className="tools-content">
            <span>
              <Image src={'/'} height={50} width={50} alt="'tools" />
            </span>
            <h2>YouTube Channel Analyzer</h2>
            <p>
              Analyze any YouTube channel, video, or playlist with our AI-powered YouTube channel analyzer.
            </p>
            <Link href={'/'} className="tool-link">Try YouTube Channel Analyzer <FaArrowRightLong /></Link>
          </div>
          <div className="tools-content">
            <span>
              <Image src={photo_editor_line} height={50} width={50} alt="'tools" />
            </span>
            <h2>Photo Editor</h2>
            <p>
            Edit and enhance your photos with our AI-powered photo editor. Remove backgrounds, retouch images, and more.
            </p>
            <Link href={'/'} className="tool-link">Try Photo Editor <FaArrowRightLong /></Link>
          </div>
          <div className="tools-content">
            <span>
              <Image src={writing_assistant_line} height={50} width={50} alt="'tools" />
            </span>
            <h2>Writing Assistant</h2>
            <p>
              Improve your writing with our AI-powered writing assistant. Get suggestions for grammar, style, and more.
            </p>
            <Link href={'/'} className="tool-link">Try Writing Assistant <FaArrowRightLong /></Link>
          </div>
          <div className="tools-content">
            <span>
              <Image src={youtube_assistant_line} height={50} width={50} alt="'tools" />
            </span>
            <h2>YouTube Video Assistant</h2>
            <p>
            Get help with your YouTube video ideas, titles, descriptions, tags, and more with our AI-powered YouTube video assistant.
            </p>
            <Link href={'/'} className="tool-link">Try YouTube Video Assistant <FaArrowRightLong /></Link>
          </div>
          <div className="tools-content">
            <span>
              <Image src={youtube_script_line} height={50} width={50} alt="'tools" />
            </span>
            <h2>YouTube Script Assistant</h2>
            <p>
              Generate video scripts, outlines, or ideas for your YouTube channel with our AI-powered YouTube script assistant.
            </p>
            <Link href={'/'} className="tool-link">Try YouTube Script Assistant <FaArrowRightLong /></Link>
          </div>
        </div>
        <Link href={'/'} className="explore-link" ><FaArrowRightLong /> Explore More AI Tools</Link>
    </div>
  )
}

export default cases