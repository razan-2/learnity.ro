import React, { createContext, useState, useEffect } from 'react';

const EventsContext = createContext();

export const EventsContextProvider = (props) => {
    const [events, setEvents] = useState([
        {
            name: 'Catalyst',
            description: 'Un joc de societate. Alegem atacuri, negociem, iar la final castiga tot Societatea Secreta',
            driver: 'Răzvan',
            date: '',
            type: 'Playground',
            photos: [],
        }
    ])

    useEffect(() => {
        // read the event list from the database
    })

    return ( 
        <EventsContext.Provider value={{events}}>
            {props.children}
        </EventsContext.Provider>
     );
}