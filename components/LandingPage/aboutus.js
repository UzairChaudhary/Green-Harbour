import React from 'react'
import Button from '../common/button'

export default function Aboutus() {
  return (
    <div id='aboutus' className='flex flex-col mx-4 md:mx-12 lg:mx-24 xl:mx-40 mt-10 md:mt-20 font-proxima-nova text-mud_color'>
  <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center'>About Us</h1>
  
  <div className="mt-10">
    <h2 className='text-xl md:text-2xl font-bold'>Who we are</h2>
    <p className='text-base md:text-lg mt-3'>Welcome to Eco, your dedicated partner in transitioning to sustainable living. We are specialists committed to facilitating accessible, eco-friendly solutions for households across the UK. Founded on the principle that everyone deserves a warm, efficient home without a cumbersome process, we serve as your bridge to the ECO government scheme, ensuring a seamless, understandable, and hassle-free experience.</p>
  </div>
  
  <div className="mt-10">
    <h2 className='text-xl md:text-2xl font-bold'>What we do</h2>
    <p className='text-base md:text-lg mt-3'>At Eco, we streamline your path to energy efficiency. From initial contact and eligibility assessment to final installation, we{`'`}re with you every step of the way.</p>
  </div>
  
  <div className="mt-10">
    <h2 className='text-lg md:text-xl font-bold'>Our comprehensive service includes</h2>
    <h3 className='text-lg md:text-xl font-bold mt-3'>Eligibility Confirmation</h3>
    <p className='text-base md:text-lg mt-3'>We conduct thorough checks to confirm if you{`'`}re eligible for the ECO grant, saving you the headache of navigating complex governmental criteria.</p>
    
    <h3 className='text-lg md:text-xl font-bold mt-5'>Installation Supervision</h3>
    <p className='text-base md:text-lg mt-3'>We don{`'`}t just stop at paperwork. Eco oversees the installation process, ensuring that it meets our high standards of quality and efficiency. We only partner with accredited installers who share our commitment to excellence.</p>
  </div>
  
  <div className="mt-10">
    <h2 className='text-xl md:text-2xl font-bold'>Why Choose Us</h2>
    <p className='text-base md:text-lg mt-3'>Choosing Green Harbour ECO4 means selecting peace of mind. We understand the multifaceted nature of transitioning to eco-friendly home solutions and are dedicated to making this journey as simple and understandable as possible. Our team is comprised of knowledgeable, empathetic professionals who put your needs first.</p>
    <p className="text-base md:text-lg mt-3">But beyond the process itself, we{`'`}re here for what it represents: a step towards a sustainable future, a means to combat energy poverty, and the transformation of houses into better, more efficient homes. With Eco4home, you{`'`}re not just upgrading your living space; you{`'`}re contributing to a greener, more sustainable world for us all.</p>
  </div>

  <div className='flex justify-center mt-10 mb-40'>
    <Button />
  </div>
</div>

  )
}
