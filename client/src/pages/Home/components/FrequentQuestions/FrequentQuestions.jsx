import React, { useContext, useState, useEffect, useRef } from 'react';
import { FrequentQuestionsContext } from '../../../../context/FrequentQuestions/FrequentQuestionsContext';
import { Link } from 'react-router-dom';
import image from './images/image.jpg';

export const FrequentQuestions = () => {
    const { questions } = useContext(FrequentQuestionsContext);

    return ( 
        <div>
            {questions.sort(function(){ return 0.5 - Math.random() }).slice(0, 5).map((question, index) => {
                return (
                    <div key={question.id} className={`flex justify-center mb-[2%]`}>
                        <div className={`flex w-2/5 justify-between p-[5%] bg-customLightOrange`}>
                            <h1 className='font-light text-4xl'>{index+1}</h1>
                            <p className=''>{question.question}</p>
                        </div>
                        <div className={`w-1/5 bg-transparent p-[1%] border-customLightOrange border-4 rounded-full`}>
                            <img src={image} alt="" className='rounded-full' />
                        </div>
                        <div className={`flex flex-col w-2/5 p-[5%]`}>
                            <p>{question.answer}</p>
                            <Link to={question.to}>{question.about}</Link>
                        </div>
                    </div>
                )
            })}
        </div>
     );
}