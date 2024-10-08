import React, { useRef, useState } from 'react';
import logo from '../../assets/logo/logo.svg';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null)
    const menu = ref.current;

    return (
        <nav className={`sticky top-0 left-0 w-[100%] z-20 shadow-2xl shadow-customBlack-500/20 bg-customBlack flex flex-col`}>
            <div className='w-full flex justify-between'>
                <div className="basis-1/3 flex justify-start">
                    <img src={logo} alt="logo" width={200} className='ml-[5%]'/>
                </div>
                <div className="max-[700px]:hidden basis-1/3 flex justify-around items-center flex-none ">
                    <Link to='/' className='p-[4%]'><i className="fa-solid fa-house fa-4x flex text-customWhite"></i></Link>
                    <Link to='/upcoming-events' className='p-[4%]'><i className="fa-solid fa-clock fa-4x text-customWhite"></i></Link>
                    <Link to='/account' className='p-[4%]'><i className="fa-solid fa-user fa-4x text-customWhite"></i></Link>
                    <Link to='/news' className='p-[4%]'><i className="fa-solid fa-envelope fa-4x text-customWhite"></i></Link>
                </div>
                <div className="basis-1/3 flex justify-end items-center shrink">
                    <div className='mr-[5%]'> 
                        <label className="flex flex-col gap-2 w-8">
                        <input className="peer hidden" ref={ref} type="checkbox" onChange={() => setVisible(!visible)} />
                        <div
                            className="rounded-2xl h-[3px] w-1/2 bg-customWhite duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"
                        ></div>
                        <div
                            className="rounded-2xl h-[3px] w-full bg-customWhite duration-500 peer-checked:-rotate-45"
                        ></div>
                        <div
                            className="rounded-2xl h-[3px] w-1/2 bg-customWhite duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"
                        ></div>
                        </label>
                    </div>
                </div>
            </div>
            <div className={`transition-all duration-700 overflow-hidden ${visible ? 'max-h-[200px]' : 'max-h-0'} flex flex-col md:flex-row text-center justify-around`}>
                <Link to='/' className="text-2xl text-customWhite" onClick={() => {menu.checked = false; setVisible(!visible)}}>Home</Link>
                <Link to='/about-us' className="text-2xl text-customWhite" onClick={() => {menu.checked = false; setVisible(!visible)}}>About</Link>
                <Link to='/playground' className="text-2xl text-customWhite" onClick={() => {menu.checked = false; setVisible(!visible)}}>Playground</Link>
                <Link to='/guided-learning' className="text-2xl text-customWhite" onClick={() => {menu.checked = false; setVisible(!visible)}}>Guided</Link>
                <Link to='/doneaza' className="text-2xl text-customWhite" onClick={() => {menu.checked = false; setVisible(!visible)}}>Doneaza</Link>
            </div>
        </nav>
    );
}
