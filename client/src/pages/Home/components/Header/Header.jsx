import React from 'react';
import logo from '../../assets/vite.svg';

export const Header = () => {
    const learnity = 'Learnity';
    return ( 
        <header className='h-screen relative left-0 top-0 flex flex-col justify-center'>
            <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className='relative block h-[100%]'>
                    <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" className="shape-fill fill-customBlack"></path>
                </svg>
            </div>
            <div className='flex'>
                {learnity.split('').map((char, index) => {
                    if (char === 'a') {
                        return (
                            <img src={logo} width={96} key={index} className='animate-spin' />
                        );
                    }
                    return (
                        <h1 className='text-center text-8xl font-bold text-customBlack animate-headerFallBounce' key={index}>{char}</h1>
                    )
                })}
            </div>
        </header>
     );
}