
'use client'
import WhoamI from '../component/whoamI/page'
import StepsGrid from '../component/workSteps/page'
import { motion } from 'framer-motion';
import { ImageGallery } from '../component/gallery/page'
export default function About() {
    const text1 = "It's so nice to"
    const text2 = " I'm Shariba Thasneem :)"

    return (
        <div className="flex flex-col min-h-screen"> {/* Ensures full viewport height */}
            <div className="flex mb-30 w-[90vw] h-full">
                <div className="flex flex-wrap flex-col p-20 ml-10 w-[60vw] space-y-10"> {/* Use space-y for vertical spacing */}
                    {/* Paragraph section */}
                    <motion.div
                        style={{
                            fontFamily: "Playwrite VN",
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl font-mono text-[#671229]"
                    >
                        <p>
                            {text1}  <br />meet you,<br />{text2}
                        </p>
                    </motion.div>

                    {/* Buttons section */}
                    <motion.div className="flex space-x-5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}> {/* Horizontal spacing for buttons */}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#671229] font-sans text-white px-4 py-2 rounded-md pr-8 pl-8"
                        >
                            Resume
                        </a>

                        <button
                            className="bg-white border-2 font-sans border-[#671229] text-[#262626] pr-8 pl-8 px-4 py-2 rounded-md"
                            onClick={() => window.location.href = 'https://www.linkedin.com/in/shariba-thasneem-0185781b1/'}
                        >
                            Linkedin
                        </button>

                    </motion.div>
                </div>

                {/* Image collage section */}
                <motion.div className="relative p-8 max-w-4xl h-auto mt-8 w-[50vw]"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    // whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}>
                    <img
                        src="m2.png"
                        alt="Hero Image"
                        className="absolute top-0 left-0 w-48 h-auto bg-cover bg-center"
                    />
                    <img
                        src="/me1.png"
                        alt="Hero Image"
                        className="absolute top-1/4 right-14 w-64 h-auto bg-cover bg-center"
                    />
                    <img
                        src="/m4.png"
                        alt="Hero Image"
                        className="absolute bottom-0 left-1/4 w-40 h-auto bg-cover bg-center"
                    />
                </motion.div>
            </div>
            <WhoamI />
            <StepsGrid />
            <ImageGallery />
        </div>

    );
}
