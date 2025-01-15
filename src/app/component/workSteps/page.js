// components/StepsGrid.js
'use client'
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

export default function StepsGrid() {
    const steps = [
        {
            header: "Step 1",
            subheader: "Understanding Requirements",
            content: "I begin by collecting detailed requirements from the client, ensuring I understand every aspect of their vision. This includes asking questions, clarifying objectives, and noting even the smallest details to avoid miscommunication later."
        },
        {
            header: "Step 2",
            subheader: "Planning and Structuring",
            content: "With the requirements in hand, I move on to planning the code structure, focusing on scalability and maintainability. This step is crucial to ensure the project is built on a strong foundation that can adapt to future needs."
        },
        {
            header: "Step 3",
            subheader: "Wireframing and Prototyping",
            content: "I start with a raw wireframe on paper to outline the application’s core layout and flow. Then, I create a detailed digital prototype in Figma and share it with the team and client for feedback. After incorporating changes, I finalize the prototype to ensure alignment before development begins."
        },
        {
            header: "Step 4",
            subheader: "Frontend Development",
            content: "With the approved prototype, I start building the frontend. My focus is on creating a seamless, user-friendly interface that matches the design and delivers a smooth experience across devices."
        },
        {
            header: "Step 5",
            subheader: "Backend Development",
            content: "Once the frontend is in place, I proceed with backend development, ensuring the application is robust, efficient, and integrates well with the frontend. This includes setting up databases, APIs, and any necessary server-side logic."
        },
        {
            header: "Step 6",
            subheader: "Testing and Iteration",
            content: "After development, I rigorously test the application to identify and fix any issues. This step involves both functionality and usability testing to ensure the final product meets client expectations and performs flawlessly."
        }
    ];

    // Define unique border-radius styles for each div
    const borderRadiusStyles = [
        "rounded-tr-3xl rounded-bl-3xl", // Top-right rounded
        "rounded-tl-3xl rounded-br-3xl", // Top-left rounded
        "rounded-3xl", // Bottom-left rounded
        "rounded-3xl", // Bottom-left rounded
        "rounded-tl-3xl rounded-br-3xl", // Top-left rounded
        "rounded-tr-3xl rounded-bl-3xl", // Top-right rounded
    ];

    return (
        <div className="m-16 font-sans">
            <motion.h1
                className="text-2xl  text-gray-800 mb-16 mt-28 p-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >

                My Work Process
            </motion.h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 p-8 font-sans">

                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        className={`p-7 ${borderRadiusStyles[index % borderRadiusStyles.length]}`}
                        style={{ backgroundColor: "#FEE9EE" }}
                        initial={{ opacity: 0, y: 20 }} // Start with invisible and shifted
                        whileInView={{ opacity: 1, y: 0 }} // Animate to visible and normal position when in view
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-xl font-semibold  text-[#262626] mb-2">
                            {step.header}
                        </h2>
                        <h3 className="text-lg font-medium text-gray-800 mb-2">
                            {step.subheader}
                        </h3>
                        <p className="text-base text-gray-700">
                            {step.content}
                        </p>
                    </motion.div>
                ))}
            </div>
            <motion.a
                href="https://www.instagram.com/_merged_colours?igsh=ZXV0czlpN2wzYjVu"
                className="text-2xl text-gray-800 mb-16 mt-28 p-8 flex flex-row underline"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                When I’m not building Projects
                <GoArrowUpRight size={20} className='m-2' />
            </motion.a>
        </div>

    );
}
