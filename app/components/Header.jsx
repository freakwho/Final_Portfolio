import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <div id='home' className='w-11/12 max-w-3xl text-center mx-auto h-screen mt-1 flex flex-col items-center justify-center gap-3'>
            <div>
                <Image src={assets.profile_img} alt='' className='rounded-full w-25 px-1' />
            </div>

            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
                Hello I'm Wahyu</h3>
            <h1 className='text-3xl sm:text-8xl lg:text-[50px] font-Ovo'>
                Junior Web Developer based in Indonesia.</h1>
            <p className='max-w-2xl mx-auto font-Ovo'>
                I am a junior web developer from Jakarta, Indonesia with a strong desire to learn, and I would be delighted if you would invite me to join your company.
            </p>

            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>Contact Me <Image src={assets.right_arrow_white} alt='' className='w-4' /></a>

                <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
                    My Resume <Image src={assets.download_icon} alt='' className='w-4' /></a>
            </div>
        </div>
    )
}

export default Header
