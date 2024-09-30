import React from 'react';
import { Link } from 'react-router-dom';
import RedirectButton from '../../../../components/RedirectButton/RedirectButton';

export const Donate = () => {
    return ( 
        <div className='flex flex-col w-full'>
            <div className='mb-[3%]'>
                <h1 className='text-6xl text-center text-customBlack'>Doneaza</h1>
            </div>
            <div className={`flex flex-col pb-20 md:flex-row items-center w-full`}>
                <section className='w-full md:w-1/2 text-center px-[10%] pb-[5%]'>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Purus aliquet efficitur diam fermentum; rutrum fringilla praesent. Nibh natoque elementum maximus bibendum rhoncus varius. Aliquam magna vel molestie purus arcu et. Praesent posuere mauris purus nisi cursus. Dis nec posuere lorem a metus facilisis dui.</p>
                </section>
                <section className='w-full md:w-1/2 flex justify-center'>
                    <Link to='/donate'>
                        <RedirectButton text='Get started' />
                    </Link>
                </section>
            </div>
        </div>
     );
}