import React, { useContext, useState, useEffect} from 'react';
import { FrequentQuestionsContext } from '../../../../context/FrequentQuestions/FrequentQuestionsContext';
import { Link } from 'react-router-dom';
import image from './images/image.jpg';
import RedirectButton from '../../../../components/RedirectButton/RedirectButton';
import RedirectButton2 from '../../../../components/RedirectButton2/RedirectButton2';

export const FrequentQuestions = () => {
    const { questions } = useContext(FrequentQuestionsContext);

    return ( 
        <div className='w-full flex flex-col bg-customWhite'>
            <div>

            </div>
            <div className='w-full flex flex-col'>
                {questions.sort(function(){ return 0.5 - Math.random() }).slice(0, 5).map((ask, index) => {
                    if ((index+1) % 2 != 0) return (
                        <div className='flex flex-col w-full overflow-hidden mb-[2%] md:flex-row' key={index}>
                            <div className= 'bg-customOrange overflow-hidden rounded-b-full w-full text-center md:w-[60%] md:rounded-r-full md:rounded-bl-none md:flex md:justify-between'>
                                <div>
                                    <p>{index+1}</p>
                                    <p>{ask.question}</p>
                                </div>
                                <div>
                                    <img src={image} alt='image' className='rounded-full md:h-[300px]' />
                                </div>
                            </div>
                            <div className='bg-customWhite w-full text-center md:w-[40%]'>
                                <p>{ask.answer}</p>
                                <Link to={ask.path}><RedirectButton2 text={ask.about}/></Link>
                            </div>
                        </div>
                    )
                    else return (
                        <div key={index} className='flex flex-col w-full overflow-hidden mb-[2%] md:flex-row'>
                            <div className='bg-customOrange rounded-b-full w-full text-center md:w-[40%] md:bg-customWhite md:flex'>
                                <p>{index+1}</p>
                                <p>{ask.question}</p>
                                <img src={image} alt='image' className='visible md:hidden rounded-full left-0' />
                            </div>
                            <div className='bg-customWhite w-full text-center md:w-[60%] md:rounded-l-full md:bg-customOrange md:flex overflow-hidden'>
                                <div>
                                    <img src={image} alt='image' className='max-[768px]:hidden rounded-full left-0 md:h-[300px]' />
                                </div>
                                <div className=''>
                                    <p>{ask.answer}</p>
                                    <Link to={ask.path}><RedirectButton2 text={ask.about}/></Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
     );
}