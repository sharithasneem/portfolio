"use client"
import { motion } from 'framer-motion';
import { Space } from 'lucide-react';

export default function Hero() {

    return (
        <div >
            <div className="flex flex-col font-sans w-full md:flex-row h-[90vh] md:space-x-6 sm:px-16 sm:flex-row">
                <motion.div className="flex-1 "
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    // whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}>
                    <img
                        src="/hey3.png"
                        alt="Hero Image"
                        className="h-full w-auto object-contain rounded-lg"
                    />
                </motion.div>
                <div className="flex-1 md:text-left my-16 ">
                    <div className="mb-[30vh]">
                        <motion.h1
                            className="text-3xl flex items-center md:text-4xl font-medium text-gray-800 space-x-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >                            <img
                                src="/hey 2.png"
                                alt="Hero Image"
                                className="w-24 object-contain rounded-lg"
                            />
                            I’m Shariba Thasneem,
                        </motion.h1>

                        <motion.p
                            className="mt-4 ml-2 mr-28 text-gray-600 text-sm md:text-base"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        >
                            An enthusiastic professional specialized in <span className="font-bold">React Full-Stack</span> development and <span className="font-bold">UX Design</span>, who loves solving complex problems with creativity and innovation.
                        </motion.p>

                    </div>
                    <motion.div className="flex flex-1 w-[35vw] justify-end flex-col"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}>
                        <img
                            src="/arrow.png"
                            alt="Hero Image"
                            className="h-10 w-auto object-contain rounded-lg"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

