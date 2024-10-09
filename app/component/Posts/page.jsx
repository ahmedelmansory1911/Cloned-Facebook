// import 'bootstrap/dist/css/bootstrap.min.css';
// import BootstrapLoader from './Bootstrap/BootstrapLoader';
import '@/app/globals.css'
import Banner from '../header/page';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Post from './Posts'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min'
export default function Posts() {
    return (
        <>
            <div id='5' className='relative  box-border	'>
                <div className='relative z-1  '>
                    <Banner />
                </div>
                <Post />
                <ToastContainer />

            </div>

        </>
    )
}