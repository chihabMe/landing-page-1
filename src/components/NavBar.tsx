import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Explicitly set isOpen to false to close the menu
  };

  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">MySite</a>
        <div className="hidden md:flex items-center">
          {/* Desktop Navigation Links */}
          <nav className="flex space-x-4">
            <a href="/" className="text-white hover:text-gray-200 px-3 py-2 rounded-md font-medium">Home</a>
            <a href="/about" className="text-white hover:text-gray-200 px-3 py-2 rounded-md font-medium">About</a>
            <a href="/contact" className="text-white hover:text-gray-200 px-3 py-2 rounded-md font-medium">Contact</a>
          </nav>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        <nav className={`md:hidden absolute top-0 left-0 w-full h-screen bg-blue-500 text-white flex flex-col justify-center items-center ${isOpen ? 'block' : 'hidden'}`}>
          {/* Add a close button to the top of the menu */}
          <button onClick={closeMenu} className="absolute top-4 right-4 focus:outline-none">
            <X className="h-6 w-6" />
          </button>
          <motion.a href="/" className="block my-4" whileHover={{ scale: 1.1 }} activeClassName="font-bold">
            Home
          </motion.a>
          <motion.a href="/about" className="block my-4" whileHover={{ scale: 1.1 }} activeClassName="font-bold">
            About
          </motion.a>
          <motion.a href="/contact" className="block my-4" whileHover={{ scale: 1.1 }} activeClassName="font-bold">
            Contact
          </motion.a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
