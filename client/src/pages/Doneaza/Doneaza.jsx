import React from 'react'
import logo from '../../assets/logo/logo.svg';

const Frist = () => {
    return (
        <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2f2f27] mb-4">Ajută Learnity</h1>
          <h2 className="text-xl md:text-2xl text-[#2f2f27] mb-6">Ajută-ne să ducem proiectul mai departe, către câți mai multi elevi!</h2>
          
          <div className="bg-[#05be9e] bg-opacity-10 rounded-xl p-6 mb-8">
            <p className="text-lg text-[#2f2f27]">
              Fiecare donație contribuie la creearea unor noi cursuri și experiențe de învățare.
              Ajută la dezvoltarea fiecărui elev.
            </p>
          </div>
        </div>
    )
}

const DonationPage = () => {
  return (
    <div className="min-h-screen bg-[#F0E6DD] flex items-center justify-center p-4">
      <div className="max-w-3xl w-full relative">
        {/* Decorative elements */}
        <div className="absolute -top-16 -left-16 w-32 h-32 bg-[#F8A12E] rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-[#05be9e] rounded-full opacity-50 animate-pulse"></div>
        
        <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12 overflow-hidden">
          {/* Playful shape */}
          <svg className="absolute top-0 right-0 w-40 h-40 text-[#F8A12E] opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M44.9,-76.2C58.2,-69.3,69.2,-57.4,78.1,-43.7C87,-30,93.8,-15,94.3,0.3C94.8,15.6,89,31.2,80.1,44.9C71.2,58.6,59.2,70.4,45.3,77.7C31.4,85,15.7,87.9,0.6,86.9C-14.5,85.9,-29,81,-42.5,73.5C-56,66,-68.5,55.8,-76.3,42.8C-84.1,29.8,-87.3,14.9,-87.1,0.1C-86.9,-14.7,-83.4,-29.4,-75.7,-41.8C-68,-54.2,-56.1,-64.3,-42.8,-71.1C-29.5,-77.9,-14.7,-81.4,0.8,-82.7C16.3,-84,32.6,-83.1,44.9,-76.2Z" transform="translate(100 100)" />
          </svg>
          <Frist />
          
          <button className="bg-[#05be9e] hover:bg-[#04a78c] text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#05be9e] focus:ring-opacity-50">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default DonationPage