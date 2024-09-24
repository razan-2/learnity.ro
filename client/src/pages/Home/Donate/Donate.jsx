import React from 'react';
import { Link } from 'react-router-dom';

export const Donate = () => {
    return ( 
        <div className='flex flex-col py-[2%] px-[5%]'>
            <div className='py-[2%] px-[5%] sm:px-[1%]'>
                <h1 className='text-6xl text-center text-customBlack'>Doneaza</h1>
            </div>
            <div className={`flex flex-row`}>
                <section className='w-1/2 text-center'>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Purus aliquet efficitur diam fermentum; rutrum fringilla praesent. Nibh natoque elementum maximus bibendum rhoncus varius. Aliquam magna vel molestie purus arcu et. Praesent posuere mauris purus nisi cursus. Dis nec posuere lorem a metus facilisis dui.</p>
                </section>
                <section className='w-1/2'>
                    <Link to='/donate'>
                        <button
                        className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
                        >
                            <span
                                className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                            >
                                <span
                                className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                ></span>
                            </span>
                            <span
                                className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                            >
                                <span
                                className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                ></span>
                            </span>
                            <span
                                className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
                            ></span>
                            <span
                                className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                            >Get Started
                            </span>
                        </button>
                    </Link>
                </section>
            </div>
        </div>
     );
}