import React from 'react';
import { MdCurrencyPound } from "react-icons/md";

export default function Benefits() {
  return (
    <div className='flex flex-col text-mud_color font-proxima-nova mx-4 md:mx-8 lg:mx-20 mt-10 md:mt-20'> {/* Adjusted horizontal margins and top margin */}
      <h1 className='text-3xl md:text-4xl font-bold mb-4 md:mb-6'>Benefits</h1> {/* Adjusted text size */}
      <p className='text-lg md:text-xl mb-4 md:mb-6'>Revamp your home, Cut costs, and Support our planet{`'`}s well-being</p> {/* Adjusted text size */}
      <p className='mb-4 md:mb-5 text-base md:text-lg'>Enter a realm of unmistakable benefits with the Green Harbour ECO4 Government Grant Scheme customised specifically for you. Experience a significant shift towards energy efficiency, savings, and environmental impact.</p> {/* Adjusted text size */}
      <h1 className='text-lg md:text-xl font-bold mt-4 md:mt-5'>Here{`'`}s what awaits you:</h1> {/* Adjusted text size */}
      
      <div className='flex flex-col md:flex-row gap-4 md:gap-8 text-base md:text-lg mt-6 md:mt-8'> {/* Adjusted gap and text size */}
        <div className='flex flex-col justify-center gap-2 md:gap-5'>
          <div className='flex gap-2 md:gap-4 items-center'>
            <MdCurrencyPound size={22} /> {/* Adjusted icon size */}
            <div>Save Money: You{`'`}ll cut down significantly on your energy bills.</div>
          </div>
          <div className='flex gap-2 md:gap-4 items-center'>
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.375 25.875C18.375 25.875 10.25 26.5 5.875 21.5C1.5 16.5 1.5 1.5 1.5 1.5C1.5 1.5 16.5 0.875 21.5 4.625C26.5 8.375 25.25 19 25.25 19M26.5 26.5C26.5 26.5 19.5129 21.2197 15.25 16.5M15.25 16.5C10.9871 11.7803 9 7.125 9 7.125M15.25 16.5L15.875 8.375M15.25 16.5L9 15.875" stroke="#474038" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        
              </svg>
            </div>
            <div>Eco-Friendly Living: You{`'`}ll play a part in shrinking the global carbon footprint.</div>
          </div>
        </div>
        <div className='flex flex-col gap-2 md:gap-5'>
          <div className='flex gap-2 md:gap-4 items-center'>
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.4144 1.01794C13.7568 0.744022 14.2433 0.744022 14.5857 1.01794L27.0857 11.0179C27.49 11.3414 27.5555 11.9313 27.2321 12.3357C26.9087 12.74 26.3187 12.8055 25.9144 12.4821L24.3125 11.2006V24.25C24.3125 24.7678 23.8928 25.1875 23.375 25.1875H4.62503C4.10727 25.1875 3.68753 24.7678 3.68753 24.25V11.2006L2.08569 12.4821C1.68138 12.8055 1.09142 12.74 0.76797 12.3357C0.444524 11.9313 0.510075 11.3414 0.914383 11.0179L13.4144 1.01794ZM18.9752 10.5952C19.3729 10.2637 19.4267 9.67259 19.0952 9.27483C18.7637 8.87707 18.1726 8.82333 17.7748 9.15479L14.6825 11.7317L13.4129 10.4621C13.0751 10.1243 12.5374 10.0945 12.1643 10.3929L9.03935 12.8929C8.63504 13.2164 8.56949 13.8063 8.89294 14.2107C9.21638 14.615 9.80634 14.6805 10.2107 14.3571L12.6804 12.3812L13.9621 13.6629C14.3049 14.0058 14.8527 14.0306 15.2252 13.7202L18.9752 10.5952ZM19.3125 14.25C19.3125 13.7322 18.8928 13.3125 18.375 13.3125C17.8572 13.3125 17.4375 13.7322 17.4375 14.25V20.5C17.4375 21.0178 17.8572 21.4375 18.375 21.4375C18.8928 21.4375 19.3125 21.0178 19.3125 20.5V14.25ZM14.9375 16.75C14.9375 16.2322 14.5178 15.8125 14 15.8125C13.4822 15.8125 13.0625 16.2322 13.0625 16.75V20.5C13.0625 21.0178 13.4822 21.4375 14 21.4375C14.5178 21.4375 14.9375 21.0178 14.9375 20.5V16.75ZM10.5625 18C10.5625 17.4822 10.1428 17.0625 9.625 17.0625C9.10723 17.0625 8.6875 17.4822 8.6875 18V20.5C8.6875 21.0178 9.10723 21.4375 9.625 21.4375C10.1428 21.4375 10.5625 21.0178 10.5625 20.5V18Z" fill="#474038"/>
              </svg>
            </div>
            <div>Boost in Property Value: Elevate your home{`'`}s market worth.</div>
          </div>
          <div className='flex gap-2 md:gap-4 items-center'>
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.22564 0.651815C7.47037 0.536587 7.75294 0.532681 8.00076 0.641098C10.8431 1.88457 12.2232 4.35856 12.8912 6.40429C13.0057 6.75506 13.1006 7.09676 13.1792 7.42226C14.0568 6.32718 15.416 5.14841 17.3976 4.65299C17.6633 4.58658 17.9446 4.63962 18.1679 4.79817C18.3911 4.95672 18.5339 5.20494 18.5586 5.47762C18.7015 7.04907 19.1247 8.10286 19.5371 9.03503C19.5758 9.12257 19.6155 9.21094 19.6556 9.30025C20.0284 10.13 20.4375 11.0406 20.4375 12.125C20.4375 17.1301 16.3801 21.1875 11.375 21.1875C6.36992 21.1875 2.3125 17.1301 2.3125 12.125C2.3125 9.62635 3.19742 7.88592 4.16678 6.28484C4.32495 6.02359 4.48377 5.76797 4.64136 5.51434C5.45553 4.20394 6.23662 2.94678 6.72357 1.24245C6.79788 0.982359 6.98091 0.767042 7.22564 0.651815ZM13.5142 10.5471C13.3685 10.9829 12.9285 11.249 12.4748 11.1754C12.0215 11.1018 11.6882 10.7106 11.6875 10.2515C11.6875 10.2516 11.6875 10.2514 11.6875 10.2515L11.6874 10.2426L11.6866 10.1993C11.6856 10.159 11.6834 10.0962 11.6791 10.0135C11.6703 9.84806 11.6524 9.60407 11.6161 9.30239C11.5432 8.69681 11.3976 7.8708 11.1088 6.98629C10.6151 5.47434 9.73442 3.87707 8.16154 2.85097C7.6049 4.307 6.86832 5.48859 6.20729 6.54896C6.05685 6.79029 5.91032 7.02535 5.77072 7.25593C4.86508 8.75177 4.1875 10.1363 4.1875 12.125C4.1875 16.0945 7.40545 19.3125 11.375 19.3125C15.3445 19.3125 18.5625 16.0945 18.5625 12.125C18.5625 11.4605 18.3213 10.9173 17.9173 10.0078C17.8866 9.93854 17.8549 9.86719 17.8223 9.7935C17.4762 9.01096 17.0897 8.07331 16.8542 6.82369C15.7873 7.3174 15.0139 8.08435 14.4721 8.81584C14.124 9.28575 13.8799 9.73038 13.7241 10.0551C13.6464 10.2168 13.5915 10.3471 13.5572 10.4335C13.54 10.4766 13.5281 10.5086 13.521 10.528L13.5142 10.5471ZM13.5142 10.5471L13.5137 10.5487C13.5136 10.5488 13.5136 10.5487 13.5142 10.5471Z" fill="#474038"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.465713 21.2725C0.59129 20.7702 1.10029 20.4648 1.6026 20.5904L21.6026 25.5904C22.1049 25.716 22.4103 26.225 22.2847 26.7273C22.1592 27.2296 21.6502 27.535 21.1478 27.4094L1.14784 22.4094C0.645537 22.2838 0.340136 21.7748 0.465713 21.2725Z" fill="#474038"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M22.2847 21.2725C22.4103 21.7748 22.1049 22.2838 21.6026 22.4094L1.6026 27.4094C1.10029 27.535 0.59129 27.2296 0.465713 26.7273C0.340136 26.225 0.645537 25.716 1.14784 25.5904L21.1478 20.5904C21.6502 20.4648 22.1592 20.7702 22.2847 21.2725Z" fill="#474038"/>

              </svg>
            </div>
            <div>Optimal Comfort: Experience the luxury of an energy-efficient home.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
