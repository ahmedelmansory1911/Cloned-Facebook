/* eslint-disable @next/next/no-img-element */
import React from 'react'
import '@/app/globals.css'
import '../../../../app/globals.css'
function feed() {
    return (
        <div>
            <li>
                <div className='  min-h-full w-full pl-[8px] pr-[8px]  '>
                    <a href="friends" className=' h-[52px] cursor-pointer top-[30px] hover:bg-slate-300 hover:rounded-lg	p-0 text-zinc-800 border-b-0 border-t-0 box-border border-solid hover:no-underline no-underline mt-0 block z-0 relative'>
                        <div className='justify-start items-center h-full flex-row min-h-[44px] relative min-w-0  flex top-0 pt-0'>
                            {/* image */}
                            <div className='mt-[8px] left-2 self-center flex-col  mr-[12px] relative  mb-[8px] justify-start items-start flex'>
                                <div className='align-bottom relative inline-block'>
                                    <img
                                        draggable="false"
                                        height="36"
                                        width="36"
                                        alt=""
                                        className="xz74otr"
                                        referrerPolicy="origin-when-cross-origin"
                                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png"
                                    />


                                </div>
                            </div>
                            {/* the name */}
                            <div className='left-9 flex-col flex'><span className='left-2 leading-[1.44] font-medium text-[0.9375rem] text-black'>Feeds</span></div>
                        </div>
                    </a>
                </div>
            </li>
        </div>
    )
}

export default feed
