/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useContext, useRef } from 'react'
import { useEffect, useState } from 'react';
import '../../header/stylehead.css'
import { db, storage } from '../../../../firebase-config'
import { collection, addDoc, serverTimestamp, doc } from 'firebase/firestore';
import { getFirestore, setDoc } from 'firebase/firestore';

import Widge from './Widge'
import firebase from 'firebase/compat/app';
import { toast } from 'react-toastify';
import '../../header/stylehead.css'
import FileUpload from './photo'
import { NameContext } from '@/app/layout';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadString, getDownloadURL } from 'firebase/storage';

const auth = getAuth();



function CreatePost() {
    // const { nameRef } = useContext(NameContext); // Access nameRef from context

    const [previewer, setPreviewer] = useState('');

    const [photos, setPhotos] = useState(null);

    const handleFileChanger = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                setPhotos(e.target.result);
            };

            reader.onerror = (error) => {
                console.error("File reading has failed:", error);
            };

            reader.readAsDataURL(file);
        }
    };



    // const {name} =useContext(NameContext)
    const name = "useContext(NameContext)"
    const [photo, setPhoto] = useState(null);
    const inputRef = useRef(null)
    const [videoStream, setVideoStream] = useState(null);
    const [imageToPost, setImageToPost] = useState(null);
    const filepickerRef = useRef(null);

    function addImageToPost(e) {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result)
        }
    }

    const removeImage = () => {
        setImageToPost(null)
    }




    const handleOpenCamera = () => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                setVideoStream(stream);  // Set the video stream
            })
            .catch(err => {
                console.error('Error accessing the camera:', err);
            });
    };

    const sendPost = async (e) => {
        e.preventDefault(); // Prevent default behavior
        if (!inputRef.current.value) return;

        const user = getAuth().currentUser;
        if (!user) {
            toast.error('You need to be signed in to add a post');
            return;
        }

        try {
            const docRef = await addDoc(collection(getFirestore(), 'posts'), {
                message: inputRef.current.value,
                timeStamp: serverTimestamp()
            });

            if (imageToPost) {
                const imageRef = ref(storage, `posts/${docRef.id}`);
                const uploadTask = uploadString(imageRef, imageToPost, 'data_url');

                removeImage();
                uploadTask.then(() => {
                    getDownloadURL(imageRef).then((url) => {
                        setDoc(doc(getFirestore(), 'posts', docRef.id), { postImage: url }, { merge: true });
                    });
                }).catch(error => console.error(error));
            }

            toast.success('Post added successfully!');
            inputRef.current.value = '';
            setPhoto(null);
            handleClose();
        } catch (error) {
            toast.error('Failed to add post: ' + error.message);
        }
    };


    const handleButtonClick = () => {
        document.getElementById('file-input').click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setPhoto(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleLive = () => {
        document.getElementById('liveCamera').click()
    }
    const input1 =
        <input
            type="file"
            id="file-input"
            style={{ display: 'none' }}
            accept="image/*"
            onChange={handleFileChange}
        />
    {
        photo && (
            <img
                src={photo}
                alt="Selected Photo"
                style={{ maxWidth: '100%', maxHeight: '500px', display: 'block' }}
            />
        )
    }


    const live = <input
        onClick={handleOpenCamera}
        style={{
            display: "none",
            cursor: 'pointer',
        }}
    />

    {/* Video element that will display the camera stream */ }
    {
        videoStream && (
            <video
                autoPlay
                style={{ width: '400px', height: '300px' }}
                ref={(video) => {
                    if (video) {
                        video.srcObject = videoStream;  // Display the camera stream
                    }
                }}
            />
        )
    }


    const [preview, setPreview] = useState('');



    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);


    // font 
    const [scale, setScale] = useState(1); // Default scale (1 means no scaling)
    const maxChars = 100; // Maximum number of characters before scaling starts

    const handleInput = (e) => {

        const content = e.target.textContent.trim();
        const length = content.length;

        // Scale down the text if it exceeds maxChars
        if (length > maxChars) {
            const scaleFactor = Math.max(1 - (length - maxChars) / 100, 0.7); // Scale down to a minimum of 70%
            setScale(scaleFactor);
        } else {
            setScale(1); // Reset the scale if under the limit
        }
    };
    return (
        <>


            {/* Modal */}

            {/* the modal */}
            <div className="container  mt-5">
                {/* <h1>Welcome to My Page</h1>
                <button className="btn btn-primary" onClick={handleShow}>Edit</button> */}

                {/* Modal */}
                <div className={`modal fade  ${showModal ? 'show' : ''}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden={!showModal} style={{ backgroundColor: 'rgba(244, 244, 244, 0.8)', display: showModal ? 'block' : 'none' }}>
                    <div className="modal-dialog relative min-h-[500px] top-[10px] z-50">
                        <div className="modal-content relative top-11">
                            {/* the header */}
                            <div className="modal-header max-h-[54px] felx flex-col justify-start items-start  ">
                                <div className='felx justify-center text-center left-[165px] relative items-center'>

                                    <h1 className="modal-title fs-5  text-xl font-bold" id="exampleModalLabel">Create Post</h1>
                                </div>

                                <div className='bg-slate-200 relative flex justify-end left-[440px] rounded-full h-10 w-9 bottom-9'>
                                    <button type="button" className="btn-close flex justify-start items-start relative bottom-5 right-3  h-20" onClick={handleClose} aria-label="Close"></button>
                                </div>

                                {/* <hr className='w-full relative top-4 border-2 border-black' /> */}
                                <br />

                            </div>

                            {/*the end of header  */}
                            {/* body */}
                            <div className='flex justify-start flex-row h-[70px] items-center'>
                                {/* Static profile image */}
                                <div className='pl-1 pr-1 top-1 relative min-h-[70px]  rounded-full'>
                                    <img className='w-[40px] h-[30px] rounded-full' src="https://tarmeezacademy.com/images/profile-pics/3.png" alt="profile" loading='lazy' />
                                </div>
                                {/* Static username */}
                                <div className='flex  left-2 bottom-6  relative'>
                                    <span className="items-center text-sm no-underline top-1 relative font-semibold	">Ahmed</span>
                                </div>
                            </div>
                            <div className="modal-body max-h-[350px] h-[300px] bottom-6  pt-0">

                                {/*  */}




                                {/*  */}
                                <div className="mb-3 relative   text-black" placeholder='Whats in your mind'>
                                    <div className='bg-slate-400 relative h-14'>
                                        <input type="text" className='relative w-full h-full border-none focus:outline-none text-2xl font-normal' ref={inputRef} placeholder={`what's in your Mind inputRef ,Ahmed`} />
                                        {/*  */}

                                    </div>

                                </div>

                                {/*  */}
                                <div className="x1n2onr6 x1ja2u2z x9f619 x78zum5 xdt5ytf x193iq5w x1l7klhg x1iyjqo2 xs83m0k x2lwn1j x1y1aw1k xwib8y2 relative h-0">
                                    <div className="x9f619 x1n2onr6 x1ja2u2z x78zum5 xdt5ytf x1iyjqo2 x2lwn1j">
                                        <div className="x9f619 x1n2onr6 x1ja2u2z x78zum5 xdt5ytf x2lah0s x193iq5w xurb0ha x1sxyh0 x1gslohp x12nagc xzboxd6 x14l7nz5">
                                            <div className="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x3nfvp2 x1q0g3np x87ps6o x1lku1pv x1a2a7pz"
                                                role="button"
                                                tabIndex="0"
                                                onClick={() => document.getElementById('file-input').click()}
                                            >
                                                <div className="x78zum5 x1n2onr6 xh8yej3">
                                                    <div
                                                        className="x9f619 x1n2onr6 x1ja2u2z xlhe6ec x1qpq9i9 xdney7k xu5ydu1 xt3gfkd xh8yej3 x6ikm8r x10wlt62 xiba41w xkjf3g4 xbwy6ji"
                                                        style={{
                                                            borderRadius:
                                                                'max(0px, min(var(--card-corner-radius), calc((100vw - 4px - 100%) * 9999))) / var(--card-corner-radius)',
                                                        }}
                                                    >
                                                        <div className="x1n2onr6 x1ja2u2z x9f619 x78zum5 xdt5ytf x2lah0s x193iq5w x5yr21d">
                                                            <div className="x9f619 x1n2onr6 x1ja2u2z x78zum5 xdt5ytf x1iyjqo2 x2lwn1j xl56j7k">
                                                                <div className="x9f619 x1n2onr6 x1ja2u2z x78zum5 xdt5ytf x2lah0s x193iq5w x6s0dn4 x1gslohp x12nagc xzboxd6 x14l7nz5">
                                                                    <div className="html-div xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x14yjl9h xudhj91 x18nykt9 xww2gxu x6s0dn4 x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x3nfvp2 xl56j7k x1n2onr6 x1qhmfi1 x1vqgdyp x100vrsf">
                                                                        <i
                                                                            data-visualcompletion="css-img"
                                                                            className="x1b0d499 xep6ejk"
                                                                            aria-hidden="true"
                                                                            style={{
                                                                                backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/j3oQ_0qDFVg.png")',
                                                                                backgroundPosition: '0px -191px',
                                                                                backgroundSize: 'auto',
                                                                                width: '20px',
                                                                                height: '20px',
                                                                                backgroundRepeat: 'no-repeat',
                                                                                display: 'inline-block',
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="x9f619 x1n2onr6 x1ja2u2z x78zum5 xdt5ytf x2lah0s x193iq5w x6s0dn4 x1gslohp x12nagc xzboxd6 x14l7nz5">
                                                                    <span
                                                                        className="x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x xudqn12 x676frb x1lkfr7t x1lbecb7 xk50ysn xzsf02u"
                                                                        dir="auto"
                                                                    >
                                                                        Add Photos/Videos
                                                                    </span>
                                                                </div>
                                                                <div className="x9f619 x1n2onr6 x1ja2u2z x78zum5 xdt5ytf x2lah0s x193iq5w x6s0dn4 x1gslohp x12nagc xzboxd6 x14l7nz5">
                                                                    <span
                                                                        className="x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x4zkp8e x676frb x1pg5gke xvq8zen xo1l8bm xi81zsa x2b8uid"
                                                                        dir="auto"
                                                                    >
                                                                        or drag and drop
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="x1ey2m1c xds687c x17qophe xg01cxk x47corl x10l6tqk x13vifvy x1ebt8du x19991ni x1dhq9h x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m h-0"
                                                    role="none"
                                                    data-visualcompletion="ignore"
                                                    style={{ inset: '0px' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>


                                    <div onClick={() => { filepickerRef.current.click() }}>
                                        <input
                                            id="file-input"
                                            type="file"
                                            accept="image/*,video/*"
                                            style={{ display: 'none' }}
                                            onChange={addImageToPost}
                                            ref={filepickerRef}
                                        />
                                        {imageToPost && (
                                            <div onClick={removeImage} className='flex flex-col filter hover:brightness-110 transtion duration-150 transform hover:scale-105 cursor-pointer'>
                                                <img className='h-10 object-contain' src={imageToPost} alt="" />
                                                <p className='text-xs text-red-500 text-center '>Remove</p>
                                            </div>
                                        )


                                        }

                                    </div>
                                </div>

                                {/*  */}
                                {/* <div >

                            <FileUpload />
                                </div> */}

                            </div>
                            {/*  */}
                            <div className="modal-footer">
                                <button type="submit" id='Post' className="btn btn-primary w-full" onClick={sendPost}>Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className='container'>

                <div className=' min-w-0 w-[570px] rounded-lg md:shadow-xl bg-white	 left-[70px] h-[130px] bottom-[40px] 	flex-col box-border flex shrink-0 relative '>

                    <div className=' mb-0 mr-[16px] pt-3 pr-2 w-full rounded-lg   box-border flex-row flex justify-start items-start h-[67%] 	 '>
                        {/* the1 */}

                        <div className='pr-1 pl-2 top-[2px] relative'>
                            <div>
                                <div className="x1rg5ohu x1n2onr6 x3ajldb x1ja2u2z">
                                    <svg className="x3ajldb" data-visualcompletion="ignore-dynamic" role="none" style={{ height: '40px', width: '40px' }}>
                                        <mask id="mask1">
                                            <circle cx="20" cy="20" fill="white" r="20"></circle>
                                        </mask>
                                        <g mask="url(#mask1)">
                                            <image x="0" y="0" height="100%" preserveAspectRatio="xMidYMid slice" width="100%" href="https://images.tarmeezacademy.com/profile-pics/3.png" style={{ height: '40px', width: '40px' }} />
                                            <circle className="xbh8q5q x1pwv2dq xvlca1e" cx="20" cy="20" r="20"></circle>
                                        </g>
                                    </svg>
                                </div>
                            </div>

                        </div>
                        {/* end */}
                        {/* the second */}
                        <button className='pl-1 rounded-full top-1 z-0 h-[100%]  hover:cursor-pointer justify-start items-center flex  w-full pr-2 box-border' style={{ backgroundColor: "rgb(240, 242, 245)" }} onClick={handleShow}>
                            <div className='pl-1 rounded-full top-1 z-0 h-[100%]  hover:cursor-pointer justify-start items-center flex  w-full pr-2 box-border' style={{ backgroundColor: "rgb(240, 242, 245)" }}>


                                <span className=" text-base	 flex justify-start items-center w-full relative  h-[190%] mb-0" style={{
                                    color: "rgb(101, 103, 107)", fontFamily: "Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif"
                                }}>Whats in your mind ,Ahmed</span>
                            </div>
                        </button>
                        {/* end */}






                    </div>
                    {/* the footer  */}
                    <div className='h-full flex flex-row justify-around items-center top-4 mb-1 relative' >
                        {/*live video  */}

                        <Widge input={live} name='Live Video' src={"https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png"} func={handleOpenCamera} />

                    
                        {/* ////live //// */}
                        {/*video  */}
                        <Widge input={input1} name="Photo/Video" src={"https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png"} func={handleButtonClick} />
                        {/*//video///  */}
                        {/*the activity  */}
                        <Widge name="Feeling/activity" src={"https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png"} func={() => { }} />

                        {/* ////act//// */}
                    </div>
                    {/*the end of footer  */}
                </div>
            </div>
        </>
    )
}

export default CreatePost
