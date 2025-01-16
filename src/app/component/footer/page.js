'use client';
import Link from 'next/link';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function Footer() {
    const footerRef = useRef(null);
    const isInView = useInView(footerRef, { once: true }); // Trigger animation only once when in view
    const text = "Thanks for reaching the bottom of this page. If you like what you see, let's connect and build something together!";

    return (
        <motion.footer
            className="bg-[#671229] text-white py-6 mt-[15vh] h-[40vh] flex justify-center items-center"
            ref={footerRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-6">
                {/* First Div: P Tag */}
                <div className="mb-8 md:mb-0 w-full md:w-[50%] lg:w-[40%] text-center md:text-left">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-sans leading-relaxed">
                        {text}
                    </p>
                </div>

                {/* Second Div: Links with Arrows */}
                <div className="flex space-x-6 font-sans">
                    <Link
                        href="https://www.linkedin.com/in/shariba-thasneem-0185781b1/"
                        className="flex items-center text-xs sm:text-sm md:text-base lg:text-lg hover:text-gray-400 transition"
                    >
                        Linkedin
                        <GoArrowUpRight size={14} className="ml-1" />
                    </Link>
                    <Link
                        href="https://www.instagram.com/_merged_colours?igsh=ZXV0czlpN2wzYjVu"
                        className="flex items-center text-xs sm:text-sm md:text-base lg:text-lg hover:text-gray-400 transition"
                    >
                        Instagram
                        <GoArrowUpRight size={14} className="ml-1" />
                    </Link>
                    <Link
                        href="mailto:sharibathasneem27gmail.com"
                        className="flex items-center text-xs sm:text-sm md:text-base lg:text-lg hover:text-gray-400 transition"
                    >
                        Email me
                        <GoArrowUpRight size={14} className="ml-1" />
                    </Link>
                </div>
            </div>
        </motion.footer>
    );
}
