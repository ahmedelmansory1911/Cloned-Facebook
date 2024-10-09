/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { use, useEffect, useRef, useState, createContext, MutableRefObject } from 'react';
import './style.css'; // Import the CSS file
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '@/firebase-config'
// import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid"
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline'; // Import eye icons
// import CreatePost from '../Posts/CreatPost/CreatePost'
// import NameContext from './NameContext'
// export const NameContext = createContext()
const AuthPage = () => {
    const [nameregester, setNameReg] = useState("");
    const [emailregester, setemailReg] = useState("");
    const [passwordregester, setpasswordReg] = useState("");
    const [emailLogin, setemaillog] = useState("");
    const [passlogin, setpasslogin] = useState("");
    const [errorMessage, setErrorMessage] = useState({})
    const Ref = useRef(null)
    const nameRef = useRef(null)

    const emailRef = useRef(null)




    useEffect(() => {
        return emailRef.current?.focus()
    }, [])


    const register = async (e) => {
        e.preventDefault();

        try {
            // if()
            const user = await createUserWithEmailAndPassword(auth, emailregester, passwordregester)
            console.log(user)
            console.log(nameRef.current?.value)
        } catch (error) {
            console.log(error)
        }

    }
    const login = async (e) => {
        e.preventDefault()
        try {
            const user = await signInWithEmailAndPassword(auth, emailLogin, passlogin);
            if (true) {
                const url = './component/Posts';
                window.open(url, '_blank');


                console.log(`thePassword is:`, Ref)
            }
            console.log(user);

            // Redirect the user to their dashboard or home page
        } catch (error) {
            console.log(error);
            setErrorMessage("Invalid email or password. Please try again.");
        }
    }
    const signup = async () => {

    }

    const [isActive, setIsActive] = useState(false);

    const handleRegisterClick = () => {
        setIsActive(true);
    };

    const handleLoginClick = () => {
        setIsActive(false);
    };

    return (
        <div className={`container ${isActive ? 'active' : ''}`} id="container">
            <div className="form-container sign-up">
                <form>
                    <h1>Create Account</h1>
                    <div className="social-icons">

                        <div><img className="fb-logo"
                            src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
                            alt="فيسبوك"

                        /></div>
                    </div>
                    <span>Register with E-mail</span>

                    <input type="text" placeholder="Name" ref={nameRef} value={nameregester} onChange={(e) => setNameReg(e.target.value)} />

                    {/* <NameContext.Provider value={{ nameRef }}> */}
                        {/* <CreatePost /> */}
                        {/* Other components */}
                     {/* </NameContext.Provider>  */}

                    <input type="email" placeholder="Enter E-mail" onChange={(e) => setemailReg(e.target.value)} />
                    <input type="password" placeholder="Enter Password" onChange={(e) => setpasswordReg(e.target.value)} />
                    <button type="button" onClick={register}>Sign Up</button>
                </form>
            </div>

            <div className="form-container sign-in">
                <form>
                    <h1>Sign In</h1>
                    <div className="social-icons">

                        <div><img className="fb-logo"
                            src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
                            alt="فيسبوك"

                        /></div>
                    </div>
                    <span>Login With Email & Password</span>
                    <input type="email" ref={emailRef} placeholder="Enter E-mail" onChange={(e) => setemaillog(e.target.value)} />

                    <input
                        type='password'
                        placeholder="Enter Password"
                        onChange={(e) => setpasslogin(e.target.value)}
                        className="w-full px-4 py-2 pr-12 border rounded"
                    />
                    <a href="#">Forget Password?</a>
                    <button type="button" onClick={login}>Sign In</button>
                </form>
            </div>

            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>SignUp <br />Quick and easy</h1>
                        <p>Sign in With ID & Password</p>
                        <button className="hidden" id="login" onClick={handleLoginClick}>Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1 style={{ color: 'black' }}>يمنحك فيسبوك إمكانية التواصل مع الأشخاص ومشاركة ما تريد معهم. </h1>
                        <button className="hidden" id="register" onClick={handleRegisterClick}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
