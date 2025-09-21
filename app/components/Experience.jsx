import React from 'react'
import { developerExperience, assets, workData } from '@/assets/assets'
import Image from 'next/image'

const Experience = () => {
    return (
        <div>
            <div id='experience' className='w-full px-[12%] py-5 scroll-mt-20'>
                <h2 className='text-center text-5xl font-Ovo py-5'>Experience</h2>

                {developerExperience.map(({ head, date, body1, body2, body3, body4 }, index) => (
                    <div key={index}>
                        <div className='w-full bottom-5 left-1/2 py-10 px-5 items-center justify-between rounded-xl mb-10 border border-y-neutral-400 bg-gradient-to-r from-stone-95 to-transparent'>
                            <h1 className='text-3xl text-shadow-black text-left'>{head}</h1>
                            <p className='text-sm mb-8'>{date}</p>
                            <div>
                                <div id='xp' className='grid md:grid-cols-2 gap-6 text-xl bottom-5  py-3 px-5 items-center justify-between'>
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
            <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
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
        </div>
    )
}

export default Experience
