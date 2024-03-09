import React from "react";
import Button from "../common/button";

const stepData = [
  {
    id: 1,
    title: "Step 1",
    heading: "Check Eligibility",
    description:
      "Discover if you qualify for the grant and which upgrades are available for you to apply for.",
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/00a63acdf4d3337d9830e9aa85dc69c809f14e00aecf63905a5cd07046fa1aad?apiKey=58b353e16f7149db9729650bdfef6357&",
    imgAlt: "Eligibility checking illustration",
  },
  {
    id: 2,
    title: "Step 2",
    heading: "Free Survey",
    description:
      "We'll arrange for a certified surveyor to assess your home and acquire the necessary funding free of charge.",
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac563e320b47277a67afc57c9704cc3c08c36a87740c43f62fe1a7b98d49d5ab?apiKey=58b353e16f7149db9729650bdfef6357&",
    imgAlt: "Free survey illustration",
  },
  {
    id: 3,
    title: "Step 3",
    heading: "Install Upgrades",
    description:
      "Schedule an installation with a Trustmark Installer and relish the warmth of your home!.",
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac563e320b47277a67afc57c9704cc3c08c36a87740c43f62fe1a7b98d49d5ab?apiKey=58b353e16f7149db9729650bdfef6357&",
    imgAlt: "Install upgrades illustration",
  },
];

function StepTile({ title, heading, description, imgSrc, imgAlt }) {
  return (
    
      <div className="p-6 text-white rounded-3xl hover:scale-105 hover:cursor-pointer transition-a shadow-sm bg-green_color w-96">
        
        <div className="flex flex-col px-2 ">
          <div className="text-xl font-semibold">{title}</div>
          <div className="mt-3 text-2xl font-bold">{heading}</div>
          <div className="mt-3 text-lg">{description}</div>
        </div>
        
        <div className="flex justify-end mr-5">
            <img loading="lazy" src={imgSrc} alt={imgAlt}  />
        </div>

      </div>
    
  );
}

function StepsSection() {
  return (
    <div id='how-it-works' className="flex font-proxima-nova overflow-hidden mt-32 relative flex-col items-center px-8 py-20 min-h-[999px]">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/67d3b5384c8d55b490a75ac91e5b530b4f7b151ea266faf4a2688e91095b07d7?apiKey=58b353e16f7149db9729650bdfef6357&" alt="Background" className=" absolute inset-0 w-full " />
      <div className="relative mt-32 text-4xl font-extrabold text-white whitespace-nowrap">
        How it works ?
      </div>
      <div className="relative mt-5 text-2xl text-white">
        Secure your grant with just three simple steps
      </div>
      <div className=" grid relative mt-28">
        <div className="flex gap-5 mx-40 ">
          {stepData.map((step) => (
            <StepTile key={step.id} {...step} />
          ))}
          
        </div>
      </div>
      <div className="z-10 mt-36 hover:scale-105 hover:transition-a">
      <Button/>
    
      </div>
    </div>
  );
}

export default StepsSection;