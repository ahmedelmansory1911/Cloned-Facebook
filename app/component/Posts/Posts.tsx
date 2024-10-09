/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import "./posts.css"
import '../../globals.css'
import '../header/stylehead.css'
import Stories from './the middle/story div/stories'
import Image from 'next/image'
import RightSide from '../the right side bar/RightSIdeBar'
import CreatePost from './CreatPost/CreatePost'
import Posts from './body of post/Posts';
import Thewidge from '../widge of the right side/Thewidge'
function Post() {
    const hrStyle = {
        border: 'none',
        height: '3px', // Thickness
        backgroundColor: '#ff0000', // Color
        margin: '30px 0', // Space above and below
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Shadow
    };
    return (
        <>
            {/* the main */}
            <div className='box-border relative  w-full '>
                <div className='flex-col felx relative  min '>
                    <div className='flex-col flex relative'>
                        <div className='min  mar  box-border flex  relative '>

                            {/* ((((((((((((((((((((((((((((((((((((((the side bar)))))))))))))))))))))))))))))))))))))) */}
                            <div aria-label='shortcuts' role='navigation' className=' w-[25%] max-w-[360px] top-[50px] float-right overflow-y-hidden relative z-0  shadow-black dd min-w-0 min-h-[673.6px] shrink flex-nowrap box-border flex flex-row justify-between basis   overflow-x-hidden flex-grow items-start'>
                                <RightSide />
                                {/* <hr style={{ border: '1px solid #ccc', margin: '20px 0' }} /> */}

                            </div>
                            {/* The end of Side bar */}
                            {/* (((((((((((((((((((((((((((((((((((((((((the stories and post))))))))))))))))))))))))))))))))))))))))) */}
                            <div role='main' className='w-[45%]  top-[170px] right-[290px] h-auto 1w9j1nh x1mtsufr min-w-0 shrink pr-[2px] flex-nowrap justify-center box-border flex pl-[2px] items-center flex-row   relative flex-grow' >
                                <div style={{ top: '-100px' }} className='left-[18px] right-[400px] relative'>
                                    <div className=' relative  '>
                                        {/* stories */}
                                        <div className='left-1 relative'>
                                        <Stories />
                                        </div>
                                        {/* the father of creating post  */}
                                        <CreatePost />
                                        {/* the posts */}

                                        <Posts />
                                    </div>
                                </div>



                                {/* the end */}
                                {/* the right side */}
                            </div >
                                <div className='   h-full flex-col box-border rounded-3xl 	 left-[-6px]  flex shrink-0 relative z-0'>
                                    <Thewidge />
                                </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Post
