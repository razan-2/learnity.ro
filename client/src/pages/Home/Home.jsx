import React from 'react';
import { FrequentQuestionsContextProvider } from '../../context/FrequentQuestions/FrequentQuestionsContext';
import { FrequentQuestions } from './FrequentQuestions/FrequentQuestions';
import { Donate } from './Donate/Donate';
import { Header } from './Header/Header';

export const Home = () => {
    return ( 
        <main className='bg-customWhite min-h-screen flex flex-col'>
            <Header />
            <FrequentQuestionsContextProvider>
                <FrequentQuestions />
            </FrequentQuestionsContextProvider>
            <Donate />
        </main>
    );
}