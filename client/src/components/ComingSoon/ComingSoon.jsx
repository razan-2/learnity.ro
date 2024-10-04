import React, { useState, useEffect } from 'react';

const Bubble = ({ color, size, position }) => (
  <div 
    className="absolute rounded-full opacity-20 transition-all duration-[3000ms] ease-in-out"
    style={{
      backgroundColor: color,
      width: size,
      height: size,
      left: position.x,
      top: position.y,
    }}
  />
);

const ComingSoon = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const colors = ['#F8A12E', '#05be9e', '#2f2f27'];
    const createBubble = () => ({
      id: Math.random(),
      color: colors[Math.floor(Math.random() * colors.length)],
      size: `${Math.random() * 100 + 50}px`,
      position: {
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
      },
    });

    // Initialize bubbles
    setBubbles(Array(15).fill().map(createBubble));

    const interval = setInterval(() => {
      setBubbles(prevBubbles => 
        prevBubbles.map(bubble => ({
          ...bubble,
          position: {
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
          },
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#F0E6DD] flex items-center justify-center overflow-hidden relative">
      {bubbles.map((bubble) => (
        <Bubble 
          key={bubble.id} 
          color={bubble.color} 
          size={bubble.size} 
          position={bubble.position || { x: '0%', y: '0%' }} 
        />
      ))}
      
      <div className="z-10 text-center">
        <h1 className="text-6xl font-bold text-[#2f2f27] mb-6">
          Coming Soon
        </h1>
        <p className="text-xl text-[#05be9e] mb-8">
          We're working on something exciting!
        </p>
        <button 
          className="bg-[#F8A12E] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#05be9e] transition-colors duration-300 transform hover:scale-105"
        >
          Notify Me
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;