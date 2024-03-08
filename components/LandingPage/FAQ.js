"use client"
import React, { useState } from 'react';
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';
export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
          question: 'How to apply for ECO grants?',
          answer: `Just click on one of the buttons provided on this page to begin assessing your eligibility.We${`'`}ll lead you through a series of questions.If it seems promising, we${`'`}ll request your details to contact you and confirm your eligibility.`
  
        },
        {
          question: 'What is ECO?',
          answer: 'ECO is a unique program initiated by the UK government, supported by energy companies, aimed at assisting residents in England, Scotland, and Wales with enhancing their homes. The objective? To increase energy efficiency in homes and reduce energy expenses.'
        },
        {
          question: 'When does ECO Start?',
          answer: 'The ECO4 initiative commenced in April 2022 and is scheduled to end by March 2026.'
        },
        {
          question: 'Who is eligible for ECO funding?',
          answer:  'You may be eligible if a member of your household receives benefits such as Pension Credit, Universal Credit, Income-based Jobseekers Allowance, Child Benefit, Income-related Employment & Support Allowance, Income Support, Housing Benefit, or Tax Credits (Child or Working Tax Credit). If no one in the household receives these benefits, eligibility can also be based on either the combined annual household income being below £31,000 or if someone in the household has a health condition worsened by cold conditions.'       
 
        },
      ];
    return (
    <div className='flex flex-col justify-center items-center mx-60 mt-40 font-proxima-nova '>
        <h1 className='text-green_color font-extrabold text-4xl'>Frequently Asked Questions</h1>

        <div className="hover:cursor-pointer flex flex-col gap-3 p-5 mt-10 w-full">
            {faqData.map((faq, index) => (
                <div key={index} className="faq-item border p-3 rounded-lg bg-green_color text-white shadow-md">
                    <div className=" flex py-3 text-2xl justify-between gap-20 px-10 items-center " onClick={() => toggleAccordion(index)}>
                        <span>{faq.question}</span>
                        {activeIndex === index ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
                    </div>
                    {activeIndex === index && <div className="text-base mt-3 px-10 mb-3">{faq.answer}</div>}
                </div>
            ))}
        </div>
    </div>
  )
}
