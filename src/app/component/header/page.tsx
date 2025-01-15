"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';


export default function Header() {

  return (
    <motion.header className="flex items-center font-sans justify-between bg-black px-36 py-3 shadow-md rounded-full mx-10 my-6"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      // whileHover={{ scale: 1.006 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}>
      <div className="flex justify-center items-center space-x-4 text-white text-lg  ">
        <Link href="/" className='px-6 hover:text-gray-300 transition'>
          Home
        </Link>
        <Link href="/about" className='px-6 hover:text-gray-300 transition'>
          About
        </Link>
      </div>

      <motion.div className="flex justify-center text-white">
        <img
          src="/header.png" // Replace with your image path
          alt="Logo"
          className="h-12 w-auto object-cover"
        />
      </motion.div>

      <div className="flex space-x-4 text-white text-lg">
        <Link href="/project" className='px-6 hover:text-gray-300 transition'>
            Projects
        </Link>
        {/* Open PDF in a new tab */}
        <Link href="/resume.pdf" target="_blank" className='px-6 hover:text-gray-300 transition'>
            Resume
        </Link>
      </div>
    </motion.header>
  );
};
