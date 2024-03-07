import React from 'react'

export default function HeroSection() {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center" style={{backgroundImage: "url('/landingpage/herosection.png')"}}>
        <div className="flex flex-col justify-center items-center">
            <div className='text-center mb-32 mt-20'>
                <h1 className="text-5xl text-mud_color font-proxima-nova font-extrabold mb-2">Enhance your home at no cost with Green</h1>
                <h1 className="text-5xl text-mud_color font-proxima-nova font-extrabold">Harbour ECO4 Government Grant Scheme!</h1>

            </div>
            <div className='text-center mt-40'>
                <p className="text-lg text-white font-proxima-nova font-bold mt-10">Explore how you can convert your home into an energy-efficient </p>
                <p className="text-lg text-white font-proxima-nova font-bold">sanctuary and start saving on your energy expenses today!</p>

            </div>
            <button className="bg-orange_color text-white font-bold py-3 text-lg px-6 mt-16 rounded-lg">Register Today</button>
        </div>
    </div>

  )
}
