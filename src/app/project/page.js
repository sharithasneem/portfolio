'use client'; // Ensure framer-motion works in a Next.js client component
import { motion } from 'framer-motion';
import Link from 'next/link'; // Import the Link component

export default function Project() {
    const projects = [
        {
            id: 1,
            title: "Oneness",
            description: "The Oneness App is designed to help users find nearby mosques and connect with mosque activities.",
            image: "/oneness.png", // Replace with your image path
            link: "/projectDetails", // Add the link for navigation
        },
        {
            id: 2,
            title: "Dashboard",
            description: "The app provides a user interface for monitoring, business, and analytics purposes.",
            image: "/dashboard.png", // Replace with your image path
            link: "/project-2",
        },
        {
            id: 3,
            title: "Drivers App",
            description: "It serves as a tool for drivers, offering features like route navigation, tracking, and other driving-related functionalities.",
            image: "/driver.png", // Replace with your image path
            link: "/project-3",
        },
        {
            id: 4,
            title: "Face Recognition",
            description: "The app is developed for facial recognition for security or identification purposes.",
            image: "/faceRe.png", // Replace with your image path
            link: "/project-4",
        },
        {
            id: 5,
            title: "weone",
            description: "The WeOne app is the first version of an app designed to connect users, providing features like finding nearby mosques, updating prayer times, making announcements, and other related functionalities. ",
            image: "/weone.png", // Replace with your image path
            link: "/project-5",
        },
        {
            id: 6,
            title: "Digital Marketing",
            description: "This is a simple static project designed for a digital marketing agency, showcasing basic features relevant to their services and operations,but it is not a live project.",
            image: "/digitalApp.png", // Replace with your image path
            link: "/project-5",
        },
        {
            id: 7,
            title: "AQI",
            description: "The Air Quality Monitoring App is a project where I was only involved in the design aspect, not in development, unlike my other projects.",
            image: "/aqi.png", // Replace with your image path
            link: "/project-5",
        },
        {
            id: 8,
            title: "Digital Visiting card",
            description: "The Digital Visiting Card Clicktran is a project where I primarily contributed to the design and front-end, offering a digital solution to replace physical cards, eliminating the need to carry or worry about forgetting them.",
            image: "/visiting.png", // Replace with your image path
            link: "/project-5",
        },
    ];

    return (
        <div className="p-4 sm:p-8 md:p-16 font-sans flex justify-center  min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full"> {/* Grid layout */}
                {projects.map((project) => (
                    <div key={project.id} className="flex flex-col items-start mb-10"> {/* Align to start */}

                        <motion.div
                            className="relative w-full h-auto bg-gray-200 rounded-xl shadow-md overflow-hidden cursor-pointer"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.2)",
                                transition: { duration: 0.3, ease: "easeInOut" },
                            }}
                        >
                            <motion.img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover rounded-xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.3, ease: "easeInOut" },
                                }}
                            />
                        </motion.div>

                        {/* Text Below the Div */}
                        <div className="mt-2"> {/* Adjust margin-top for spacing */}
                            <h3 className="font-bold text-lg md:text-xl">{project.title}</h3>
                            <p className="text-gray-600 text-sm md:text-base">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
