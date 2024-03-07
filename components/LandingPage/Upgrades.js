import React from 'react'
import Button from '../common/button';

export default function  Upgrades () {
    const homeServicesData = [
        {
          id: 1,
          heading: "Boiler Upgrades",
          imageSrc: "/service-upgrades/boilder-upgrade.jpg",
          description: "Swap out your outdated, ineffective boiler with a modern, energy-efficient model that decreases energy usage and cuts down heating expenses.",
        },
        {
          id: 2,
          heading: "Air Sourced Heat Pump",
          imageSrc: "/service-upgrades/air-sourced-heat-pump.jpg",
          description: "Effectively warm your home with renewable energy, reducing both your heating expenses and carbon emissions.",
        },
        {
            id: 3,
            heading: "Solar Panels",
            imageSrc: "/service-upgrades/solarpanels.jpg",
            description: "Produce clean, renewable energy for your household and decrease your dependence on the grid."
          },
          {
            id: 4,
            heading: "First Time Central Heating",
            imageSrc: "/service-upgrades/central-heating.jpg",
            description: "Introduce central heating for the initial time, ensuring consistent warmth and comfort throughout your household." 
            },
          {
            id: 5,
            heading: "High Heat Retention Storage Heaters",
            imageSrc: "/service-upgrades/storage-heaters.jpg",
            description: "Switch to high-efficiency storage heaters with excellent heat retention capabilities, storing energy during off-peak periods and releasing it as required."          },
          {
            id: 6,
            heading: "Internal Wall Insulation",
            imageSrc: "/service-upgrades/wall-isolation.jpg",
            description: "Enhance the energy efficiency of your home's interior walls, guaranteeing a warm and comfortable living space."          },
          {
            id: 7,
            heading: "Cavity Wall Insulation",
            imageSrc: "/service-upgrades/cavity-wall-insulation.jpg",
            description: "Reduce heat loss through the cavity walls of your home, promoting a consistently comfortable indoor temperature throughout the year."          },
          {
            id: 8,
            heading: "Room in Roof Insulation",
            imageSrc: "/service-upgrades/roof-insulation.jpg",
            description: "Enhance energy efficiency and transform your attic into a cosy and comfortable area by insulating it."          },
          {
            id: 9,
            heading: "Underfloor Insulation",
            imageSrc: "/service-upgrades/floor-insulation.jpg",
            description: "Stop heat from leaking through your floors, enhancing the overall thermal efficiency of your home."          }
        
      ];
  return (
    <div className='mx-40 mt-40 text-mud_color font-proxima-nova '>
        <h1 className='text-4xl font-extrabold flex justify-center mb-3'>Available Upgrades</h1>
        <p className='flex justify-center text-2xl'>Find out which upgrades can drastically reduce your energy bills at no cost!</p>

        <div className="grid grid-cols-3 gap-5 mt-20">
      {homeServicesData.map((service) => (
        <div className="flex flex-col justify-evenly gap-1 p-4 rounded-md" key={service.id}>
        <h2 className="flex justify-center text-2xl mb-3 font-bold">{service.heading}</h2>
        <img src={service.imageSrc} alt={service.heading} className="w-full hover:cursor-pointer hover:scale-105 transition-a" />
        <p className='flex justify-center mt-2 text-base items-center text-center'>{service.description}</p>
      </div>
        
      ))}
    </div>
    
    <div className='flex justify-center mt-10'>
    <Button/>
    </div>
    </div>
  )
}
