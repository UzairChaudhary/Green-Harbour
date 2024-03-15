import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center" style={{backgroundImage: "url('/landingpage/herosection.png')"}}>
        <div className="flex flex-col justify-center items-center">
            <div className='text-center mb-10 mt-10'> {/* Adjusted top and bottom margins */}
                <h1 className="text-4xl md:text-5xl text-mud_color font-proxima-nova font-extrabold mb-2">Enhance your home at no cost with Green</h1> {/* Adjusted text size */}
                <h1 className="text-4xl md:text-5xl text-mud_color font-proxima-nova font-extrabold">Harbour ECO4 Government Grant Scheme!</h1> {/* Adjusted text size */}
            </div>
            <div className='text-center mt-20'> {/* Adjusted top margin */}
                <p className="text-lg text-white font-proxima-nova font-bold mt-2">Explore how you can convert your home into an energy-efficient </p> {/* Adjusted text size */}
                <p className="text-lg text-white font-proxima-nova font-bold">sanctuary and start saving on your energy expenses today!</p>
            </div>
            <Link
            href={'/who-qualifies'} 
            className="bg-orange_color hover:scale-105 hover:transition-a text-white font-bold py-3 text-lg px-6 mt-12 mb-10  rounded-lg">Check your Eligibility Now</Link> {/* Adjusted button styling */}
        </div>
    </div>
  );
}
