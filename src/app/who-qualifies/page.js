import React from 'react'
import Button from '../../../components/common/button'

export default function page() {
  return (
    <div className='mx-20 font-proxima-nova mt-20'>
        <h1 className='flex justify-center font-extrabold text-4xl text-mud_color'> Who Qualifies?</h1>
        <p className='mt-10 text-lg font-bold flex justify-center text-mud_color'>You may qualify for the ECO4 grant if you meet any of the three eligibility criteria:</p>
        <div className='flex justify-center mt-16 gap-3'>
            <div className=' text-white flex flex-col w-80 justify-between bg-mud_color p-8 rounded-xl'>
                <div className='flex justify-center  flex-col items-center'>
                <h1 className='text-2xl flex justify-center font-bold'> Qualifying Benefits</h1>
                <ul className='list-disc mt-5 pl-5'>
                    <li>Pension Credit</li>
                    <li>Child Tax Credits</li>
                    <li>Working Tax Credits</li>
                    <li>Universal Credit</li>
                    <li>Income Support</li>
                    <li>Housing Benefit</li>
                    <li>Income-Based Employment and Support allowance</li>
                    <li>Income-Based Job Seekers Allowance</li>
                    <li>Child Benefit</li>
                </ul>
                </div>
                <div className='flex justify-center mt-5'>

                    <Button/>
                </div>
            </div>
            <div className='flex flex-col w-80 justify-between  p-8 text-white bg-mud_color rounded-xl'>
                <div>
                <h1 className='text-2xl flex justify-center font-bold'>Income</h1>
                <p className=' mt-5'>Household earns less than £31,000 (gross)</p>

                </div>
                <div className='flex flex-col items-center  mt-5'>

                    <Button/>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center w-80 p-8 text-white bg-mud_color rounded-xl'>
                <h1 className='text-2xl flex justify-center font-bold'>NHS Referrral</h1>
                <p className=' mt-5'>You may qualify for ECO4 benefits through an NHS referral if you or anyone in the household receive repeated medication or have medical conditions affected by the cold, such as:</p>
                <ul className='list-disc mt-5 pl-5'>
                        <li>Cardiovascular problems</li>
                        <li>Respiratory issues</li>
                        <li>Limited mobility</li>
                        <li>Weakened immunity</li>
                        
                </ul>
                <div className='flex flex-col items-center  mt-10'>

                    <Button/>
                </div>

            </div>
        </div>
        <div className='mt-20'>Q</div>
    </div>
  )
}
