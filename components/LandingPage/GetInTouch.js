"use client"
import React,{useState} from 'react'
const axios = require('axios');
import {toast} from 'react-hot-toast';

export default function GetInTouch() {
  const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [phonenumber, setphonenumber] = useState("")
    const [email, setemail] = useState("")
    const [message, setMessage] = useState("")
    
    const handlesubmit = async () => {

    if(firstname===""){
        toast.error("Please enter your first name")
        return
    }
    if(lastname===""){
        toast.error("Please enter your last name")
        return
    }
    if(email===""){
      toast.error("Please enter your email")
      return
  }
    if(phonenumber===""){
        toast.error("Please enter your phone number")
        return
    }
    
    if (message===""){
        toast.error("Please enter your message")
        return
    }
    try{
        const contactData = {
            properties: {
              firstname: firstname,
              lastname: lastname,
              email: email,
              phone: phonenumber,
              message: message
            }
          };
        axios.post('/api/contacts', contactData)
        .then(response => {
            //console.log(response.data);
            if (response.data.success){
                toast.success('Thankyou for choosing Green Harbour ECO4. We will get back to you soon!')
                setfirstname("")
                setlastname("")
                setphonenumber("")
                setemail("")
                setMessage("")
            }
            else
            {
                toast.error("An error occurred. Please try again")
            }
        }); 
        
    }
    catch(error){
        console.error('Error:', error);
    }
        // try {
        //     const contactData = {
        //         properties: {
        //           firstname: 'uzair',
        //           lastname: 'ch',
        //           email: 'uzair@gmail.com',
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
    <div className='mb-20 md:mb-40 font-proxima-nova flex flex-col items-center mx-4 md:mx-12 lg:mx-24 xl:mx-40'>
      <div>
        <h1 className='mt-10 md:mt-20 flex justify-center text-3xl md:text-4xl font-extrabold text-mud_color'>Get In Touch</h1>
        <div className='flex flex-col md:flex-row text-mud_color gap-10 mt-6 md:mt-10'>
          <div className='flex flex-col gap-3'>
            <h1>First Name</h1>
            <input
             value={firstname}
             onChange={(e) => setfirstname(e.target.value)}
             type='text' name='firstName' className='border rounded-md p-2 border-mud_color bg-light_green w-full md:w-96 ' />
          </div>
          <div className='flex flex-col gap-3'>
            <h1>Last Name</h1>
            <input
             value={lastname}
             onChange={(e) => setlastname(e.target.value)} 
            type='text' name='lastName' className='border border-mud_color rounded-md p-2 w-full bg-light_green md:w-96' />
          </div>
        </div>
        <div className='flex flex-col md:flex-row text-mud_color gap-10 mt-6 md:mt-10'>
          <div className='flex flex-col gap-3'>
            <h1>Email</h1>
            <input 
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type='email' name='email'  className='border rounded-md p-2 border-mud_color w-full bg-light_green md:w-96' />
          </div>
          <div className='flex flex-col gap-3'>
            <h1>Phone Number</h1>
            <input 
            value={phonenumber}
            onChange={(e) => setphonenumber(e.target.value)}
            type='text' name='phoneNumber'  className='border border-mud_color rounded-md p-2 w-full bg-light_green md:w-96' />
          </div>
        </div>
        <div className='flex flex-col text-mud_color mt-6 md:mt-10 gap-3'>
          <h1>Message</h1>
          <textarea 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name='message' className='border border-mud_color rounded-md p-2 h-24 bg-light_green'></textarea>
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
