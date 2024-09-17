import React from 'react';
import { FrequentQuestionsContextProvider } from '../../context/FrequentQuestions/FrequentQuestionsContext';
import { FrequentQuestions } from './FrequentQuestions/FrequentQuestions';

export const Home = () => {
    return ( 
        <main className='bg-customWhite min-h-screen flex flex-col'>
            <FrequentQuestionsContextProvider>
                <FrequentQuestions />
            </FrequentQuestionsContextProvider>
        </main>
    );
}