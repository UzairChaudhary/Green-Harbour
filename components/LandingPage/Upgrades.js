import React from 'react'
import Button from '../common/button';
import { homeServicesData } from '../../data/upgrades';
export default function  Upgrades () {
    
  return (
    <div className='mx-4 md:mx-8 lg:mx-20 mt-10 md:mt-20 text-mud_color font-proxima-nova'>
  <h1 className='text-3xl md:text-4xl font-extrabold flex justify-center mb-3'>Available Upgrades</h1> {/* Adjusted text size */}
  <p className='text-lg md:text-2xl flex justify-center'>Find out which upgrades can drastically reduce your energy bills at no cost!</p> {/* Adjusted text size */}
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 md:mt-20"> {/* Adjusted grid layout */}
    {homeServicesData.map((service) => (
      <div className="flex flex-col justify-center gap-3 p-4 rounded-md" key={service.id}> {/* Adjusted gap and padding */}
        <h2 className="text-xl flex justify-center md:text-2xl lg:text-3xl font-bold">{service.heading}</h2> {/* Adjusted text size */}
        <img src={service.imageSrc} alt={service.heading} className="w-full hover:cursor-pointer hover:scale-105 transition-a" /> {/* Adjusted image size and added hover effect */}
        <p className='text-base md:text-lg flex justify-center items-center text-center'>{service.description}</p> {/* Adjusted text size */}
      </div>
    ))}
  </div>

  <div className='flex justify-center mt-8 md:mt-10 hover:transition-a'> {/* Adjusted top margin */}
    <Button />
  </div>
</div>

  )
}
