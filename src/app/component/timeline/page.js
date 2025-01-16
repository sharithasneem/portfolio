'use client';
import Image from 'next/image';
import React from 'react';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import sjc from "../../../../public/sjcbengaluru.jpg";
import coursera from "../../../../public/coursera.jpg";
import citriot from "../../../../public/citriot.webp";
import gomo from "../../../../public/gomo.png";

const timelineData = [
    {
        title: "BSc in Mathematics, Electronics, and Computer Science",
        date: "2018 - 2021",
        img: sjc,
        place: "St.Joseph's College",
        description: "Developed a strong foundation in mathematical principles, electronic systems, and computer science concepts. Built a solid base for advanced studies in computer Science.",
    },
    {
        title: "MSc in Computer Science",
        img: sjc,
        date: "2021 - 2023",
        place: "St.Joseph's College",
        description: "Covered fundamental concepts and gained a basic understanding of AI models, DBMS, Java, project management, image processing, and other core subjects. Midway through my studies, I shifted my focus from becoming a professor to pursuing a career as a full-stack developer. I began with front-end development and UX design, building small projects independently, and set a clear goal to establish myself as a full-stack developer.",
    },
    {
        title: "Google UX Design Professional Certificate",
        img: coursera,
        date: "Jun 2023 - Oct 2023",
        place: "Issued by Google",
        description: "Specialized in UI/UX design by enrolling in a dedicated course to build a strong foundation, as I was new to the field.",
    },
    {
        title: "UX Designer Intern",
        img: gomo,
        date: "Jan 2023 - Apr 2023",
        place: "Gomobites LLP – remote",
        description: "Actively contributed to iterative design and redesign processes, enhancing user interfaces to improve overall user experiences. Translated designs into functional code using JavaScript while collaborating with cross-functional teams to ensure seamless implementation.",
    },
    {
        title: "Full Stack Developer",
        img: citriot,
        date: "Nov 2023 - Oct 2024",
        place: "Citroit Solutions – Bengaluru, India",
        description: "Specialized in MERN stack development, focusing on creating mobile applications with React Native (Expo) and web applications using React.js. Led the end-to-end development of projects, emphasizing functionality and seamless user experiences. Utilized UX design expertise to design intuitive, user-friendly interfaces while providing ongoing maintenance and improvements for existing products. Actively contributed to troubleshooting and resolving issues, including identifying and fixing bugs in web applications.",
    },
];

export default function Timeline() {
    return (
        <div className="text-[#262626] py-10 sm:py-20 px-4 sm:px-6 font-sans flex flex-col items-center">
            <h1 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">My Journey</h1>
            <div className="relative w-full max-w-3xl">
                {/* Timeline Line behind the divs */}
                <div className="absolute w-[2px] sm:w-[2px] bg-[#262626] h-full left-1/2 transform -translate-x-1/2 z-0"></div>
                {timelineData.map((item, index) => (
                    <TimelineCard key={index} item={item} isRightAligned={index % 2 === 0} />
                ))}
            </div>
        </div>
    );
}

function TimelineCard({ item, isRightAligned }) {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { margin: "-50px", once: true });

    return (
        <motion.div
            className={`mb-6 sm:mb-8 flex ${isRightAligned ? "flex-row-reverse" : "flex-row"} items-center w-full relative z-10`}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            ref={cardRef}
        >
            {/* Card Section */}
            <div className="bg-[#FEE9EE] rounded-lg shadow-lg p-4 sm:p-6 max-w-sm sm:max-w-md w-full">
                <h2 className="text-base sm:text-lg font-bold text-[#262626]">{item.title}</h2>
                <p className="text-xs sm:text-sm text-[#262626]">{item.place}</p>
                <p className="text-xs sm:text-sm text-[#262626]">{item.date}</p>
                <p className="text-[#262626] mt-2 text-xs sm:text-sm">{item.description}</p>
            </div>

            {/* Image Section */}
            <div
                className={`w-16 sm:w-20 rounded-full border-4 p-1 border-[#671229] border-transparent h-16 sm:h-16 ${isRightAligned ? "mr-6 sm:mr-0" : "ml-6 sm:ml-0"} flex justify-center items-center`}
            >
                <Image
                    src={item.img}
                    alt={`${item.title} icon`}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-full"
                />
            </div>


        </motion.div>
    );
}
