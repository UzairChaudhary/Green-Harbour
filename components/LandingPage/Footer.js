import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
export default function Footer() {
  return (
    <div className='bg-green_color gap-2 font-proxima-nova footer hover:cursor-pointer px-4 md:px-10 lg:px-20 py-6 md:py-10 text-white flex flex-row justify-between'>
    <div className='flex flex-col'>
            <Link href="/" suppressHydrationWarning={true} className=''>
                {/* <h1 className="sm:text-4xl text-2xl sm:p-3 pb-2 font-extrabold text-mud_color">Green Harbour</h1> */}
                <Image src="/green-harbour-logo.png" alt="Green Harbour" width={130} height={110} />
            </Link>        <div className='mt-4'>
            <h1 className='text-xl mb-4'>Contact Us</h1>
            <div className="flex flex-col">
                <h1 className="flex items-center gap-3 mb-1 md:mb-0 text-sm sm:text-base md:text-lg lg:text-lg ">
                    <FaPhone className="  " />
                    <a href="tel:08000016673" className="font-proxima-nova text-white hover:text-mud_color  transition-a">08000016673</a>
                </h1>
                <h1 className="flex items-center gap-3 text-sm sm:text-base md:text-lg lg:text-lg">
                    <MdEmail className=" " />
                    <a href="mailto:info@greenharboureco4.co.uk" className="font-proxima-nova text-white hover:text-mud_color  transition-a">info@greenharboureco4.co.uk</a>
                </h1>
            </div>
        </div>
        
    </div>
    <div className='flex flex-col gap-1 mr-5'>
        <h1>About Us</h1>
        <h1>Benefits</h1>
        <h1>Available Upgrades</h1>
        <h1>How it works</h1>
        <h1>FAQ</h1>
        <h1>Why it free?</h1>
        <h1>Who Qualifies</h1>
    </div>
</div>

  )
}
