import React from 'react';

export const Footer = () => {
    return ( 
        <footer className='bg-customBlack relative w-full bottom-0 left-0'>
            <div className=' top-0 left-0 w-full'>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="relative block fill-customWhite"></path>
                </svg>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
                    <div className='flex flex-col gap-5'>
                        <h2 className='text-customOrange text-3xl font-bold'>Contact</h2>
                        <p className='text-customWhite'>email</p>
                        <p className='text-customWhite'>0722334556</p>
                        <p className='text-customWhite'>@learnityro</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h2 className='text-customOrange text-3xl font-bold'>Pages</h2>
                        <p className='text-customWhite'>Home</p>
                        <p className='text-customWhite'>Guided</p>
                        <p className='text-customWhite'>Playground</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h2 className='text-customOrange text-3xl font-bold'>People</h2>
                        <p className='text-customWhite'>Ana Predescu</p>
                        <p className='text-customWhite'>Ana Stinghe</p>
                        <p className='text-customWhite'>Alexandra Popescu</p>
                        <p className='text-customWhite'>Gaspar Isabela</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h2 className='text-customOrange text-3xl font-bold'>Contact</h2>
                        <p className='text-customWhite'>email</p>
                        <p className='text-customWhite'>0722334556</p>
                        <p className='text-customWhite'>learnityro</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}