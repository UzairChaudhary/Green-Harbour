import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
export default function ContactUs() {
  return (
    <div className='mt-10 md:mt-20 flex flex-col items-center justify-center mb-40 font-proxima-nova text-mud_color'>
        <h1 className=' text-3xl md:text-4xl font-extrabold '>Contact Us</h1>
        <p className='text-lg md:text-xl p-5'>Give us a call or send an email, we endeavour to answer all enquiries within 24 hours on business days.</p>
        <div className="flex flex-col md:flex-row md:gap-20 ">
  <div className=" flex md:ml-28 items-center gap-3 mb-3 md:mb-0 text-lg lg:text-xl">
    <FaPhone className="" />
    <a href="tel:08000016673" className="font-proxima-nova ">08000016673</a>
  </div>
  <div className=" flex items-center gap-3 text-lg  lg:text-xl">
    <MdEmail className="" />
    <a href="mailto:info@greenharboureco4.co.uk" className="font-proxima-nova ">info@greenharboureco4.co.uk</a>
  </div>
</div>


    </div>
  )
}
