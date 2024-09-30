import React from 'react';
import '../assets/Parts.css';

const Parts = ({text, vector, name, direction}) => {
    // direction true: text => image, direction false: image => text
    if (direction) {
        return (
            <div className='w-full overflow-hidden flex box bg-customLightOrange py-[2%] h-[50vh]'>
                <div className='flex flex-col w-2/3'>
                    <h1>{name}</h1>
                    <p>{text}</p>
                </div>
                <div className='w-1/3'>
                    <img src={vector} alt='photo-about' />
                </div>
            </div>
        )
    } else {
        return (
            <div className='w-full overflow-hidden flex py-[2%] h-[50vh]'>
                <div className='w-1/3'>
                    <img src={vector} alt='photo-about' />
                </div>
                <div className='flex flex-col w-2/3'>
                    <h1>{name}</h1>
                    <p>{text}</p>
                </div>
            </div>
        )
    }
}
 
export default Parts;