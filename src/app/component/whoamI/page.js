// components/WhoAmI.js
'use client'
import { motion } from "framer-motion";

export default function WhoAmI() {
    const para1 = "Growing up, I was always passionate about art and creativity. My journey began with dreams of becoming a lecturer, which led me to pursue a Master's degree in Computer Science. But along the way, something unexpected happened—I discovered a deep love for building user-centric applications that make a difference in people’s daily lives. The process of creating something tangible, starting from an idea and bringing it to life through design and development, fascinated me."
    const para2 = "As I delved deeper into the world of technology, I stumbled upon UX design—a revelation that changed everything for me.It combined my artistic sensibilities with my technical skills, allowing me to craft applications that not only function seamlessly but also resonate with the users.I found immense joy in designing intuitive interfaces, writing efficient code, and maintaining applications to ensure they continue to serve their purpose."
    const para3 = "What I love most is problem - solving.Breaking down a complex challenge into smaller, manageable parts and then piecing together a solution is incredibly satisfying.It’s like solving a puzzle, where every step brings me closer to clarity and success.This passion drives me to keep learning, experimenting, and pushing boundaries in both design and development."
    const para4 = "For me, technology is more than just a career—it’s a canvas where creativity and logic come together to solve real - world problems and create impactful experiences."

    return (
        <div className="flex flex-col items-start justify-start p-8 min-h-screen mt-36 font-sans ">
            {/* Heading */}
            <motion.h1
                className="text-xl md:text-2xl text-gray-800 mb-16 mt-28"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >

                Who am I?
            </motion.h1>

            {/* Paragraphs */}
            <motion.p
                className="text-xl md:text-2xl  text-gray-600 my-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
            >
                {para1}
            </motion.p>
            <motion.p
                className="text-xl md:text-2xl  text-gray-600 my-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
            >
                {para2}
            </motion.p>
            <motion.p
                className="text-xl md:text-2xl  text-gray-600 my-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                viewport={{ once: true }}
            >
                {para3}
            </motion.p>
            <motion.p
                className="text-xl md:text-2xl  text-gray-600 my-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                viewport={{ once: true }}
            >
                {para4}
            </motion.p>
        </div>
    );
}
