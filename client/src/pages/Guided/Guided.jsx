import React from 'react';
import { Teachers } from '../Home/components/Guided/components/Teachers';
import Details from './components/Details';
import Courses from './components/Courses';

const Guided = () => {
    return (  
        <div>
            <Details />
            <Courses />
            <Teachers />
        </div>
    );
}
 
export default Guided;