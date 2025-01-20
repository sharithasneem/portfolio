"use client"
import { motion } from 'framer-motion';

export default function Hero() {
    const name = "I’m Shariba Thasneem,"
    return (
        <div>
            <div className="flex flex-col font-sans w-full md:flex-row h-auto md:space-x-6 sm:px-16 sm:flex-row mb-12 sm:mb-16  ">
                <motion.div className="flex-1"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}>
                    <div className="relative mt-[23vh] mb-6 md:mt-0 md:mb-0 ">
                        {/* Default Image for larger screens */}
                        <img
                            src="/hey3.png"
                            alt="Hero Image"
                            loading="lazy"
                            className="hidden sm:block w-auto max-h-[95vh] object-contain rounded-lg"
                        />
                        {/* Alternative Image for small screens */}
                        <img
                            src="/hey.png"
                            loading="lazy"
                            alt="Hero Image for Small Screens"
                            className="block sm:hidden w-full max-h-[100vh]  object-contain rounded-lg"
                        />
                    </div>
                </motion.div>
                <div className="flex-1 md:text-left mx-4 my-10  sm:my-16 sm:px-6"> {/* Added margin on left and right */}
                    <div className="mb-[15vh] sm:mb-[10vh] "> {/* Adjusted vertical margin */}
                        <motion.h1
                            className="text-2xl flex items-center md:text-4xl font-medium text-gray-800 space-x-4 sm:text-2xl "
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {/* Image hidden on small screens */}
                            <img
                                src="/hey 2.png"
                                alt="Hero Image"
                                className="w-24 object-contain rounded-lg hidden sm:block"
                            />
                            {name}
                        </motion.h1>

                        <motion.p
                            className="mt-4 mb-36  text-gray-600 text-lg md:text-base "
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        >
                            An enthusiastic professional specialized in <span className="font-bold">React Full-Stack</span> development and <span className="font-bold">UX Design</span>, who loves solving complex problems with creativity and innovation.
                        </motion.p>
                    </div>
                    <motion.div className="flex flex-1 w-[95vw] justify-center sm:justify-end flex-col md:w-[50vw] "
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}>
                        <img
                            src="/arrow.png"
                            alt="Hero Image"
                            className="h-10 w-auto object-contain rounded-lg sm:h-6 md:h-10 lg:h-12 "
                        />
                    </motion.div>


                </div>
            </div>
        </div>
    );
};