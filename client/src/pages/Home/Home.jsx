import React from 'react';
import {FrequentQuestionsContextProvider} from '../../context/FrequentQuestions/FrequentQuestionsContext.jsx';
import { Donate } from './components/Donate/Donate';
import { Header } from './components/Header/Header';
import { FrequentQuestions } from './components/FrequentQuestions/FrequentQuestions';

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