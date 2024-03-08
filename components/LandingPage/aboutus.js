import React from 'react'
import Button from '../common/button'

export default function Aboutus() {
  return (
    <div className='flex font-proxima-nova text-mud_color flex-col mx-40 mt-20'>
        <h1 className='text-4xl flex justify-center font-extrabold '>About Us</h1>
        
        <h1 className='text-2xl font-bold mt-10'>Who we are</h1>
        <p className='text-lg mt-5'>Welcome to Eco, your dedicated partner in transitioning to sustainable living. We are specialists committed to facilitating accessible, eco-friendly solutions for households across the UK. Founded on the principle that everyone deserves a warm, efficient home without a cumbersome process, we serve as your bridge to the ECO government scheme, ensuring a seamless, understandable, and hassle-free experience.</p>
        
        <h1 className='text-2xl font-bold mt-10'>What we do</h1>
        <p className='text-lg mt-5'>At Eco, we streamline your path to energy efficiency. From initial contact and eligibility assessment to final installation, we{`'`}re with you every step of the way. </p>
        
        <h1 className='text-lg mt-5 font-bold'>Our comprehensive service includes</h1>
        
        <h1 className='text-lg mt-5 font-bold'>Eligibility Confirmation</h1>
        <p className='text-lg mt-5'>We conduct thorough checks to confirm if you{`'`}re eligible for the ECO grant, saving you the headache of navigating complex governmental criteria.
            End-to-End Coordination: Acting as your advocate and liaison, we coordinate with local authorities, Ofgem, accredited installers, and healthcare services where necessary. We ensure clear communication and strict adherence to guidelines, making the process smooth and straightforward.</p>
        
        <h1 className='text-lg mt-5 font-bold'>Installation Supervision</h1>
        <p  className='text-lg mt-5'>We don{`'`}t just stop at paperwork. Eco oversees the installation process, ensuring that it meets our high standards of quality and efficiency. We only partner with accredited installers who share our commitment to excellence.</p>
        
        <h1 className='text-2xl font-bold mt-10'>Why Choose Us</h1>
        <p className='text-lg mt-5'>Choosing Green Harbour ECO4 means selecting peace of mind. We understand the multifaceted nature of transitioning to eco-friendly home solutions and are dedicated to making this journey as simple and understandable as possible. Our team is comprised of knowledgeable, empathetic professionals who put your needs first.</p>
        <p className="text-lg mt-2"> But beyond the process itself, we{`'`}re here for what it represents: a step towards a sustainable future, a means to combat energy poverty, and the transformation of houses into better, more efficient homes. With Eco4home, you{`'`}re not just upgrading your living space; you{`'`}re contributing to a greener, more sustainable world for us all.</p>

        <div className='flex justify-center mt-10'>
            <Button/>
        </div>
    </div>
  )
}
