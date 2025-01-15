'use client'
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SlidingText from '../sliding/page';
import reatnative from "../../../../public/reactnative.png";
import ex from "../../../../public/ex.png";
import bootstrap from "../../../../public/bootstrap.png";
import figma from "../../../../public/figma.png";
import firebase from "../../../../public/firebase.png";
import github from "../../../../public/github.png";
import git from "../../../../public/git.png";
import html5 from "../../../../public/html5.png";
import javascript from "../../../../public/javascript.png";
import npm from "../../../../public/npm.png";
import canva from "../../../../public/canva.png";
import next from "../../../../public/next.svg";
import tailwind from "../../../../public/tailwind.png";
import node from "../../../../public/nodejs-original.png";
import mdb from "../../../../public/mongodb-plain-wordmark.png";
// import aws from "../../../../public/aws.png";
// import nextjs from "../../../../public/nextjs-original-wordmark.png";
import redis from "../../../../public/redis-plain-wordmark.png";
import css from "../../../../public/css.png";
import python from "../../../../public/python-original.png";
import vs from "../../../../public/vscode-original.png";
import motionimg from "../../../../public/motion.png";
import react from "../../../../public/react.png";



export default function Skills() {
    const footerRef = useRef(null);
    const isInView = useInView(footerRef, { once: true }); // Trigger animation only once when in view
    const tools = [
        { name: "React Native", icon: reatnative },
        { name: "M", icon: mdb },
        { name: "Figma", icon: figma },
        { name: "Node.js", icon: node },
        { name: "JavaScript", icon: javascript },
        { name: "NPM", icon: npm },
        { name: "Tailwind CSS", icon: tailwind },
        { name: "github", icon: github },
        { name: "express", icon: ex },
        { name: "redis", icon: redis },
        { name: "next", icon: next },
        { name: "css", icon: css },
        { name: "html", icon: html5 },
        { name: "bootstrap", icon: bootstrap },
        { name: "firebase", icon: firebase },
        { name: "canva", icon: canva },
        { name: "python", icon: python },
        { name: "git", icon: git },
        { name: "vs", icon: vs },
        { name: "motion", icon: motionimg },
        { name: "react", icon: react },




    ];
    return (
        <motion.div
            className="bg-[#262626] text-white py-6 mt-[20vh] mb-[20vh] h-[125vh] flex flex-col justify-between items-center"
            ref={footerRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            {/* Sliding Text at the Top */}
            <SlidingText text="USER EXPERIENCE / REACT NATIVE / UX DESIGNER / MERN STACK / EXPO / HYBRID MOBILE APP / WEB APP / WEBSITE" direction="right" />

            {/* Responsive Tools Grid */}
            <div className="py-8 w-full flex justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-6 px-6">
                    {tools.map((tool, index) => (
                        <div
                            key={index}
                            className="w-28 aspect-square bg-[rgba(255,255,255,0.1)] rounded-lg shadow-lg flex flex-col items-center justify-center hover:scale-105 hover:rounded-3xl hover:border hover:border-white transition-all duration-300 transform"
                        >
                            {typeof tool.icon === "string" ? (
                                <div className="text-5xl mb-4">{tool.icon}</div>
                            ) : (
                                <img src={tool.icon.src} alt={tool.name} className="w-12 h-12 mb-4" />
                            )}
                        </div>
                    ))}
                </div>
            </div>


            {/* Sliding Text at the Bottom */}
            <SlidingText text="FIGMA / REACT JS / EXPO / HYBRID MOBILE APP / WEB APP / WEBSITE / FIGMA / REACT JS / EXPO / HYBRID MOBILE APP / WEB APP / WEBSITE" direction="right" />
        </motion.div>
    );
}
