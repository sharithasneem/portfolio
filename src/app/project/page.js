'use client'; // Ensure framer-motion works in a Next.js client component
import { motion } from 'framer-motion';
import Link from 'next/link'; // Import the Link component
import { useState } from 'react'; // Import useState for hover state management

export default function Project() {
    const projects = [
        {
            id: 1,
            title: "Oneness",
            description: "Find the near by Mosque ",
            image: "/oneness.png", // Replace with your image path
            link: "/project-1", // Add the link for navigation
        },
        {
            id: 2,
            title: "Dashboard",
            description: "mobile version of Dashboard",
            image: "/dashboard.png", // Replace with your image path
            link: "/project-2",
        },
        {
            id: 3,
            title: "Drivers App",
            description: "updated the status of the trip and other details",
            image: "/driver.png", // Replace with your image path
            link: "/project-3",
        },
        {
            id: 4,
            title: "Face Recognition",
            description: "Brief description of Project 4.",
            image: "/faceRe.png", // Replace with your image path
            link: "/project-4",
        },
        {
            id: 5,
            title: "weone",
            description: "Brief description of Project 5.",
            image: "/weone.png", // Replace with your image path
            link: "/project-5",
        },
        // {
        //     id: 5,
        //     title: "weone",
        //     description: "Brief description of Project 5.",
        //     image: "/weone.png", // Replace with your image path
        //     link: "/project-5",
        // },
    ];

    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className="p-16 font-sans flex justify-center items-center min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10"> {/* Use a grid layout */}
                {projects.map((project) => (
                    <div key={project.id} className="flex flex-col items-start mb-20"> {/* Align to start */}
                        <Link href={project.link}>
                            <motion.div
                                className="relative w-full h-[45vh] bg-gray-200 rounded-xl shadow-md overflow-hidden cursor-pointer"
                                initial={{ opacity: 0, y: 50 }} // Initial hidden state
                                whileInView={{ opacity: 1, y: 0 }} // Animate when in view
                                transition={{ duration: 0.6, ease: "easeInOut" }} // Animation properties
                                viewport={{ once: true }} // Trigger animation once when in view
                                whileHover={{
                                    scale: 1.05, // Slightly enlarge the card
                                    boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.2)", // Add shadow on hover
                                    transition: { duration: 0.3, ease: "easeInOut" }, // Smooth hover transition
                                }}
                                onMouseEnter={() => setHoveredCard(project.id)} // Set the hovered card
                                onMouseLeave={() => setHoveredCard(null)} // Clear the hovered card
                            >
                                {/* Image Section */}
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover rounded-xl"
                                    initial={{ opacity: 0 }} // Start with opacity 0
                                    animate={{ opacity: 1 }} // Animate to opacity 1
                                    transition={{ duration: 1.5, ease: "easeInOut" }} // Smooth transition
                                    whileHover={{
                                        scale: 1.1, // Slight zoom-in effect for the image
                                        transition: { duration: 0.3, ease: "easeInOut" },
                                    }}
                                />
                                {/* Hover Button */}
                                {/* {hoveredCard === project.id && (
                                    <motion.div
                                        className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-3xl"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <button
                                            className="px-6 py-3 bg-white bg-opacity-30 text-white font-bold rounded-lg shadow-lg hover:bg-opacity-50 transition"
                                        >
                                            View More
                                        </button>
                                    </motion.div>
                                )} */}
                            </motion.div>
                        </Link>

                        {/* Text Below the Div */}
                        <div className="mt-2"> {/* Adjust margin-top for spacing */}
                            <h3 className="font-bold text-xl">{project.title}</h3>
                            <p className="text-gray-600">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
