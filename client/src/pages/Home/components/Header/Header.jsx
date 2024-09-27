import React from 'react';
import logo from '../../assets/vite.svg';

export const Header = () => {
    const learnity = 'Learnity';
    return ( 
        <header className='h-screen relative left-0 top-0 justify-center bg-customWhite'>
            <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className='relative block h-[100%]'>
                    <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" className="shape-fill fill-customBlack"></path>
                </svg>
            </div>
            <div className='flex flex-col md:flex-row'>
                <div className='w-full md:w-1/2 flex flex-col justify-center'>
                    <div className='flex relative'>
                        {learnity.split('').map((char, index) => {
                            if (char === 'a') {
                                return (
                                    <img src={logo} width={96} key={index} className='animate-spinSlow' />
                                );
                            }
                            return (
                                <h1 className='text-center text-8xl font-bold text-customBlack animate-headerFallBounce' key={index}>{char}</h1>
                            )
                        })}
                    </div>
                    <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className='flex'>
                        <p className='font-bold text-2xl text-customBlack'>Contact us: </p>
                        <a href='tel:0744117331' className='mx-[1%]'><i className="fa-solid fa-phone fa-2x text-customBlack"></i></a>
                        <a href='' className='mx-[1%]'><i className="fa-solid fa-envelope fa-2x text-customBlack"></i></a>
                        <a href='https://www.instagram.com/learnityro/' className='mx-[1%]'><i className="fa-brands fa-instagram fa-2x text-customBlack"></i></a>
                        <a href='https://www.facebook.com/learnity' className='mx-[1%]'><i className="fa-brands fa-facebook fa-2x text-customBlack"></i></a>
                    </div>
                </div>
                <div className='w-full md:w-1/2'>
                    titirez 3d
                </div>
            </div>
        </header>
     );
}