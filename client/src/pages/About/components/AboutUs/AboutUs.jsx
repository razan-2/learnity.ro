import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className='w-full bg-[#F0E6DD] text-[#2f2f27]'>
      <motion.section 
        className='min-h-screen flex flex-col justify-center items-center p-8 relative overflow-hidden'
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <h2 className='text-8xl font-bold text-customOrange mb-8'>Despre Learnity</h2>
        <h3 className='text-4xl font-bold text-customBlue mb-8'>Cum a început?</h3>
        <div className='flex flex-col md:flex-row items-center justify-center gap-8 mb-8'>
          <motion.div 
            className='w-64 h-64 bg-[#F8A12E] rounded-full overflow-hidden shadow-lg'
            variants={photoVariants}
          >
            <img src="/path-to-your-image1.jpg" alt="Team" className='w-full h-full object-cover' />
          </motion.div>
          <p className='text-xl text-center md:text-left max-w-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <motion.div 
          className='w-20 h-20 bg-[#F8A12E] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-md'
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          1
        </motion.div>
        <svg className="absolute left-0 bottom-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#05be9e" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,234.7C960,235,1056,181,1152,170.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#F8A12E] rounded-full opacity-20 animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#05be9e] rounded-full opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#2f2f27] rounded-full opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      </motion.section>

      <motion.section 
        className='min-h-screen flex flex-col justify-center items-center p-8 bg-[#05be9e] text-white relative overflow-hidden'
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <h2 className='text-5xl font-bold mb-8'>Reforma</h2>
        <div className='flex flex-col md:flex-row-reverse items-center justify-center gap-8 mb-8'>
          <motion.div 
            className='w-64 h-64 bg-[#F8A12E] rounded-lg overflow-hidden transform -rotate-3 shadow-lg'
            variants={photoVariants}
          >
            <img src="/path-to-your-image2.jpg" alt="Mission" className='w-full h-full object-cover' />
          </motion.div>
          <p className='text-xl text-center md:text-left max-w-lg'>
            Orci tortor nunc torquent diam viverra leo mollis velit. Torquent ut donec habitant cubilia hac. Ac bibendum scelerisque praesent pulvinar justo. Scelerisque at elementum primis pellentesque vestibulum non facilisis sed.
          </p>
        </div>
        <motion.div 
          className='w-20 h-20 bg-[#F8A12E] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-md'
          whileHover={{ scale: 1.1, rotate: -360 }}
          transition={{ duration: 0.5 }}
        >
          2
        </motion.div>
        <svg className="absolute left-0 bottom-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#F0E6DD" fillOpacity="1" d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,197.3C672,171,768,149,864,160C960,171,1056,213,1152,224C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </motion.section>

      <motion.section 
        className='min-h-screen flex flex-col justify-center items-center p-8 relative overflow-hidden'
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <h2 className='text-5xl font-bold text-[#05be9e] mb-8'>Cum merge?</h2>
        <div className='flex flex-col md:flex-row items-center justify-center gap-8 mb-8'>
          <p className='text-xl text-center md:text-left max-w-lg'>
            Facilisis ac rutrum nulla eros neque pretium. Sollicitudin luctus magnis etiam elit facilisi potenti semper non nec. Est laoreet parturient nam ex tortor cras. Ajusto volutpat phasellus mi ut urna.
          </p>
          <motion.div 
            className='w-64 h-64 bg-[#F8A12E] rounded-full overflow-hidden transform rotate-3 shadow-lg'
            variants={photoVariants}
          >
            <img src="/path-to-your-image3.jpg" alt="Vision" className='w-full h-full object-cover' />
          </motion.div>
        </div>
        <motion.div 
          className='w-20 h-20 bg-[#F8A12E] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-md'
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          3
        </motion.div>
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 bg-[#F8A12E] rounded-full opacity-20 animate-blob"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#05be9e] rounded-full opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#2f2f27] rounded-full opacity-10 animate-blob animation-delay-4000"></div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;

// <h2 className='text-8xl font-bold text-customOrange mb-8'>Despre Learnity</h2>
// <h3 className='text-4xl font-bold text-customBlue mb-8'>Cum a început?</h3>