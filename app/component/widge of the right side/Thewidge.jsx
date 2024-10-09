import React from 'react'
import Contact from './Contact'
import { DotsHorizontalIcon, SearchCircleIcon, VideoCameraIcon } from '@heroicons/react/solid'
const contacts = [
    // { src: 'https://links.papareact.com/f0p', name: 'Jeff Bezoz' },
    { src: 'https://links.papareact.com/kxk', name: 'Elon Musk' },
    { src: 'https://links.papareact.com/zvy', name: 'Bill Gates' },
    { src: 'https://links.papareact.com/snf', name: 'Mark Zuckerberg' },
    { src: 'https://links.papareact.com/d0c', name: 'Harry Potter' },
    { src: 'https://links.papareact.com/6gg', name: 'The Queen' },
    { src: 'https://links.papareact.com/r57', name: 'James Bond' },
]
export default function Thewidge() {
    return (
        <div className='hidden lg:flex flex-col  w-60 p-2 mt-5'>
            <div className='flex justify-between items-center relative text-gray-500 mb-5'>
                <h2 className='text-xl'>Contacts</h2>
                <div className='flex space-x-2'>
                    <VideoCameraIcon className='h-6' />
                    <SearchCircleIcon className='h-6' />
                    <DotsHorizontalIcon className='h-6' />
                </div>
            </div>
            {/*  */}
            <div className='relative  bottom-7'>

                {contacts.map((contact) => (
                    <Contact
                        className='h-2 bg-black'
                        key={contact.src}
                        src={contact.src}
                        name={contact.name}
                    />
                ))}
                {/*  */}

            </div>
        </div>
    )
}
