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
                <div className='w-full md:w-1/2 flex flex-col items-center'>
                    <div className='flex relative pt-[10%]'>
                        {learnity.split('').map((char, index) => {
                            if (char === 'a') {
                                return (
                                    <img src={logo} key={index} className='animate-spinSlow w-12 md:w-24' />
                                );
                            }
                            return (
                                <h1
                                className={`text-center text-6xl font-bold text-customBlack animate-headerFallBounce md:text-8xl`}
                                key={index}
                                style={{ animationDuration: `${Math.random() * 2 + 1}s` }}
                                >{char}</h1>
                            )
                        })}
                    </div>
                    <div className='text-center px-[10%] my-[5%] font-semibold'>
                    Learnity este o comunitate democratică de învățare alternativă pentru adolescenți: locul unde aceștia descoperă cine sunt, dezvoltă relații autentice cu ceilalți și au oportunitatea de a-și lua învățarea în propriile mâini.
                    </div>
                    <div className='flex flex-col w-full md:flex-row md:justify-center'>
                        <p className='font-bold text-center text-2xl text-customBlack mb-[5%]'>Contact us: </p>
                        <div className='flex w-full justify-evenly md:justify-center'>
                            <a href='tel:0744117331' className='mx-[1%]'><i className="fa-solid fa-phone fa-2x text-customBlack"></i></a>
                            <a href='' className='mx-[1%]'><i className="fa-solid fa-envelope fa-2x text-customBlack"></i></a>
                            <a href='https://www.instagram.com/learnityro/' className='mx-[1%]'><i className="fa-brands fa-instagram fa-2x text-customBlack"></i></a>
                            <a href='https://www.facebook.com/learnity' className='mx-[1%]'><i className="fa-brands fa-facebook fa-2x text-customBlack"></i></a>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2'>
                    titirez 3d
                </div>
            </div>
        </header>
     );
}