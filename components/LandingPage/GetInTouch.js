"use client"
import React from 'react'
const axios = require('axios');
export default function GetInTouch() {
    
    const handlesubmit = async () => {
        // try {
        //     const contactData = {
        //         properties: {
        //           firstname: 'John',
        //           lastname: 'Doe',
        //           email: 'john.doe@example.com',
        //           phone: '1234567890'
        //         }
        //       };
        //     const response = await axios.post('/api/contacts', contactData); // Assuming your API route is named 'hubapi.js'
        //     console.log(response.data);
        // } catch (error) {
        //     console.error('Error:', error);
        // }
      };
  return (
    <>
    <div className='mb-20 md:mb-40 flex flex-col items-center mx-4 md:mx-12 lg:mx-24 xl:mx-40'>
      <div>
        <h1 className='mt-10 md:mt-20 flex justify-center text-3xl md:text-4xl font-extrabold text-mud_color'>Get In Touch</h1>
        <div className='flex flex-col md:flex-row text-mud_color gap-10 mt-6 md:mt-10'>
          <div className='flex flex-col gap-3'>
            <h1>First Name</h1>
            <input type='text' name='firstName' className='border rounded-md p-2 border-mud_color bg-light_green w-full md:w-96 ' />
          </div>
          <div className='flex flex-col gap-3'>
            <h1>Last Name</h1>
            <input type='text' name='lastName' className='border border-mud_color rounded-md p-2 w-full bg-light_green md:w-96' />
          </div>
        </div>
        <div className='flex flex-col md:flex-row text-mud_color gap-10 mt-6 md:mt-10'>
          <div className='flex flex-col gap-3'>
            <h1>Email</h1>
            <input type='email' name='email'  className='border rounded-md p-2 border-mud_color w-full bg-light_green md:w-96' />
          </div>
          <div className='flex flex-col gap-3'>
            <h1>Phone Number</h1>
            <input type='text' name='phoneNumber'  className='border border-mud_color rounded-md p-2 w-full bg-light_green md:w-96' />
          </div>
        </div>
        <div className='flex flex-col text-mud_color mt-6 md:mt-10 gap-3'>
          <h1>Message</h1>
          <textarea name='message' className='border border-mud_color rounded-md p-2 h-24 bg-light_green'></textarea>
        </div>
        <div className='flex justify-end mt-6 md:mt-10 px-2'>
          <div onClick={handlesubmit} className='bg-orange_color px-6 text-white py-2 rounded cursor-pointer'>
            Submit
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
