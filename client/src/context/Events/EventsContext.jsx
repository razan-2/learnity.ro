import React, { createContext, useState, useEffect } from 'react';

export const EventsContext = createContext();

export const EventsContextProvider = (props) => {
    const [events, setEvents] = useState([
        {
            name: 'Catalyst',
            description: 'Un joc de societate. Alegem atacuri, negociem, iar la final castiga tot Societatea Secreta',
            driver: 'Răzvan',
            date: 'crr pow',
            type: 'Playground',
            photos: [],
        },
        {
            name: 'Karaoke Night',
            description: 'Un joc de societate. Alegem atacuri, negociem, iar la final castiga tot Societatea Secreta',
            driver: 'Gabi',
            date: 'bow',
            type: 'Playground',
            photos: [],
        },
        {
            name: 'Um, actually?',
            description: 'Un joc de societate. Alegem atacuri, negociem, iar la final castiga tot Societatea Secreta',
            driver: 'Gabi',
            date: 'learnity de ce ma intrebi',
            type: 'Guided',
            photos: [],
        },
        {
            name: 'Trivia Night',
            description: 'Un joc de societate. Alegem atacuri, negociem, iar la final castiga tot Societatea Secreta',
            driver: 'Gabi',
            date: 'haz',
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