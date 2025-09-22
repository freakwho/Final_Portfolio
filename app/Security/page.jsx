"use client";
import { assets, infoList, toolsData, serviceData, workData, security, securityService, securityExperience, minaHead, minaBody } from '@/assets/assets'
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

    // Contact Section
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
        <div className='bg-gradient-to-r from-black to-purple-800 p-2'>
            {/* NavBar Section */}
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-blend-exclusion bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
                <a href="#homes" className='font-Sec text-5xl w-28 cursor-pointer mr-14'>
                    Wahyu
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-black shadow-sm bg-opacity-50"}`}>
                    <li><a className='font-Sec' href="#homes">Home</a></li>
                    <li><a className='font-Sec' href="#abouts">About Me</a></li>
                    <li><a className='font-Sec' href="#servicess">Services</a></li>
                    <li><a className='font-Sec' href="#experiences">My Experience</a></li>
                    <li><a className='font-Sec' href="#contacts">Contact Me</a></li>
                    <li><Link href="/Truth" className='font-Sec text-xl'>The <span className='text-red-500'>truth</span></Link></li>
                </ul>

                <div className='flex items-center gap-4'>

                    <Link className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-white rounded-full ml-4 font-Sec' href="/">Web Developer<Image src={assets.arrow_icon_dark} alt='' className='w-3' /></Link>

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
                    <li><a className='font-Sec' onClick={closeMenu} href="#experiences">Experience</a></li>
                    <li><a className='font-Sec' onClick={closeMenu} href="#contacts">Contact Me</a></li>
                    <li><Link href="/Truth" className='font-Sec text-xl'>The <span className='text-red-500'>truth</span></Link></li>
                    <li><Link className='font-Sec' href="/">Web Developer</Link></li>

                </ul>

            </nav >

            {/* Header Section */}
            <div id='homes' className='w-11/12 max-w-3xl text-center mx-auto h-screen mt-1 flex flex-col items-center justify-center gap-3'>
                <div>
                    <Image src={assets.profile_img_trans} alt='' className='rounded-full w-25 px-1' />
                </div>
                <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Sec'>
                    Hello I'm Wahyu</h3>
                <h1 className='text-3xl sm:text-8xl lg:text-[50px] font-Sec'>
                    Security Guard based in Indonesia.</h1>
                <p className='max-w-2xl mx-auto font-Sec'>
                    A security guard with about 8 years of experience, able to work under pressure, and have the ability to learn new things, and I would be happy if you invite me to join your company.
                </p>

                <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                    <a href="#contacts" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>Contact Me <Image src={assets.right_arrow_white} alt='' className='w-4' /></a>

                    <a href="CV/CV_SATPAM.pdf" download className='font-Sec px-10 py-3 border rounded-full border-white flex items-center gap-2'>
                        My Resume <Image src={assets.download_icon_dark} alt='' className='w-4' /></a>
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
                            I've been a security guard for so long, I can't believe it's almost seven years. Hardworking, disciplined, responsible, and willing to learn new things—that's what they say about me.</p>

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
            <div id='experiences' className='w-full px-[12%] scroll-mt-20'>
                <h2 className='text-center text-5xl font-Sec py-5 mb-5'>Experience</h2>

                <div className='w-full bottom-5 left-1/2 px-5 items-center justify-between  rounded-xl mb-5 font-Sec'>
                    {minaHead.map(({ company, vendor, date }, index) => (
                        <div key={index} className='items-center text-center mb-10'>
                            <h1 className='text-3xl font-semibold'>{company}</h1>
                            <span className='text-xl'>{vendor}</span>
                            <p className='text-sm mb-8'>{date}</p>
                        </div>
                    ))}

                    {minaBody.map(({ icon, description }, index) => (
                        <div key={index} className='grid md:grid-cols-2 gap-5 mb-10'>
                            <Image src={icon} className='rounded-xl w-100 ml-20' alt='' />
                            <div className='text-xl rounded-xl px-5'>
                                <p className='mt-12'>{description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='w-full left-1/2 px-5 items-center justify-between  rounded-sm font-Sec'>
                    {securityExperience.map(({ icon, company, vendor, date, description }, index) => (
                        <div key={index}>
                            <div className='items-center text-center mb-10 mt-10'>
                                <h1 className='text-3xl text-shadow-black font-semibold'>{company}</h1>
                                <span className='text-xl'>{vendor}</span>
                                <p className='text-sm mb-10'>{date}</p>
                            </div>
                            <div className='grid md:grid-cols-2 gap-5 mb-5'>
                                <Image src={icon} className='rounded-xl w-100 ml-20' alt='' />
                                <div className='text-xl rounded-xl px-5'>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Contact Section */}
            <div id='contacts' className='w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center bg-[lenght:90%_auto]'>
                <h4 className='text-center mb-2 text-lg font-Sec'>Connect With Me</h4>
                <h2 className='text-center text-5xl font-Sec'>Get In Touch</h2>

                <p className='text-center text-xl max-w-2xl mx-auto mt-5 mb-12 font-Sec'>I'd love to hear from you if you have any question, comments, or feedback, please fill out the form below</p>

                <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                    <div className='grid grid-cols-auto gap-6 mt-10 mb-8 '>
                        <input type="text" placeholder='Enter your name' required
                            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-purple-300' name='name' />
                        <input type="email" placeholder='Enter your email' required
                            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-purple-300' name='email' />
                    </div>
                    <textarea rows='6' placeholder='Enter your message' required
                        className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-purple-300 mb-6' name='message'>
                    </textarea>

                    <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-purple-300 text-white rounded-full mx-auto hover:bg-black duration-500'>
                        Submit now <Image src={assets.right_arrow_bold_dark} alt='' className='w-4' />
                    </button>

                    <p className='mt-4'>{result}</p>
                </form>

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
}
export default page;
