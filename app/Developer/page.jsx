"use client";
import { assets, infoList, toolsData, serviceData, workData, developerExperience } from '@/assets/assets'
import Image from 'next/image'
import React, { use, useEffect, useRef, useState } from 'react'
import Link from 'next/link';

const page = () => {

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
        <div className='bg-gradient-to-r from-green-100 to-blue-50'>

            {/* NavBar Section */}
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-blend-exclusion bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
                <a href="#home" className='font-Ovo text-5xl w-28 cursor-pointer mr-14'>
                    Wahyu
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}`}>
                    <li><a className='font-Ovo' href="#home">Home</a></li>
                    <li><a className='font-Ovo' href="#about">About Me</a></li>
                    <li><a className='font-Ovo' href="#services">Services</a></li>
                    <li><a className='font-Ovo' href="#experience">My Experience</a></li>
                    <li><a className='font-Ovo' href="#project">My Project</a></li>
                    <li><Link className='font-Ovo' href="/#contact">Contact Me</Link></li>
                </ul>

                <div className='flex items-center gap-4'>

                    <Link className='hidden lg:flex items-center gap-3 px-10 py-2.5 border-3 border-black rounded-full ml-4 font-Ovo bg-white' href="/">Back</Link>

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
                    <li><a className='font-Ovo' onClick={closeMenu} href="#experience">My Experience</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#project">My Project</a></li>
                    <li><Link className='font-Ovo' onClick={closeMenu} href="/#contact">Contact Me</Link></li>
                    <li><Link className='font-Ovo' onClick={closeMenu} href="/">Back</Link></li>

                </ul>

            </nav >

            {/* Home Section */}
            <div id='home' className='w-11/12 max-w-3xl text-center mx-auto h-screen mt-1 flex flex-col items-center justify-center gap-3'>
                <div>
                    <Image src={assets.profile_img_trans} alt='' className='rounded-full w-25 px-1' />
                </div>
                <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
                    Hello I'm Wahyu</h3>
                <h1 className='text-3xl sm:text-8xl lg:text-[50px] font-Ovo'>
                    Junior Web Developer</h1>
                <p className='max-w-2xl mx-auto font-Ovo'>
                    I am a junior web developer from Jakarta, Indonesia with a strong desire to learn, and I would be delighted if you would invite me to join your company.
                </p>
                <p className='text-2xl sm:text-2xl lg:text-[40px] font-Ovo'>
                    My Resume
                </p>
                <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                    <a id='CV_Download' href="/CV/CV_IT_English.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>English <Image src={assets.download_icon} alt='' className='w-4' /></a>

                    <a id='CV_Download' href="/CV/CV_IT.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
                        Indonesian <Image src={assets.download_icon} alt='' className='w-4' /></a>
                </div>
            </div>

            {/* About Section */}
            <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
                <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
                <h2 className='text-center text-5xl font-Ovo'>About Me</h2>

                <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                    <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                        <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
                    </div>
                    <div className='flex-1'>
                        <p className='mb-10 max-w-2xl font-Ovo'>
                            I'm a fresh graduate with enthusiasm, desire, and a strong vision to work in the information technology sector at a company. I have a knowledge of website development, from front-end developer to back-end developer.</p>

                        <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                            {infoList.map(({ icon, iconDark, title, description }, index) => (
                                <li id='AboutCard' key={index}>
                                    <Image src={icon} alt={title} className='w-7 mt-3' />
                                    <h3 className='my-4 font-semibold'>{title}</h3>
                                    <p className='text-gray-600 text-sm'>{description}</p>
                                </li>
                            ))}
                        </ul>

                        <h4 className='my-6 text-gray-700 font-Ovo'>Tools I Use</h4>

                        <ul className='flex items-center gap-3 sm:gap-5'>
                            {toolsData.map((tool, index) => (
                                <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}><Image src={tool} alt='Tool' className='w-5 sm:w-7' /></li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>

            {/* Services Section */}
            <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
                <h4 className='text-center mb-2 text-lg font-Ovo'>What I Offer</h4>
                <h2 className='text-center text-5xl font-Ovo'>My Services</h2>

                <p className='text-center text-xl max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>These are some of the skills I learned during my studies and participating in several training programs.</p>

                <div className='grid grid-cols-4 gap-6 my-10' id='ServicesCard'>
                    {serviceData.map(({ icon, title, description, link }, index) => (
                        <div key={index} id='ServicesShadow'>
                            <Image src={icon} alt='' className='w-10' />
                            <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                            <p className='text-sm text-gray-600 leading-5'>{description}</p>
                            <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                                Read more <Image alt='' src={assets.right_arrow} className='w-4' />
                            </a>
                        </div>
                    ))}
                </div>

            </div>

            {/* Experience Section */}
            <div id='experience' className='w-full px-[12%] py-5 scroll-mt-20'>
                <h2 className='text-center text-5xl font-Ovo py-5'>Experience</h2>

                {developerExperience.map(({ head, date, body1, body2, body3, body4 }, index) => (
                    <div key={index}>
                        <div className='w-full bottom-5 left-1/2 py-10 px-5 items-center justify-between mb-10'>
                            <h1 className='text-3xl text-shadow-black text-left'>{head}</h1>
                            <p className='text-sm mb-8'>{date}</p>
                            <div>
                                <div id='xp' className='grid md:grid-cols-2 gap-6 text-xl bottom-5  py-3 px-5 items-center justify-between border border-y-neutral-400 bg-gradient-to-r from-stone-95 to-transparent rounded-xl'>
                                    <p>{body1}</p>
                                    <p>{body2}</p>
                                    <p>{body3}</p>
                                    <p>{body4}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Project Section */}
            <div id='project' className='w-full px-[12%] py-10 scroll-mt-20'>
                <h4 className='text-center mb-2 text-lg font-Ovo'>My Portfolio</h4>
                <h2 className='text-center text-5xl font-Ovo'>My Project</h2>

                <div id='WorkCard' className='grid grid-cols-2 my-10 gap-30'>
                    {workData.map((project, index) => (
                        <div key={index}
                            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                            style={{ backgroundImage: `url(${project.bgImage})` }}>
                            <div className='bg-white w-10/12 rounded-sm absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                                <div>
                                    <h2 className='font-semibold'>{project.title}</h2>
                                </div>
                                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                                    <a href={project.link}>
                                        <Image src={assets.send_icon} alt='send icon' className='w-5' />
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Seciton */}
            <div className='mt-20'>
                <div className='text-center'>
                    <a href="#home">
                        <Image src={assets.top_arrow} alt='' className='mx-auto mb-2 rounded-full w-15 px-1 items-center' />
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
    );
}
export default page;
