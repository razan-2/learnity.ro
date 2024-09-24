import React from 'react';
import { Rules } from './Rules/Rules';
import { RulesContextProvider } from '../../context/Rules/RulesContext';

export const About = () => {
    return ( 
        <main className='bg-customWhite'>
            <RulesContextProvider>
                <Rules />
            </RulesContextProvider>
            about us
        </main>
    );
}