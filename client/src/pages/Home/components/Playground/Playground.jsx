import React, { useState } from 'react';
import Parts from '../../../Playground/components/Parts.jsx'
import Events from './components/Events.jsx';
import roots from './assets/roots.svg';
import fireplace from './assets/fireplace.svg';
import tower from './assets/tower.svg';
import arena from './assets/arena.svg';
import Presentation from './components/Presentation.jsx';

export const Playground = () => {
    return (  
        <div className=''>
            <Presentation />
            <Events />
        </div>
    );
}