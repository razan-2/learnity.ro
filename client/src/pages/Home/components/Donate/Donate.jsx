import React from 'react';
import { Link } from 'react-router-dom';
import RedirectButton from '../../../../components/RedirectButton/RedirectButton';

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
                        <RedirectButton text='Get started' />
                    </Link>
                </section>
            </div>
        </div>
     );
}