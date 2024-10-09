import React from 'react';

type CustomCSSProperties = React.CSSProperties & {
    '--color'?: string;
};
import '@/app/globals.css'
import "../Posts/svg.css"
import Image from 'next/image';
import './stylehead.css'
import HeaderRight from '../header right/HeaderRight'
import CenterHeader from './center of header/CenterHeader'
// import '@/app/output.css'
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    UserGroupIcon,
    ViewGridIcon,
    HomeIcon,
    FlagIcon,
    PlayIcon,
    ShoppingBagIcon,

} from "@heroicons/react/solid"
import { SearchIcon } from '@heroicons/react/outline'; // or 'solid' for solid style
import HeaderIcon from './HeaderIcon'
export default function Banner() {
    const customStyle: CustomCSSProperties = {
        '--color': 'var(--primary-button-background)',
        // other styles here if needed
    };
    const customStyle1: CustomCSSProperties = {
        '--color': 'var(--secondary-icon)', // Custom CSS variable
        // Add other styles if needed
    };

    return (
        <>
            <div className='fixed w-full'>

            <div className="flex flex-col  Sticky top-0  items-center justify-start   left-0 w-full bg-gray-300 shadow-md  ">

                <div className='sm:inline-block Sticky top-0  max-h-[58px] bg-gray-100 max-w-screen w-full flex items-center lg:px-4 shadow-md'>

                    {/* //left */}
                    <div className='flex items-center  float-left left-9 x9f619 x1s65kcs x17qophe x16xn7b0 fixed x13vifvy xj35x94 xhtitgo xmy5rp'>

                        <Image src="https://links.papareact.com/5me"
                            width={40}
                            height={40}
                            layout='fixed' alt={'the logo'}
                        />
                        <div className='flex ml-2 items-center rounded-full  bg-gray-300 p-2'>
                            <SearchIcon className='h-6 text-gray-900' />

                            <input className='hidden md:inline-flex ml-2 items-center bg-transparent outline-none font-normal 	 placeholder-gray-400'
                                type="text"
                                placeholder='Search facebook' />
                        </div>
                    </div>
                    {/* the end of left */}
                    {/* //center */}

                    <div>

                        <CenterHeader />
                    </div>

                    {/* The end of center */}
                </div>
                {/* ((((((((((((((RIGht)))))))))))))) */}
                <div>
                    < HeaderRight />
                </div>
                {/* the end of right */}
                </div>
            </div>

        </>
    )
}