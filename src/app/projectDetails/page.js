'use client'; // Ensure compatibility with Next.js client-side rendering
import React from 'react';

export default function BaseRowComponent() {
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
        <div>
            <div className='w-full h-[80vh] flex justify-center '>

            </div>
            <div className='w-full h-[50vh] flex justify-center bg-[#671229] '>

            </div>
            <div className='w-full h-[50vh] flex justify-center bg-[#262626] '>

            </div>
        </div>

    );
}
