import React, { createContext, useState } from 'react';
import artaCinematografiei from '../../assets/images/artaCinematografiei.jpg';

export const EventsContext = createContext();

export const EventsContextProvider = (props) => {
    const [events, setEvents] = useState([
        // going to upcoming events, read from the database
    ])

    const [playgroundEvents, setPlaygroundEvents] = useState([
        {
            name: 'Ce spun Learnitașii?',
            description: '',
            date: '',
            type: 'Playground',
            from: 'Evenimente',
            photos: '',
        },
        {
            name: 'Karaoke Night',
            description: '',
            date: '',
            type: 'Playground',
            from: 'Evenimente',
            photos: '',
        },
        {
            name: 'Catalyst',
            description: '',
            date: 'crr pow',
            type: 'Playground',
            from: 'Evenimente',
            photos: '',
        },
        {
            name: 'Limbajul Semnelor',
            description: 'Un joc de societate. Alegem atacuri, negociem, iar la final castiga tot Societatea Secreta',
            date: 'bow',
            type: 'Playground',
            from: 'Cursuri',
            photos: '',
        },
        {
            name: 'Tradiții Libaneze',
            description: '',
            date: 'haz',
            type: 'Playground',
            from: 'Workshop-uri',
            photos: '',
        },
        {
            name: 'Politică la minut',
            description: 'Un joc de societate. Alegem atacuri, negociem, iar la final castiga tot Societatea Secreta',
            date: 'haz',
            type: 'Playground',
            from: 'Workshop-uri',
            photos: '',
        },
        {
            name: 'Arta cinematografiei',
            description: 'Un joc de societate. Alegem atacuri, negociem, iar la final castiga tot Societatea Secreta',
            date: 'haz',
            type: 'Playground',
            from: 'Workshop-uri',
            photos: artaCinematografiei,
        },
        {
            name: 'D&D',
            description: 'Ne întâlnim săptămânal pentru a ne distra împreună, bucurându-ne de jocul de rol Dungeons & Dragons. Fiecare membru al grupului are libertate creativă, astfel că lumea construită ne poate reprezenta pe fiecare. Foc sau gheață, pace sau război, ne aventurăm împreună în această lume fantastică, având grijă unul de celălalt.',
            date: 'haz',
            type: 'Playground',
            from: 'Grupuri Autonome',
            photos: [],
        },
        {
            name: 'Grupul de Foto',
            description: 'Un joc de societate. Alegem atacuri, negociem, iar la final castiga tot Societatea Secreta',
            date: 'haz',
            type: 'Playground',
            from: 'Grupuri Autonome',
            photos: [],
        },
    ])

    const [presentCourses, setPresentCourses] = useState([
        {
            name: 'Alex Necșulescu',
            subject: 'Concepte din psihologie explicate si aplicate pe viața tinerilor',
            longdescription: 'Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.',
            course: 'Psihologie Aplicată',
            type: 'Guided',
            from: 'Course',
            photos: '/placeholder.svg?height=200&width=200',
        },
        {
            name: 'Cristi Chirnogeanul',
            subject: 'Diferiți antreprenori din diferite domenii, ajutând tinerii să aducă valoare.',
            longDescription: 'Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.',
            course: 'Povești despre Antreprenoriat',
            type: 'Guided',
            from: 'Course',
            photos: '/placeholder.svg?height=200&width=200',
        },
        {
            name: 'Cristi Chirnogeanul',
            subject: 'Diferiți antreprenori din diferite domenii, ajutând tinerii să aducă valoare.',
            longDescription: 'Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.',
            course: 'Pastila de Arta',
            type: 'Guided',
            from: 'Course',
            photos: '/placeholder.svg?height=200&width=200',
        },
        {
            name: 'Cristi Chirnogeanul',
            subject: 'Diferiți antreprenori din diferite domenii, ajutând tinerii să aducă valoare.',
            longDescription: 'Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.',
            course: 'Meet your Inner Self',
            type: 'Guided',
            from: 'Course',
            photos: '/placeholder.svg?height=200&width=200',
        },
        {
            name: '...',
            subject: 'Relațiile internaționale explicate pe gustul tinerilor',
            longDescription: 'Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.',
            course: 'Comunicare',
            type: 'Guided',
            from: 'Course',
            photos: '/placeholder.svg?height=200&width=200',
        },
    ])

    const [exampleCourses, setExampleCourses] = useState([
        {
            name: 'Rebecca',
            subject: 'Relațiile internaționale explicate pe gustul tinerilor',
            longDescription: 'Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.',
            course: 'Relații internaționale',
            type: 'Guided',
            from: 'Course',
            photos: '/placeholder.svg?height=200&width=200',
        },
        {
            name: 'Rebecca',
            subject: 'Relațiile internaționale explicate pe gustul tinerilor',
            longDescription: 'Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.',
            course: 'Relații internaționale',
            type: 'Guided',
            from: 'Course',
            photos: '/placeholder.svg?height=200&width=200',
        },
        {
            name: 'Rebecca',
            subject: 'Relațiile internaționale explicate pe gustul tinerilor',
            longDescription: 'Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.',
            course: 'Relații internaționale',
            type: 'Guided',
            from: 'Course',
            photos: '/placeholder.svg?height=200&width=200',
        },
        {
            name: 'Rebecca',
            subject: 'Relațiile internaționale explicate pe gustul tinerilor',
            longDescription: 'Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.Master the art of creating responsive and dynamic websites.',
            course: 'Relații internaționale',
            type: 'Guided',
            from: 'Course',
            photos: '/placeholder.svg?height=200&width=200',
        },
    ])

    return ( 
        <EventsContext.Provider value={{exampleCourses, presentCourses, playgroundEvents}}>
            {props.children}
        </EventsContext.Provider>
     );
}