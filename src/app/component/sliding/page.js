import { motion, useScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";

const SlidingText = ({ text, direction = "left" }) => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(
        scrollYProgress,
        [0, 1],
        direction === "left" ? ["100%", "-60%"] : ["-100%", "40%"]
    );

    return (
        <div className="overflow-hidden w-full">
            <motion.div
                className="text-7xl font-bold text-white whitespace-nowrap font-mono"
                style={{ x }} // Apply the motion to the x-axis
            >
                {text}
            </motion.div>
        </div>
    );
};

// PropTypes for validation
SlidingText.propTypes = {
    text: PropTypes.string.isRequired,
    direction: PropTypes.oneOf(["left", "right"]).isRequired,  // Ensure direction is either 'left' or 'right'
};

export default SlidingText;
