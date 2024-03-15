"use client"
import React, { useState } from 'react';
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';
import { faqData } from '../../data/FAQ';
export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [expandedIndex, setExpandedIndex] = useState(null);


    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
      setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));

    };

    
    return (
      <div className='flex flex-col justify-center items-center mx-4 md:mx-12 lg:mx-24 xl:mx-60 mt-10 md:mt-20 font-proxima-nova'>
      <h1 className='text-mud_color font-extrabold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 md:mb-10'>Frequently Asked Questions</h1>

      <div className="flex flex-col gap-3 w-full">
        {faqData.map((faq, index) => (
          <div 
          key={index}
          className={`faq-item border p-3 rounded-lg bg-green_color text-white shadow-md ${
            expandedIndex === index ? "expanded" : ""
          }`}
          style={{ maxHeight: activeIndex === index ? "1000px" : "" }}

          > 
            <div className="flex py-3 text-lg md:text-xl lg:text-2xl justify-between px-6 md:px-10 items-center cursor-pointer" onClick={() => toggleAccordion(index)}>
              <span>{faq.question}</span>
              {activeIndex === index ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
            </div>
            <div className={`text-base md:text-lg px-6 md:px-10 mb-3 ${activeIndex === index ? 'fade-in' : 'hidden'}`}>
              {faq.answer}
            </div>          
          </div>
        ))}
      </div>
    </div>
  )
}
