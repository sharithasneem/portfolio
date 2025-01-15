// components/Footer.js
'use client'
import Link from 'next/link';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
export default function Footer() {
    const footerRef = useRef(null);
    const isInView = useInView(footerRef, { once: true }); // Trigger animation only once when in view
    const text = "Thanks for reaching the bottom of this page. If you like what you see, let's connect and build something together!"
    return (
        <motion.footer className="bg-[#671229] text-white py-6 mt-[15vh] h-[40vh] flex justify-center items-center "
            ref={footerRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* First Div: P Tag */}
                <div className="mb-4 md:mb-0 w-[35vw]">
                    <p className="text-sm md:text-base font-sans" >
                        {text}
                    </p>
                </div>

                {/* Second Div: Links with Arrows */}
                <div className="flex space-x-6 font-sans">
                    <Link
                        href="https://www.linkedin.com/in/shariba-thasneem-0185781b1/"
                        className="flex items-center text-sm md:text-base hover:text-gray-400 transition"
                    >
                        Linkedin
                        <GoArrowUpRight size={14} className='ml-1' />
                    </Link>
                    <Link
                        href="https://www.instagram.com/_merged_colours?igsh=ZXV0czlpN2wzYjVu"
                        className="flex items-center text-sm md:text-base hover:text-gray-400 transition"
                    >
                        Instagram
                        <GoArrowUpRight size={14} className='ml-1' />
                    </Link>
                    <Link
                        href="mailto:sharibathasneem27gmail.com" // Replace with your email
                        className="flex items-center text-sm md:text-base hover:text-gray-400 transition"
                    >
                        Email me
                        <GoArrowUpRight size={14} className='ml-1' />
                    </Link>

                </div>
            </div>
        </motion.footer>
    );
}
