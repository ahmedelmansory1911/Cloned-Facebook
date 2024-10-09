/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react';

function FileUploadComponent() {
    const [preview, setPreview] = useState(null);
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

    const removeImage = ()=>{
    setImageToPost(null)
}


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileURL = URL.createObjectURL(file);
            setPreview(fileURL);
        }
    };

    return (
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


            <div onClick={ ()=>{filepickerRef.current.click()}}>
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

                {/* {preview && (
                    <div className="file-preview relative bottom-[7.5rem] left-2 h-1">
                        <p>Preview:</p>
                        {preview.endsWith('.mp4') || preview.endsWith('.mkv') ? (
                            <video width="350" controls>
                                <source src={preview} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <img src={preview} alt="Preview" width="350" className='h-[16rem] realtive top-[30px]' />
                        )}
                    </div>
                )} */}
            </div>
        </div>
    );
}

export default FileUploadComponent;
