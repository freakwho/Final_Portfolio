import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <div id='home' className='w-11/12 max-w-3xl text-center mx-auto h-screen mt-1 flex flex-col items-center justify-center gap-3'>
            <div>
                <Image src={assets.profile_img_trans} alt='' className='rounded-full w-25 px-1 pt-5' />
            </div>
            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
                Hello I'm Wahyu</h3>
            <h1 className='text-3xl sm:text-8xl lg:text-[50px] font-Ovo'>
                Junior Web Developer based in Indonesia.</h1>
            <p className='max-w-2xl mx-auto font-Ovo'>
                I am a junior web developer from Jakarta, Indonesia with a strong desire to learn, and I would be delighted if you would invite me to join your company.
            </p>
            <p className='text-2xl sm:text-2xl lg:text-[40px] font-Ovo'>
                My Resume
            </p>

            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="/CV/CV_IT_English.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>English <Image src={assets.download_icon} alt='' className='w-4' /></a>

                <a href="/CV/CV_IT.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
                    Indonesian <Image src={assets.download_icon} alt='' className='w-4' /></a>
            </div>
        </div>
    )
}

export default Header
