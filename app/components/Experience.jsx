import React from 'react'

const Experience = () => {
    return (
        <div>
            <div id='experience' className='w-full px-[12%] py-5 scroll-mt-20'>
                <h2 className='text-center text-5xl font-Ovo py-5'>Experience</h2>

                <div className='w-full rounded-sm bottom-5 left-1/2 py-3 px-5 items-center justify-between'>
                    <h1 className='text-3xl text-shadow-black text-left'>Bootcamp Web Development</h1>
                    <p className='text-sm'>Purwadhika August 2024 - May 2025</p>
                    <div>
                        <div id='xp' className='grid grid-cols-2 gap-6 text-xl py-5 bg-gradient-to-r from-blue-50 via-purple-50 to-transparent rounded-xl'>
                            <p>Implementing Advanced CSS such as Position, Media Queries, Animation, and Gradients</p>
                            <p>Implementing State Management and Server-Side Rendering</p>
                            <p>Implementing REST API, CRUD Database, and ORM Database, Authentication & Authorization</p>
                            <p>Implementing Object-Oriented Programming</p>
                        </div>
                    </div>
                </div>

                <div className='w-full rounded-sm bottom-5 left-1/2 py-3 px-5 items-center justify-between'>
                    <h1 className='text-3xl text-shadow-black text-left'>Junior Web Developer Trainig Program</h1>
                    <p className='text-sm'>BNSP Januari 2024</p>
                    <div id='xp' className='grid grid-cols-2 gap-6 text-xl py-5 bg-gradient-to-r from-blue-50 via-purple-50 to-transparent rounded-xl'>
                        <p>Implementing programming language execution commands, Text-based, greyscale, and multimedia</p>
                        <p>Implementing User Interfaces & Implementing Structured Programming</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience
