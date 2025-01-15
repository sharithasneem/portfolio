'use client'
import { motion, useScroll, useTransform } from "framer-motion";

const SlidingText = ({ text, direction = "left" }) => {
    const { scrollYProgress } = useScroll(); // Track scroll progress
    const x = useTransform(
        scrollYProgress,
        [0, 1],
        direction === "left" ? ["100%", "-60%"] : ["-100%", "40%"]
    ); // Adjust direction based on prop

    return (
        <div className="overflow-hidden w-full">
            <motion.div
                className="text-7xl font-bold text-white whitespace-nowrap font-mono"
                style={{ x }} // Bind horizontal motion to scroll
            >
                {text}
            </motion.div>
        </div>
    );
};

export default SlidingText;
