import React from 'react';
import logo from './assets/line.svg';
import { Link } from 'react-router-dom';
import RedirectButton from '../../../../components/RedirectButton/RedirectButton';

export const About = () => {
    return (  
        <div className='bg-customBlack'>
            <div className='w-full pt-[2%]'>
                <h1 className='text-customOrange text-6xl text-center font-bold'>~ About us ~</h1>
                <div className='flex justify-between items-center'>
                    <img src={logo} alt='line' className='left-0'/>
                    <p className='text-2xl text-customWhite text-center px-[4%]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <img src={logo} alt='line' className='right-0'/>
                </div>
                <div className='flex justify-center'>
                    <Link to='/about-us'>
                        <RedirectButton text='Read more' />
                    </Link>
                </div>
            </div>
        </div>
    );
}