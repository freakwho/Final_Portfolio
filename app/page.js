"use client";
import { assets, infoList, toolsData, serviceData, workData, security, securityService, securityExperience, minaHead, minaBody, theTruth } from '@/assets/assets'
import Image from 'next/image'
import React, { use, useEffect, useRef, useState } from 'react'
import Link from 'next/link';

export default function Home() {

  // Navbar Section
  const [isScroll, setIsScroll] = useState(false)

  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
  }, [])

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7ad81f79-c519-4155-b84f-8e559a464467");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className="bg-white">

      <div id='home'>

        {/* Navbar Section */}
        <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
          <Image src={assets.header_bg_color} alt='' className='w-full' />
        </div>
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-blend-exclusion bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
          <a href="#homes" className='text-5xl w-28 cursor-pointer mr-14'>
            Wahyu
          </a>

          <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}`}>
            <li><Link className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo' href="/Developer">Web Developer<Image src={assets.arrow_icon} alt='' className='w-3' /></Link></li>
            <li><Link className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo' href="/Security">Security Guard<Image src={assets.arrow_icon} alt='' className='w-3' /></Link></li>
          </ul>

          <div className='flex items-center gap-4'>
            <Link className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo bg-white' href="/#contact">Contact Me<Image src={assets.arrow_icon} alt='' className='w-3' /></Link>

            <button className='block md:hidden ml-3' onClick={openMenu}>
              <Image src={assets.menu_black} alt='' className='w-6' />
            </button>
          </div>

          {/* ---mobile menu--- */}

          <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>

            <div className='absolute right-6 top-6' onClick={closeMenu}>
              <Image src={assets.close_black} alt='' className='w-5 cusor-pointer' />
            </div>

            <li><Link className='font-Ovo' onClick={closeMenu} href="/Security">Security Guard</Link></li>
            <li><Link className='font-Ovo' onClick={closeMenu} href="/Developer">Web Developer</Link></li>
            <li><Link className='font-Ovo' onClick={closeMenu} href="/#contact">Contact Me</Link></li>
          </ul>

        </nav >

        {/* Truth Section */}
        <div id='experiences' className='w-full px-[12%] scroll-mt-20'>
          <h2 className='text-center text-5xl font-Ovo pt-30 mb-10'>The <span>Truth</span></h2>

          <div className='w-full left-1/2 px-5 items-center justify-between  rounded-sm'>
            {theTruth.map(({ icon, title, description }, index) => (
              <div key={index}>
                <div className='grid md:grid-cols-2 gap-2 mb-15'>
                  <Image src={icon} className='rounded-xl w-100 max-w-100 max-h-60' alt='' />
                  <div className='text-2xl rounded-xl px-5 mt-5 max-w-2xl'>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Contact Section */}
        <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[lenght:90%_auto]'>
          <h4 className='text-center mb-2 text-lg font-Ovo'>Connect With Me</h4>
          <h2 className='text-center text-5xl font-Ovo'>Get In Touch</h2>

          <p className='text-center text-xl max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I'd love to hear from you if you have any question, comments, or feedback, please fill out the form below</p>

          <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8 '>
              <input type="text" placeholder='Enter your name' required
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='name' />
              <input type="email" placeholder='Enter your email' required
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='email' />
            </div>
            <textarea rows='6' placeholder='Enter your message' required
              className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' name='message'>
            </textarea>

            <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>
              Submit now <Image src={assets.right_arrow_white} alt='' className='w-4' />
            </button>

            <p className='mt-4'>{result}</p>
          </form>

        </div>

        {/* Footer Section */}
        <div className='mt-20'>
          <div className='text-center'>
            <a href="#home">
              <Image src={assets.top_arrow} alt='' className='mx-auto mb-2 rounded-full w-15 px-1 items-center
                            ' />
            </a>
            <div className='w-max flex items-center gap-2 mx-auto'>
              <Image src={assets.mail_icon} alt='' className='w-6' />
              wahyu000prabowo@gmail.com
            </div>
          </div>

          <div className='text-center sm:flex items-center justify-between border-t border-gray-400 
                    mx-[10%] mt-12 py-6'>
            <p>ⓒ 2025 Umbrella Corps. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
              <li><a target='_blank' href="https://github.com/freakwho">GitHub</a></li>
              <li><a target='_blank' href="https://www.linkedin.com/in/wahyu-prabowo-23714b176">LinkedIn</a></li>
              <li><a target='_blank' href="https://www.instagram.com/freakwho/">Instagram</a></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}