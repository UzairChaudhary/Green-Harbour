import React from 'react'
import Button from '../common/button'

export default function GetInTouch() {
  return (
    <div className=' mx-40'>
        <h1 className='mt-20 flex justify-center text-4xl font-extrabold text-green_color'>Get In Touch</h1>
        <div className='flex justify-center text-mud_color gap-10 mt-10'>
            <div className='flex text-mud_color flex-col gap-3'>
                <h1>First Name</h1>
                <input type='text' className='border rounded-md p-2 border-mud_color w-96'/>
            </div>
            <div className='flex text-mud_color flex-col gap-3'>
                <h1 >Last Name</h1>
                <input type='text' className='border border-mud_color rounded-md p-2 w-96'/>
            </div>
        </div>
        <div className='flex justify-center text-mud_color gap-10 mt-10'>
            <div className='flex text-mud_color flex-col gap-3'>
                <h1>Email</h1>
                <input type='email' className='border rounded-md p-2 border-mud_color w-96'/>
            </div>
            <div className='flex text-mud_color flex-col gap-3'>
                <h1 >Phone Number</h1>
                <input type='text' className='border border-mud_color rounded-md p-2 w-96'/>
            </div>
        </div>
        <div className='flex  text-mud_color mt-10 mx-48 px-2 flex-col gap-3'>
            <h1 >Message</h1>
            <textarea className='border border-mud_color rounded-md p-2 h-24'></textarea>
        </div>
        <div className='flex mx-48 px-2 mt-5 justify-end'>
            <div className='bg-orange_color px-6 text-white py-1 rounded'>
                Submit
            </div>
        </div>

       
    </div>
  )
}
