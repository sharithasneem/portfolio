"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      className="flex items-center font-sans justify-between bg-black px-6 py-3 shadow-md rounded-full mx-4 my-6
        sm:px-20  sm:mx-10 sm:my-6" 
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Left-side logo for smaller screens (hidden on larger screens) */}
      <motion.div className="flex justify-start md2:hidden">
        <img
          src="/header.png"
          alt="Logo"
          className="w-28 h-auto sm:w-32 sm:h-auto md:w-40 md:h-auto" // Responsive width and height
        />
      </motion.div>

      {/* Desktop navigation links (hidden for md2 and below) */}
      <div className="hidden md2:flex justify-center items-center space-x-4 text-white text-sm sm:text-lg md:text-xl">
        <Link href="/" className='px-6 hover:text-gray-300 transition'>
          Home
        </Link>
        <Link href="/about" className='px-6 hover:text-gray-300 transition'>
          About
        </Link>
      </div>

      {/* Centered logo for larger screens (hidden for md2 and below) */}
      <motion.div className="hidden md2:flex justify-center text-white">
        <img
          src="/header.png"
          alt="Logo"
          className="w-28 h-auto sm:w-32 sm:h-auto md:w-40 md:h-auto" // Responsive width and height
        />
      </motion.div>

      {/* Desktop navigation links (hidden for md2 and below) */}
      <div className="hidden md2:flex space-x-4 text-white text-sm sm:text-lg md:text-xl">
        <Link href="/project" className='px-6 hover:text-gray-300 transition'>
          Projects
        </Link>
        <Link href="/resume.pdf" target="_blank" className='px-6 hover:text-gray-300 transition'>
          Resume
        </Link>
      </div>

      {/* Hamburger menu for screens <= 772px */}
      <div className="md2:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-20 my-2 p-1 left-4 right-4 bg-black rounded-lg shadow-lg z-50 text-white text-lg flex flex-col space-y-4 py-4 px-6"
          >
            <Link
              href="/"
              className="hover:text-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/project"
              className="hover:text-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="hover:text-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>

    </motion.header>
  );
}
