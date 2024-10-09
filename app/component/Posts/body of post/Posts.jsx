/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import './body.css';
import '@/app/component/header/stylehead.css'
import Posting from './Posting'
function Posts() {
    const [emoji, setEmoji] = useState(21);
    const [data, setData] = useState([]);
    const handleclicked = () => {
    return setEmoji(emoji+1)
}
    const baseUrl = 'https://tarmeezacademy.com/api/v1/posts';
    const fetchData = async () => {
        try {
            const response = await axios.get(baseUrl);
            // Check if response.data.data is an array before setting it
            if (Array.isArray(response.data.data)) {
                setData(response.data.data);
                console.log(response.data.data)
            } else {
                console.error('Expected data to be an array but got:', response.data);
            }
        } catch (err) {
            console.error(err);
        }
    };
    const dd = data.slice(0,9);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className='container border-none'>
                <div className='min-w-0 w-[580px] rounded-lg shadow-inner border-none h-auto left-[70px] bottom-[24px] flex-col flex shrink relative z-0'>
                    <Posting />
                    {/* post i post */}
                    {/* post i post */}
                    {/* Static Card */}
                    <div className="card relative rounded-xl bg-white">
                        {/* Header of card */}
                        <div className='flex justify-start items-center'>
                            {/* Static profile image */}
                            <div className='pl-1 pr-1 top-1 relative  rounded-full'>
                                <img className='w-[40px] h-[30px] rounded-full' src="https://tarmeezacademy.com/images/profile-pics/3.png" alt="profile" loading='lazy' />
                            </div>
                            {/* Static username */}
                            <div className='flex flex-col left-2 top-[1px] relative'>
                                <span className="items-center no-underline top-1 relative font-semibold	text-basez">Ahmed Elmansory</span>
                                {/*  */}
                                <div className='flex flex-row'>
                                    <span className='text-xs font-normal	'>3h ago</span>
                                    <div className='pl-2 top-1 relative'>

                                        <svg
                                            viewBox="0 0 16 16"
                                            width="12"
                                            height="12"
                                            fill="currentColor"
                                            title="Shared with Public"
                                            className="x19dipnz x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
                                            style={{ '--color': 'var(--secondary-icon)' }}
                                        >
                                            <title>Shared with Public</title>
                                            <g fillRule="evenodd" transform="translate(-448 -544)">
                                                <g>
                                                    <path
                                                        d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434"
                                                        transform="translate(354 143.5)"
                                                    />
                                                    <path
                                                        d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096"
                                                        transform="translate(354 143.5)"
                                                    />
                                                    <path
                                                        fillRule="nonzero"
                                                        d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"
                                                        transform="translate(354 143.5)"
                                                    />
                                                </g>
                                            </g>
                                        </svg>
                                    </div>

                                </div>
                                {/*  */}
                            </div>
                        </div>
                        {/* End of the header of card */}
                        <div className="card-body ">
                            {/* Static post content */}
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <img src="https://images.tarmeezacademy.com/posts-placeholders/5.jpeg" alt="post" />
                            {/* End of post */}
                            <div className='flex flex-row h-[55px] justify-end items-end '>
                                <div>


                                    <div>{emoji}emoji</div>
                                </div>

                                <div className='  flex-row flex w-full  justify-end items-end '>
                                    <div className='flex pr-1 pl-1 '>14comment</div>
                                    <div className='felx pr-1'>4share</div>
                                </div>
                            </div>
                            <hr />
                            {/* Footer of card */}
                            <div className='top-2 relative flex flex-row  h-[50px]  justify-around items-center'>
                                {/* like */}
                                <div className='pl-1  w-[33.3%] justify-center flex h-[70%] items-center'>

                                    <i
                                        data-visualcompletion="css-img"
                                        className="x1b0d499 x1d69dk1"
                                        style={{
                                            backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/JC3GCxn_mNT.png")',
                                            backgroundPosition: '0px -735px',
                                            backgroundSize: 'auto',
                                            width: '20px',
                                            height: '20px',
                                            backgroundRepeat: 'no-repeat',
                                            display: 'inline-block',
                                            left: "50px",
                                            position: "relative"
                                        }}
                                    />
                                    <button onClick={handleclicked} className="hover:rounded-lg w-[80%] h-full hover:bg-slate-200 hover:no-underline">Like</button>
                                </div>
                                {/*  */}
                                {/* comment */}
                                <div className=' w-[33.3%] h-[70%] flex justify-center pl-1'>
                                    <i
                                        data-visualcompletion="css-img"
                                        className="x1b0d499 x1d69dk1"
                                        style={{
                                            backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/JC3GCxn_mNT.png")',
                                            backgroundPosition: '0px -546px',
                                            backgroundSize: 'auto',
                                            width: '20px',
                                            height: '20px',
                                            backgroundRepeat: 'no-repeat',
                                            display: 'inline-block',
                                            position: "relative",
                                            left: "33px",
                                            top: "10px"
                                        }}
                                    ></i>

                                    <button className="hover:rounded-lg w-[80%] h-full hover:bg-slate-200 hover:no-underline">comment</button>
                                </div>
                                {/*  */}
                                {/* share */}
                                <div className='pl-1 w-[33.3%]  h-[70%] flex justify-center'>
                                    <i
                                        data-visualcompletion="css-img"
                                        className="x1b0d499 x1d69dk1"
                                        style={{
                                            backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/JC3GCxn_mNT.png")',
                                            backgroundPosition: '0px -861px',
                                            backgroundSize: 'auto',
                                            width: '20px',
                                            height: '20px',
                                            backgroundRepeat: 'no-repeat',
                                            display: 'inline-block',
                                            position: "relative",
                                            left: '40px',
                                            top: '9px'
                                        }}
                                    ></i>

                                    <button className="hover:rounded-lg w-[80%] h-full hover:bg-slate-200 hover:no-underline">Share</button>
                                </div>
                            </div>
                            {/* End of footer of card */}
                        </div>
                    </div>
                    <br />
                    {/* End of static card */}
                    {/* Dynamic Cards */}
                    <div className='border-none'>
                        {Array.isArray(data) && dd.map((post, index) => (
                            <>
                                <div key={uuidv4()} className="card relative rounded-xl border-none bg-white">
                                    {/* Header of card */}
                                    <div className='flex justify-start items-center '>
                                        {/* user.author.profile_image */}
                                        <div className='pl-1 pr-1 top-1 relative  rounded-full'>
                                            <img className='w-[40px] h-[35px] rounded-full' src={`https://tarmeezacademy.com/images/profile-pics/${index}.png`} alt="profile" />
                                        </div>
                                        {/* user.author.username */}
                                        <div className='flex flex-col left-2 top-[1px] relative'>
                                            <span className="items-center no-underline top-1 relative font-semibold	text-base">{post.author.username}</span>
                                            {/*  */}
                                            <div className='flex flex-row'>
                                                <span className='text-xs font-normal	'>{post.created_at}</span>
                                                <div className='pl-2 top-1 relative'>

                                                    <svg
                                                        viewBox="0 0 16 16"
                                                        width="12"
                                                        height="12"
                                                        fill="currentColor"
                                                        title="Shared with Public"
                                                        className="x19dipnz x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
                                                        style={{ '--color': 'var(--secondary-icon)' }}
                                                    >
                                                        <title>Shared with Public</title>
                                                        <g fillRule="evenodd" transform="translate(-448 -544)">
                                                            <g>
                                                                <path
                                                                    d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434"
                                                                    transform="translate(354 143.5)"
                                                                />
                                                                <path
                                                                    d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096"
                                                                    transform="translate(354 143.5)"
                                                                />
                                                                <path
                                                                    fillRule="nonzero"
                                                                    d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"
                                                                    transform="translate(354 143.5)"
                                                                />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>

                                            </div>
                                            {/*  */}
                                        </div>
                                    </div>
                                    {/* End of the header of card */}
                                    <div className="card-body">
                                        {/* The image of post */}
                                        <img src={`https://images.tarmeezacademy.com/posts-placeholders/${index}.jpeg`} alt="post" loading='lazy' />
                                        {/* End of post */}
                                        <div className='flex flex-row h-[55px] justify-end items-end '>
                                            <div >


                                                <div>20 emoji</div>
                                            </div>

                                            <div className='  flex-row flex w-full  justify-end items-end '>
                                                <div className='flex pr-1 pl-1 '>14comment</div>
                                                <div className='felx pr-1'>4share</div>
                                            </div>
                                        </div>
                                        <hr />
                                        {/* Footer of card */}
                                        <div className='top-2 relative flex flex-row  h-[50px]  justify-around items-center'>
                                            {/* like */}
                                            <div className='pl-1  w-[33.3%] justify-center flex h-[70%] items-center'>

                                                <i
                                                    data-visualcompletion="css-img"
                                                    className="x1b0d499 x1d69dk1"
                                                    style={{
                                                        backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/JC3GCxn_mNT.png")',
                                                        backgroundPosition: '0px -735px',
                                                        backgroundSize: 'auto',
                                                        width: '20px',
                                                        height: '20px',
                                                        backgroundRepeat: 'no-repeat',
                                                        display: 'inline-block',
                                                        left: "50px",
                                                        position: "relative"
                                                    }}
                                                />
                                                <button  className="hover:rounded-lg w-[80%] h-full hover:bg-slate-200 hover:no-underline">Like</button>
                                            </div>
                                            {/*  */}
                                            {/* comment */}
                                            <div className=' w-[33.3%] h-[70%] flex justify-center pl-1'>
                                                <i
                                                    data-visualcompletion="css-img"
                                                    className="x1b0d499 x1d69dk1"
                                                    style={{
                                                        backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/JC3GCxn_mNT.png")',
                                                        backgroundPosition: '0px -546px',
                                                        backgroundSize: 'auto',
                                                        width: '20px',
                                                        height: '20px',
                                                        backgroundRepeat: 'no-repeat',
                                                        display: 'inline-block',
                                                        position: "relative",
                                                        left: "33px",
                                                        top: "10px"
                                                    }}
                                                ></i>

                                                <button className="hover:rounded-lg w-[80%] h-full hover:bg-slate-200 hover:no-underline">comment</button>
                                            </div>
                                            {/*  */}
                                            {/* share */}
                                            <div className='pl-1 w-[33.3%]  h-[70%] flex justify-center'>
                                                <i
                                                    data-visualcompletion="css-img"
                                                    className="x1b0d499 x1d69dk1"
                                                    style={{
                                                        backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/JC3GCxn_mNT.png")',
                                                        backgroundPosition: '0px -861px',
                                                        backgroundSize: 'auto',
                                                        width: '20px',
                                                        height: '20px',
                                                        backgroundRepeat: 'no-repeat',
                                                        display: 'inline-block',
                                                        position: "relative",
                                                        left: '40px',
                                                        top: '9px'
                                                    }}
                                                ></i>

                                                <button className="hover:rounded-lg w-[80%] h-full hover:bg-slate-200 hover:no-underline">Share</button>
                                            </div>
                                        </div>
                                        {/* End of footer of card */}
                                    </div>
                                </div>
                                <br />
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Posts;
