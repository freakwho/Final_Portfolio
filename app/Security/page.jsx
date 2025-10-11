"use client";
import { assets, security, securityService, minaHead, minaExp, securityExperienceEka, securityExperienceSayap } from '@/assets/assets'
import Image from 'next/image'
import React, { use, useEffect, useRef, useState } from 'react'
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const page = () => {

    // Navbar Section
    const [isScroll, setIsScroll] = useState(false)

    const sideMenuRef = useRef();

    const dropMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    const openMen = () => {
        dropMenuRef.current.style.transform = 'translateY(-16rem)'
    }

    const closeMen = () => {
        dropMenuRef.current.style.transform = 'translateY(16rem)'
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
        <div className='bg-gradient-to-r from-black to-purple-800'>
            {/* NavBar Section */}
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-blend-exclusion bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
                <a href="#homes" className='font-Sec text-5xl w-28 cursor-pointer mr-14'>
                    Wahyu
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-black shadow-sm bg-opacity-50"}`}>
                    <li><a className='font-Sec' href="#homes">Home</a></li>
                    <li><a className='font-Sec' href="#abouts">About Me</a></li>
                    <li><a className='font-Sec' href="#servicess">Services</a></li>
                    <div>
                        <FlyoutLink href='#' FlyoutContent={PricingContent}>
                            <li><p className='font-Sec'>My Experience</p></li>
                        </FlyoutLink>
                    </div>
                    <li><Link className='font-Sec' href="/#contact">Contact Me</Link></li>
                </ul>

                <div className='flex items-center gap-4'>

                    <Link className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-white rounded-full ml-4 font-Sec bg-black' href="/">Back</Link>

                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={assets.menu_black} alt='' className='w-6' />
                    </button>
                </div>

                {/* ---mobile menu--- */}

                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-purple-900 transition duration-500'>

                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={assets.close_black} alt='' className='w-5 cusor-pointer' />
                    </div>

                    <li><a className='font-Sec' onClick={closeMenu} href="#homes">Home</a></li>
                    <li><a className='font-Sec' onClick={closeMenu} href="#abouts">About Me</a></li>
                    <li><a className='font-Sec' onClick={closeMenu} href="#servicess">Services</a></li>
                    <div>
                        <FlyoutLink href='#' FlyoutContent={PricingContent}>
                            <li><p className='font-Sec'>My Experience</p></li>
                        </FlyoutLink>
                    </div>
                    <li><Link className='font-Sec' onClick={closeMenu} href="/#contact">Contact Me</Link></li>
                    <li><Link className='font-Sec' href="/">Back</Link></li>

                </ul>

                {/* Experience Dropdown Menu */}

                {/* <ul ref={dropMenuRef} className='flex flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-purple-900 transition duration-500'>

                    <div className='absolute right-6 top-6' onClick={closeMen}>
                        <Image src={assets.close_black} alt='' className='w-5 cusor-pointer' />
                    </div>

                    <li><a className='font-Sec' onClick={closeMen} href="#pertamina">Pertamina</a></li>
                    <li><a className='font-Sec' onClick={closeMen} href="#ekanuri">Ekanuri</a></li>
                    <li><a className='font-Sec' onClick={closeMen} href="#sayap">Sayap Mas Utama</a></li>

                </ul> */}

            </nav >

            {/* Home Section */}
            <div id='homes' className='w-11/12 max-w-3xl text-center mx-auto h-screen mt-1 flex flex-col items-center justify-center gap-3'>
                <div>
                    <Image src={assets.profile_img_trans} alt='' className='rounded-full w-25 px-1' />
                </div>
                <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Sec'>
                    Hello I'm Wahyu</h3>
                <h1 className='text-3xl sm:text-8xl lg:text-[50px] font-Sec'>
                    Security Guard</h1>
                <p className='max-w-2xl mx-auto font-Sec'>
                    A security guard from Jakarta, Indonesia with about 8 years of experience, and I would be happy if you invite me to join your company.
                </p>
                <p className='text-2xl sm:text-2xl lg:text-[40px] font-Sec'>
                    My Resume
                </p>

                <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                    <a href="/CV/CV_SATPAM_English.pdf" download className='font-Sec px-10 py-3 border rounded-full border-white flex items-center gap-2'>English <Image src={assets.download_icon_dark} alt='' className='w-4' /></a>

                    <a href="/CV/CV_SATPAM.pdf" download className='font-Sec px-10 py-3 border rounded-full border-white flex items-center gap-2'>
                        Indonesian <Image src={assets.download_icon_dark} alt='' className='w-4' /></a>
                </div>
            </div>

            {/* About Section */}
            <div id='abouts' className='w-full px-[12%] py-10 scroll-mt-20'>
                <h4 className='text-center mb-2 text-lg font-Sec'>Introduction</h4>
                <h2 className='text-center text-5xl font-Sec'>About Me</h2>

                <div className='flex w-full flex-col lg:flex-row items-center gap-20'>
                    <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                        <Image src={assets.user_image_secure_trans} alt='user' className='w-full rounded-3xl' />
                    </div>
                    <div className='flex-1'>
                        <p className='mb-15 max-w-2xl font-Sec'>
                            I've been a security guard for almost eight years. Able to work under pressure, and have the ability to learn new things. Hardworking, disciplined, and responsible —that's what they say about me.</p>

                        <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                            {security.map(({ icon, title, description }, index) => (
                                <li id='AboutCards' key={index}>
                                    <Image src={icon} alt={title} className='w-7 mt-3' />
                                    <h3 className='my-4 font-semibold text-white'>{title}</h3>
                                    <p className='font-Sec text-sm'>{description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>

            {/* Service Section */}
            <div id='servicess' className='w-full px-[12%] py-10 scroll-mt-20'>
                <h4 className='text-center mb-2 text-lg font-Sec'>What I Offer</h4>
                <h2 className='text-center text-5xl font-Sec'>My Services</h2>

                <p className='text-center text-xl max-w-2xl mx-auto mt-5 mb-12 font-Sec'>These are some of the skills I learned during my experience.</p>

                <div className='grid grid-cols-4 gap-6 my-10' id='ServicesCards'>
                    {securityService.map(({ icon, title, description, link }, index) => (
                        <div key={index} id='ServicesShadows'>
                            <Image src={icon} alt='' className='w-10' />
                            <h3 className='text-lg my-4 text-white'>{title}</h3>
                            <p className='text-sm text-white leading-5'>{description}</p>
                            <a href={link} className='flex items-center gap-2 text-sm mt-5 text-white'>
                                Read more <Image alt='' src={assets.right_arrow} className='w-4' />
                            </a>
                        </div>
                    ))}
                </div>

            </div>

            {/* Experience Section */}
            <div className='w-full px-[12%] scroll-mt-20'>
                <h2 className='text-center text-5xl font-Sec py-5 mb-5' id='pertamina'>Experience</h2>

                <div className='w-full bottom-5 left-1/2 px-5 items-center justify-between  rounded-xl mb-5 font-Sec'>

                    {minaHead.map(({ company, vendor, date, icon, title, list1, list2, list3, list4, next }, index) => (
                        <div key={index}>
                            <div className='items-center text-center mb-10'>
                                <h1 className='text-3xl font-semibold'>{company}</h1>
                                <span className='text-xl'>{vendor}</span>
                                <p className='text-sm mb-8'>{date}</p>
                            </div>

                            <div className='grid md:grid-cols-2 gap-2 mb-10'>
                                <Image src={icon} className='rounded-xl w-100' alt='' />
                                <div className='text-xl rounded-xl'>
                                    <p className='text-3xl font-semibold'>{title}</p>
                                    <ul className='text-lg font-semibold mt-8 max-w-lg mb-5 justify-between'>
                                        <li>{list1}</li>
                                        <li>{list2}</li>
                                        <li>{list3}</li>
                                        <li>{list4}</li>
                                    </ul>
                                    <p className='text-lg'>{next}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {minaExp.map(({ icon, title, list1, list2, list3, list4, list5 }, index) => (
                        <div key={index} className='grid md:grid-cols-2 gap-2 mb-10'>
                            <Image src={icon} className='rounded-xl w-100' alt='' />
                            <div className='text-xl rounded-xl'>
                                <p className='text-3xl font-semibold'>{title}</p>
                                <ul className='text-lg font-semibold mt-8 max-w-lg mb-5 justify-between'>
                                    <li>{list1}</li>
                                    <li>{list2}</li>
                                    <li>{list3}</li>
                                    <li>{list4}</li>
                                    <li>{list5}</li>
                                </ul>
                            </div>
                        </div>
                    ))}

                </div >

                {securityExperienceEka.map(({ icon, company, vendor, date, title, list1, list2, list3, list4, list5, list6 }, index) => (
                    <div key={index} className='w-full bottom-5 left-1/2 px-5 items-center justify-between  rounded-xl mb-5 font-Sec' id='eka'>
                        <div>
                            <div className='items-center text-center mb-10 mt-20'>
                                <h1 className='text-3xl text-shadow-black font-semibold'>{company}</h1>
                                <span className='text-xl'>{vendor}</span>
                                <p className='text-sm mb-10'>{date}</p>
                            </div>
                            <div className='grid md:grid-cols-2 gap-2 mb-5'>
                                <Image src={icon} className='rounded-xl w-100' alt='' />
                                <div className='text-xl rounded-xl'>
                                    <p className='text-3xl font-semibold'>{title}</p>
                                    <ul className='text-lg font-semibold mt-5 max-w-lg mb-5 justify-between'>
                                        <li>{list1}</li>
                                        <li>{list2}</li>
                                        <li>{list3}</li>
                                        <li>{list4}</li>
                                        <li>{list5}</li>
                                        <li>{list6}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {securityExperienceSayap.map(({ icon, company, vendor, date, title, list1, list2, list3, list4, list5, list6 }, index) => (
                    <div key={index} className='w-full bottom-5 left-1/2 px-5 items-center justify-between  rounded-xl mb-5 font-Sec' id='sayap'>
                        <div>
                            <div className='items-center text-center mb-10 mt-20'>
                                <h1 className='text-3xl text-shadow-black font-semibold'>{company}</h1>
                                <span className='text-xl'>{vendor}</span>
                                <p className='text-sm mb-10'>{date}</p>
                            </div>
                            <div className='grid md:grid-cols-2 gap-2 mb-5'>
                                <Image src={icon} className='rounded-xl w-100' alt='' />
                                <div className='text-xl rounded-xl'>
                                    <p className='text-3xl font-semibold'>{title}</p>
                                    <ul className='text-lg font-semibold mt-5 max-w-lg mb-5 justify-between'>
                                        <li>{list1}</li>
                                        <li>{list2}</li>
                                        <li>{list3}</li>
                                        <li>{list4}</li>
                                        <li>{list5}</li>
                                        <li>{list6}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            {/* Footer Section */}
            <div className='mt-20 font-Sec'>
                <div className='text-center'>
                    <a href="#homes">
                        <Image src={assets.top_arrow_dark} alt='' className='mx-auto mb-2 rounded-full w-15 px-1 items-center
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
    );
};

// Security Experience Dropdown Menu

const FlyoutLink = ({ children, href, FlyoutContent }) => {
    const [open, setOpen] = useState(false);

    const showFlyout = open && FlyoutContent;

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="group relative h-fit w-fit"
        >

            <a href={href} className="relative text-white">
                {children}
                <span
                    style={{
                        transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
                    }}
                    className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
                />
            </a>
            <AnimatePresence>
                {showFlyout && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        style={{ x: "-50%" }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="absolute left-1/2 top-12 bg-transparent text-black">
                        <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                        <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 ratote-45 bg-transparent" />
                        <FlyoutContent />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const PricingContent = () => {
    return (
        <div className="w-45 bg-purple-900 p-6 shadow-xl rounded-xl">
            <div className="mb-3 space-y-3">
                <a className="block text-sm hover:underline font-Sec" href="#pertamina" >Pertamina University</a>
                <a className="font-Sec block text-sm hover:underline" href="#eka" >Ekanuri Shorebase</a>
                <a className="font-Sec block text-sm hover:underline" href="#sayap" >Sayap Mas Utama</a>
            </div>
        </div>
    );
};

export default page;
