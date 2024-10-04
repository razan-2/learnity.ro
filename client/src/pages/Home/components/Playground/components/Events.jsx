import React, { useContext } from 'react';
import Card from '../../../../../components/Card/Card';
import { EventsContext } from '../../../../../context/Events/EventsContext';

const Events = () => {
    const { events } = useContext(EventsContext);
    const playgroundEvents = events.filter((event) => event.type == 'Playground');
    console.log(playgroundEvents);
    return (  
        <div className='flex flex-col items-center justify-around md:flex-row '>
            {playgroundEvents.map((event, index) => {
                return (
                    <Card name={event.name} date={event.date} description={event.description} key={index} />
                )
            })}
        </div>
    );
}
 
export default Events;