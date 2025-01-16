'use client'; // Ensure framer-motion works in a Next.js client component
import { motion } from 'framer-motion';
import Link from 'next/link'; // Import the Link component

export default function Project() {
    const projects = [
        {
            id: 1,
            title: "Oneness",
            description: "Find the near by Mosque ",
            image: "/oneness.png", // Replace with your image path
            link: "/projectDetails", // Add the link for navigation
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
    ];

    return (
        <div className="p-4 sm:p-8 md:p-16 font-sans flex justify-center  min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full"> {/* Grid layout */}
                {projects.map((project) => (
                    <div key={project.id} className="flex flex-col items-start mb-10"> {/* Align to start */}
                        <Link
                            href={{
                                pathname: "/projectDetails", // Navigate to the same screen
                                query: {
                                    id: project.id, // Pass project details
                                },
                            }}
                        >
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
                        </Link>

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
