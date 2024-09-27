import React from 'react';
import { Rules } from './components/Rules/Rules';
import { RulesContextProvider } from '../../context/Rules/RulesContext';
import AboutUs from './components/AboutUs/AboutUs';

export const About = () => {
    return ( 
        <main className='bg-customWhite'>
            <AboutUs />
            <RulesContextProvider>
                <Rules />
            </RulesContextProvider>
        </main>
    );
}