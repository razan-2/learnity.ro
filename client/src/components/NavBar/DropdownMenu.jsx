import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Playground', path: '/playground' },
  { name: 'Guided Learning', path: '/guided-learning' },
  { name: 'Donate', path: '/doneaza' },
];

export default function DropdownMenu({ isOpen, setIsOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 mt-2 w-48 bg-[#2f2f27] rounded-md shadow-lg py-1 z-10"
        >
          {menuItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.path}
              className="block px-4 py-2 text-sm text-[#F0E6DD] hover:bg-[#F8A12E] hover:text-[#2f2f27] transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}