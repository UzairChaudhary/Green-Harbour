"use client"
import React, { useEffect, useState } from 'react';

import { FiDelete } from "react-icons/fi";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { useUiContext } from "../../contexts/UiContext";
import { actioTypes } from "../../reducers/uiReducer";
import Link from 'next/link';
import Image from 'next/image';
import { links } from "../../data/links";
import ActiveLink from './ActiveLink';
import Button from '../common/button';
function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const { dispatch, isSidebarOpen } = useUiContext();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 780); // Adjust the breakpoint as needed
        };

        // Initial check
        handleResize();

        // Listen for window resize events
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav suppressHydrationWarning={true} className="bg-green_color flex justify-between items-center pt-2 px-8 pb-2">
            {/* Logo on the left */}
            <Link href="/" suppressHydrationWarning={true} className='ml-4'>
                {/* <h1 className="sm:text-4xl text-2xl sm:p-3 pb-2 font-extrabold text-mud_color">Green Harbour</h1> */}
                <Image src="/green-harbour-logo.png" alt="Green Harbour" width={130} height={110} />
            </Link>
            <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-1 md:mb-0 text-sm sm:text-base md:text-lg lg:text-lg">
                    <FaPhone className="text-white " />
                    <a href="tel:08000016673" className="font-proxima-nova text-white hover:text-mud_color  transition-a">08000016673</a>
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base md:text-lg lg:text-lg">
                    <MdEmail className="text-white " />
                    <a href="mailto:info@greenharboureco4.co.uk" className="font-proxima-nova text-white hover:text-mud_color  transition-a">info@greenharboureco4.co.uk</a>
                </div>
            </div>



            {/* Hamburger menu for mobile view */}
            {isMobile ? (
                <div>
                    <button onClick={() => dispatch({ type: actioTypes.toggleSidebar })}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>

                    {isSidebarOpen && (
                        <div>
                            <ul className={`bg-green_color font-proxima-nova text-mud_color mobile-dialog absolute h-screen flex flex-col space-y-4 p-3 dark:bg-dark-card transition-a top-0 left-0 !rounded-xl z-30 ${isSidebarOpen && "open"}`}>
                                <div className="flex justify-between border-b dark:border-mud_color space-x-40 p-1">
                                    <p className="uppercase">menu</p>
                                    <div
                                        className="icon-box cursor-pointer hover:text-white"
                                        onClick={() => dispatch({ type: actioTypes.closeSidebar })}
                                    >
                                        <FiDelete />
                                    </div>
                                </div>
                                {links.map(({ id, linkText, url }) => (
                                    <Link key={id} href={url} end legacyBehavior>
                                        <a onClick={() => dispatch({ type: actioTypes.closeSidebar })} className=" hover:text-white hover:bg-mud_color font-proxima-nova rounded-lg p-1 px-2">
                                            {linkText}
                                        </a>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ) : (
                // Navigation links for non-mobile view
                <div className="navbar flex items-center space-x-6">
                    <ul className="md:flex-align-center space-x-3 text-white lg:space-x-6">
                        {links.map(({ id, linkText, url }) => (
                            <ActiveLink href={url} key={id}>
                                {linkText}
                            </ActiveLink>
                        ))}
                    </ul>

                    <Button />
                </div>
            )}
        </nav>
    );
}

export default Navbar;
