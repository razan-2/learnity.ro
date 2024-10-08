import React, { useState } from 'react';
import FlipCard from '../../components/Card/Card';
import { useContext } from 'react';
import { EventsContext } from '../../context/Events/EventsContext';
import Parts from './components/Parts';
import roots from '../Home/components/Playground/assets/roots.svg';
import fireplace from '../Home/components/Playground/assets/fireplace.svg';
import tower from '../Home/components/Playground/assets/tower.svg';
import arena from '../Home/components/Playground/assets/arena.svg';
import Presentation from './components/Presentation';

const Playground = () => {
    // const { events } = useContext(EventsContext);
    // const playgroundEvents = events.filter((event) => event.type == 'Playground');
    const [parts, setParts] = useState([
        {
            name: 'The Arena',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            vector: arena,
        },
        {
            name: 'The Fireplace',
            text: 'Mattis odio a magnis sit etiam. Viverra odio turpis vehicula integer viverra tellus. Suspendisse nascetur sollicitudin cubilia arcu ad sapien libero posuere sit. Non pharetra elit velit ut lorem urna cursus. Elementum cursus bibendum fringilla sed magna. Ipsum pretium facilisi nisi; libero quis a praesent lorem. Viverra habitant orci habitasse; facilisi metus habitasse justo elit.',
            vector: fireplace
        },
        {
            name: 'The Tower',
            text: 'Sem vivamus tempor aliquet efficitur eros. Rutrum sagittis proin condimentum diam cursus viverra dis primis. Congue cubilia consectetur dignissim eleifend lectus. Nulla interdum himenaeos convallis dignissim odio ipsum. Nam nulla semper vestibulum porta fames cubilia imperdiet. Ante tellus pharetra nisi fames auctor feugiat enim. Blandit aliquet penatibus laoreet ullamcorper enim interdum vitae cursus. Elementum mus metus donec cubilia purus aenean! Bibendum sollicitudin arcu primis malesuada; bibendum gravida tincidunt aptent quis.',
            vector: tower,
        },
        {
            name: 'The Roots',
            text: 'Maecenas euismod gravida tellus elementum magna. Tempor sollicitudin ad massa himenaeos odio. Curabitur ridiculus taciti neque nulla purus tortor ipsum placerat quam. Maecenas congue pulvinar quis, aliquam auctor interdum. Hendrerit montes pharetra interdum accumsan potenti. Massa aliquam posuere magna rhoncus lobortis ipsum fermentum aliquam. Lobortis facilisi rutrum litora mus pulvinar proin erat ut. Turpis ac mattis pellentesque, parturient rhoncus primis? Laoreet natoque curabitur ante nunc elit nulla luctus senectus. Nullam platea lobortis pretium class arcu lectus.',
            vector: roots,
        }
    ])
    return (  
        <div className=''>
            <Presentation />
            {parts.map((part, index) => {
                return (
                    <Parts text={part.text} name={part.name} vector={part.vector} key={index} direction={index%2==0 ? true : false} />
                )
            })}
        </div>
    );
}
 
export default Playground;