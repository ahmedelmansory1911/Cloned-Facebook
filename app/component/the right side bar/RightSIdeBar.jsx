/* eslint-disable @next/next/no-img-element */
import React from 'react'

import RightSide from './RightSide'
import '@/app/globals.css'
const src = 'https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/aW4FjA5PhOT.png'
function RightSIdeBar() {
    return (
        <div className='fixed'>
            <ul className='w-[350px] w h-full pl-1 '>
                {/* Profile */}
                <li>

                    <div className='  min-h-full w-full pl-[8px] pr-[9px]  '>
                        <a href="profile" className=' h-[52px] cursor-pointer top-[30px] hover:bg-slate-300 hover:rounded-lg	p-0 text-zinc-800 border-b-0 border-t-0 box-border border-solid hover:no-underline no-underline mt-0 block z-0 relative'>
                            <div className='justify-start items-center h-full flex-row min-h-[44px] relative min-w-0  flex top-0 pt-0'>
                                {/* image */}
                                <div className='mt-[8px] left-2 self-center flex-col  mr-[12px] relative  mb-[8px] justify-start items-start flex'>
                                    <div className='align-bottom relative inline-block'>
                                        <svg className="x3ajldb" data-visualcompletion="ignore-dynamic" role="none" style={{ height: "36px", width: "36px" }}><mask id=":R1comkql9ad5bb9l5qq9papd5aq:"><circle cx="18" cy="18" fill="white" r="18"></circle></mask><g mask="url(#:R1comkql9ad5bb9l5qq9papd5aq:)"><image style={{ height: "36px", width: "36px" }} x="0" y="0" height="100%" preserveAspectRatio="xMidYMid slice" width="100%" href="https://images.tarmeezacademy.com/profile-pics/3.png"></image><circle className="xbh8q5q x1pwv2dq xvlca1e" cx="18" cy="18" r="18"></circle></g></svg>

                                    </div>
                                </div>
                                {/* nameOfProfile */}
                                <div className='left-9 flex-col flex'><span className='left-2 leading-[1.44] font-medium text-[0.9375rem] text-black'>Ahmed Elmansory</span></div>
                            </div>
                        </a>
                    </div>
                </li>
                {/* seperator friends*/}
<RightSide src={src} name="Find Friend" position={ '0 -259px'} />

                {/* seperator group*/}

                <RightSide src='https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/aW4FjA5PhOT.png' name="Group" position={'0 -37px'} />
                {/* seperator Memories*/}
                <RightSide src='https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/aW4FjA5PhOT.png' name="Memories" position={'0 -407px'} />

                {/* sepertor saved */}
                <RightSide src='https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/aW4FjA5PhOT.png' name="Saved" position={'0 -148px'} />

                {/* sepertor Videos*/}
                <RightSide src='https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/aW4FjA5PhOT.png' name="Videos" position={'0 -481px'} />

                {/* <Videos /> */}
                {/* sepertor Market*/}
                <RightSide src='https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/aW4FjA5PhOT.png' name="Market" position={'0 -370px'} />

                {/* <Market /> */}
                {/* sepertor Feed */}
                <RightSide src="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png" name="Feed" position={'0 0'} />

            </ul>
            {/* <hr style={{ border: '1px solid #ccc', margin: '20px 0' }} /> */}


            {/* seperator */}
            {/* <hr /> */}
            {/* <div className='seperate absuloute   '></div> */}
        </div>


    )
}

export default RightSIdeBar
