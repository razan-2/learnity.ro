import React from 'react';
import { Teachers } from './components/Teachers';
import Presentation from './components/Presentation';

export const Guided = () => {
    return (  
        <div>
            <Presentation />
            <Teachers />
        </div>
    );
}