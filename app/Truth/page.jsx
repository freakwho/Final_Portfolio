"use client";
import { assets, infoList, toolsData, serviceData, workData, security, securityService, securityExperience, minaHead, minaBody, theTruth } from '@/assets/assets'
import Image from 'next/image'
import React, { use, useEffect, useRef, useState } from 'react'
import Link from 'next/link';

const page = () => {

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

    return (
        <div id='homes'>
            {/* Navbar Section */}
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                <Image src={assets.header_bg_color} alt='' className='w-full' />
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-blend-exclusion bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
                <a href="#homes" className='text-5xl w-28 cursor-pointer mr-14'>
                    Wahyu
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}`}>
                    <li><Link className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo' href="/">Web Developer<Image src={assets.arrow_icon} alt='' className='w-3' /></Link></li>
                    <li><Link className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo' href="/Security">Security Experience<Image src={assets.arrow_icon} alt='' className='w-3' /></Link></li>
                </ul>

                <div className='flex items-center gap-4'>
                    <Link className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo' href="/#contact">Contact Me<Image src={assets.arrow_icon} alt='' className='w-3' /></Link>

                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={assets.menu_black} alt='' className='w-6' />
                    </button>
                </div>

                {/* ---mobile menu--- */}

                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>

                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={assets.close_black} alt='' className='w-5 cusor-pointer' />
                    </div>

                    <li><a className='font-Ovo' onClick={closeMenu} href="#home">Home</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#about">About Me</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#services">Services</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#work">My Project</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#experience">Experience</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact Me</a></li>
                    <li><Link href="/Truth" className='text-xl'>The <span className='text-red-500'>truth</span></Link></li>
                    <li><Link className='font-Ovo' href="/Security">Security Experience</Link></li>

                </ul>

            </nav >

            {/* Truth Section */}
            <div id='experiences' className='w-full px-[12%] scroll-mt-20'>
                <h2 className='text-center text-5xl font-Ovo pt-30 mb-10'>The <span>Truth</span></h2>

                <div className='w-full left-1/2 px-5 items-center justify-between  rounded-sm'>
                    {theTruth.map(({ icon, title, description }, index) => (
                        <div key={index}>
                            <div className='grid md:grid-cols-2 gap-5 mb-15'>
                                <Image src={icon} className='rounded-xl w-100 ml-20 max-w-100 max-h-60' alt='' />
                                <div className='text-2xl rounded-xl px-5 mt-5'>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
}
export default page;
