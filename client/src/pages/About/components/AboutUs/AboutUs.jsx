import React from 'react';

const AboutUs = () => {
    return (  
        <div className='w-full'>
            <div className='h-dvh bg-customWhite flex flex-col justify-between relative'>
                <div className="absolute left-0 bottom-0 w-full overflow-hidden transform rotate-180">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className='relative block'>
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-customBlack"></path>
                    </svg>
                </div>
                cum a inceput?
                <div className='w-16 h-16 z-0 text-center text-customBlack rounded-full bg-customWhite'>
                    <p>2</p>
                </div>
            </div>
            <div className='h-dvh bg-customBlack relative flex flex-col justify-between'>
            <div className="absolute left-0 bottom-0 w-full overflow-hidden transform rotate-180">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className='relative block h-[220px]'>
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-customWhite"></path>
                    </svg>
                </div>
                reforma
                <div className='w-16 h-16 z-0 text-center text-customWhite rounded-full bg-customOrange'>
                    <p>2</p>
                </div>
            </div>
            <div className='h-dvh bg-customWhite'>
                cum merge?
            </div>
        </div>
    );
}
 
export default AboutUs;