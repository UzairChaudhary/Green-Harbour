"use client"
import React, { useEffect, useState } from 'react';


import { FiDelete} from "react-icons/fi";


import { useUiContext } from "../../contexts/UiContext";
import { actioTypes } from "../../reducers/uiReducer";

import Image from "next/image";
import Link from 'next/link';
import { links } from "../../data/links";

import ActiveLink from './ActiveLink'
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
    <nav suppressHydrationWarning={true} className="bg-green_color flex justify-around items-center pt-2 space-x-96 ">
      {/* Logo on the left */}
      
        <Link href="/" suppressHydrationWarning={true}>
          {/* <Image  src="/amazon.png" height={130} width={130} alt="Green Harbour" className='' /> */}
          <h1 className="text-4xl p-3 font-extrabold text-mud_color">Green Harbour</h1>
        </Link>
      

      
      {isMobile ? (
        // Hamburger menu for mobile view
        <div>
          <button onClick={() => dispatch({ type: actioTypes.toggleSidebar })} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          {isSidebarOpen && (
            <div >
              <ul className={`bg-slate-50 mobile-dialog absolute h-screen flex flex-col space-y-4 p-3 dark:bg-dark-card transition-a top-0 left-0 !rounded-xl z-30 ${
              isSidebarOpen && "open"
            }`}  >
            <div className="flex justify-between border-b dark:border-slate-800 space-x-40 p-1 ">
            <p className="uppercase">menu</p>
            <div
              className="icon-box cursor-pointer"
              onClick={() => dispatch({ type: actioTypes.closeSidebar })}
            >
              <FiDelete />
            </div>
          </div>
          {links.map(({ id, linkText, url }) => (
            <Link key={id} href={url} end legacyBehavior >
              <a onClick={() => dispatch({ type: actioTypes.closeSidebar })} className="hover:bg-gray-500 hover:text-white rounded-lg p-1 px-2">
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
        <div className="navbar flex items-center space-x-6 ">
          <ul className=" md:flex-align-center space-x-3 text-white lg:space-x-6">
              {links.map(({ id, linkText, url }) => (
                <ActiveLink href={url} key={id}>
                  {linkText}
                </ActiveLink>
              ))}
          </ul>
          

          <Button/>
          
        </div>
      )}
    </nav>
  );
}

export default Navbar;
