/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'
import '@/app/globals.css'
function Contact({ src, name }) {
    return (
        <div className='felx items-center space-x-3 flex-row mb-2 relative hover:bg-gray-200 hover:rounded-2xl cursor-pointer'>
            {/* <Image
            className="rounded-full w-14 top-8 flex-row relative left-2"
                objectFit='cover'
                src={src}
                width={50}
                height={50}
                layout='fixed'
            /> */}

            {/* 0 */}
            <div className='pr-1 pl-2 top-[19px] relative'>
                <div>
                    <div className="x1rg5ohu x1n2onr6 x3ajldb x1ja2u2z">
                        <svg className="x3ajldb" data-visualcompletion="ignore-dynamic" role="none" style={{ height: '40px', width: '40px' }}>
                            <mask id="mask1">
                                <circle cx="20" cy="20" fill="white" r="20"></circle>
                            </mask>
                            <g mask="url(#mask1)">
                                <image x="0" y="0" height="100%" preserveAspectRatio="xMidYMid slice" width="100%" href={src} style={{ height: '40px', width: '40px' }} />
                                <circle className="xbh8q5q x1pwv2dq xvlca1e" cx="20" cy="20" r="20"></circle>
                            </g>
                        </svg>
                    </div>
                </div>

            </div>




            {/*  */}
            <p className='flex justify-center items-end relative left-3 bottom-7 text-base	font-medium'>{name}</p>
            <div className='absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full animate-bounce'></div>
        </div>

    )
}

export default Contact
