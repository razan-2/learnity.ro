import React, { useContext } from 'react';
import { RulesContext } from '../../../context/Rules/RulesContext';
// import logo from '../../../assets/logo/logo.svg'

export const Rules = () => {
    const { rules } = useContext(RulesContext);
    return ( 
        <div className="w-dvw flex flex-col bg-[url('./images/endless-constellation.svg')]">
            <div className='flex flex-col items-center'>
                <div className='flex'>
                    <h1>Our Rules</h1><p>inside</p>
                </div>
                <img src='' alt='logo' className='w-[50%]' />
            </div>
            <div>
                {rules.map((rule) => {
                    return (
                        <div key={rules.indexOf(rule)} className='border-t-4 rounded-t-full border-customOrange flex item-align'>
                            <div className='w-[20%]'>
                                <h1 className={`${(rules.indexOf(rule)+1)%2==0 ? 'border-customOrange border-4 bg-customWhite text-customBlack' : 'bg-customOrange text-customWhite' } rounded-full text-6xl`}>{rules.indexOf(rule)+1}</h1>
                            </div>
                            <div className='p-[4%]'>
                                {rule}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}