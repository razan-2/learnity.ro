import React, { useContext } from 'react';
import Card from '../../../components/Card/Card';
import {EventsContext} from '../../../context/Events/EventsContext';
import Title from './Titles';

const Events = ({ from }) => {
    const { playgroundEvents } = useContext(EventsContext);
    const categoryEvents = playgroundEvents.filter((event) => event.from == from);
    return (  
        <div className='pb-10 bg-customWhite text-center'>
            <Title text={from} />
            <div className='flex flex-col justify-evenly md:flex-row'>
                {categoryEvents.map((event, index) => (
                    <Card name={event.name} description={event.description} date={event.date} key={index} photo={event.photos} />
                ))}
            </div>
        </div>
    );
}
 
export default Events;