'use client'
import WhoamI from '../component/whoamI/page'
import StepsGrid from '../component/workSteps/page'
import { motion } from 'framer-motion';
// import ImageGallery from '../component/gallery/page'
export default function About() {
    const text1 = "It's so nice to"
    const text2 = " I'm Shariba Thasneem :)"

    return (
        <div className="flex flex-col  min-h-screen"> {/* Ensures full viewport height */}
            {/* Main container with responsive layout */}
            <div className="flex flex-col-reverse md:flex-row mb-30 w-[90vw] h-full space-y-10 md:space-y-0 md:space-x-10">
                {/* Text Section */}
                <div className="flex flex-wrap flex-col p-8 md:p-20 md:ml-10 w-full md:w-[40vw] space-y-10 items-center md:items-start">
                    {/* Paragraph section */}
                    <motion.div
                        style={{
                            fontFamily: "Playwrite VN",
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-3xl mt-[10vh] md:mt-0 md:text-4xl font-mono text-[#671229] text-center md:text-left"
                    >
                        <p>
                            {text1}  <br />meet you,<br />{text2}
                        </p>
                    </motion.div>

                    {/* Buttons Section */}
                    <motion.div
                        className="flex flex-row w-[30vw] sm:flex-row sm:space-y-0 sm:space-x-5 justify-center md:justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#671229] text-white mr-2 px-6 py-2 sm:px-4 sm:py-1 rounded-md text-center text-lg sm:text-sm"
                        >
                            Resume
                        </a>

                        <button
                            className="bg-white border-2 border-[#671229] text-[#262626] px-6 py-2 sm:px-4 sm:py-1 rounded-md text-center text-lg sm:text-sm"
                            onClick={() => window.location.href = 'https://www.linkedin.com/in/shariba-thasneem-0185781b1/'}
                        >
                            Linkedin
                        </button>
                    </motion.div>
                </div>


                <motion.div
                    className="p-6 flex justify-center items-center md: md:max-w-4xl h-auto mt-4 md:mt-8 w-full md:w-[50vw]"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <img
                        src="/me11.png"
                        alt="Hero Image"
                        className="sm:w-[60vw] w-full h-auto bg-cover bg-center rounded-3xl"
                    />
                </motion.div>


                {/* Image Collage Section */}
                {/* <motion.div
                    className="relative p-6 md:p-8 max-w-full md:max-w-4xl h-auto mt-4 md:mt-8 w-full md:w-[50vw]"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <img
                        src="/me11.png"
                        alt="Hero Image"
                        className=" md:top-1 md:right-28 sm:right-14 w-48 sm:w-80 h-auto bg-cover bg-center rounded-3xl"
                    /> */}
                {/* <img
                        src="/me11.png"
                        alt="Hero Image"
                        className="absolute top-1/4 right-0 md:top-1 md:right-28 sm:right-14 w-48 sm:w-64 h-auto bg-cover bg-center rounded-3xl"
                    /> */}
                {/* <img
                        src="/m2.png"
                        alt="Hero Image"
                        className="absolute top-36 right-1/3 md:bottom-0 md:left-0 w-28 sm:w-40 h-auto bg-cover bg-center"
                    /> */}
                {/* <img
                        src="/me1.png"
                        alt="Hero Image"
                        className="absolute top-20 left-3 w-32 md:top-60 md:left-64 sm:w-32 h-auto bg-cover bg-center"
                    /> */}
                {/* </motion.div> */}
            </div>

            <WhoamI />
            <StepsGrid />
            {/* <ImageGallery /> */}
        </div>
    );
}
