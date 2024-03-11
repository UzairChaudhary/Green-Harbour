"use client"
import React from 'react'
const axios = require('axios');
export default function GetInTouch() {
    
    const handlesubmit = async () => {
        try {
            const contactData = {
                properties: {
                  firstname: 'John',
                  lastname: 'Doe',
                  email: 'john.doe@example.com',
                  phone: '1234567890'
                }
              };
            const response = await axios.post('/api/contacts', contactData); // Assuming your API route is named 'hubapi.js'
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
      };
  return (
    <>
    <div className='mb-40 flex flex-col items-center mx-40'>
        <div>
        <h1 className='mt-20 flex justify-center text-4xl font-extrabold text-green_color'>Get In Touch</h1>
        <div className='flex text-mud_color gap-10 mt-10'>
            <div className='flex text-mud_color flex-col gap-3'>
                <h1>First Name</h1>
                <input type='text' className='border rounded-md p-2 border-mud_color w-96'/>
            </div>
            <div className='flex text-mud_color flex-col gap-3'>
                <h1 >Last Name</h1>
                <input type='text' className='border border-mud_color rounded-md p-2 w-96'/>
            </div>
        </div>
        <div className='flex  text-mud_color gap-10 mt-10'>
            <div className='flex text-mud_color flex-col gap-3'>
                <h1>Email</h1>
                <input type='email' className='border rounded-md p-2 border-mud_color w-96'/>
            </div>
            <div className='flex text-mud_color flex-col gap-3'>
                <h1 >Phone Number</h1>
                <input type='text' className='border border-mud_color rounded-md p-2 w-96'/>
            </div>
        </div>
        <div className='flex flex-col text-mud_color mt-10 px-2 gap-3'>
            <h1 >Message</h1>
            <textarea className='border border-mud_color rounded-md p-2 h-24'></textarea>
        </div>


        <div className='flex hover:cursor-pointer px-2 mt-5 justify-end'>
            <div
            onClick={handlesubmit} 
            className='bg-orange_color px-6 text-white py-1 rounded'>
                Submit
            </div>
        </div>
        </div>
       

       
    
    </div>
    </>
  )
}
