/* eslint-disable @next/next/no-img-element */
'use client'
import React,{useState} from 'react'
    



        

function Widge({ input, src, name, func = "" }) {




    return (
        <div className='h-[80%] w-[25%] justify-center items-center flex relative'>
            <div className='flex flex-row box-border w-full  hover:bg-slate-200 hover:cursor-pointer  mt-0 pt-0    rounded-md h-[59%] justify-center items-center' onClick={func}>
                <span className='pr-2'><img height="24" width="24" alt="" className="xz74otr" src={src} /></span>
                {input}
                <span>{name}</span>
            </div>
        </div>
    )
}

export default Widge
