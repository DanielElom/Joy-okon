"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaFileAlt, FaUser, FaImage, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Project Data
const projects = [
    { id: 1, title: "Booking Project", type: "Website", img: "/img/projects/proj.jpeg", client: "Envato", lang: "HTML, CSS, JS", preview: "www.envato.com" },
    { id: 2, title: "Android Project", type: "App", img: "/img/projects/port1.jpeg", client: "Google", lang: "Java, Kotlin", preview: "www.google.com" },
    { id: 3, title: "Dashboard Project", type: "Website", img: "/img/projects/port2.jpeg", client: "Facebook", lang: "React, Node", preview: "www.facebook.com" },
    { id: 4, title: "Wallet Project", type: "App", img: "/img/projects/port3.jpeg", client: "PayPal", lang: "Swift", preview: "www.paypal.com" },
    { id: 5, title: "Website Project", type: "Website", img: "/img/projects/port4.jpeg", client: "Twitter", lang: "Vue, Laravel", preview: "www.twitter.com" },
    { id: 6, title: "Opencv Project", type: "AI", img: "/img/projects/port5.jpeg", client: "OpenAI", lang: "Python", preview: "www.openai.com" },
];

export default function Portfolio() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const selectedProject = projects.find((p) => p.id === selectedId);

    const handleNext = () => {
        if (!selectedId) return;
        const nextId = selectedId === projects.length ? 1 : selectedId + 1;
        setSelectedId(nextId);
    };

    const handlePrev = () => {
        if (!selectedId) return;
        const prevId = selectedId === 1 ? projects.length : selectedId - 1;
        setSelectedId(prevId);
    };

    return (
        <main className="min-h-screen w-full bg-[#111] pb-20 overflow-y-auto">
            <div className="container mx-auto px-5 lg:px-20 py-12 lg:py-20 text-white">

                {/* Title */}
                <div className="relative text-center mb-16 lg:mb-20">
                    <h1 className="text-[35px] sm:text-[56px] font-black uppercase m-0 relative z-10">
                        My <span className="text-primary">Portfolio</span>
                    </h1>
                    <span className="text-[60px] sm:text-[110px] absolute font-extrabold uppercase text-[#252525]/40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-0 tracking-[10px] hidden sm:block">
                        Works
                    </span>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            layoutId={`project-${project.id}`}
                            key={project.id}
                            onClick={() => setSelectedId(project.id)}
                            className="cursor-pointer group relative rounded-lg overflow-hidden bg-[#252525]"
                        >
                            <div className="aspect-[4/3] relative">
                                {/* Fallback image logic if file missing? Next/Image handles it usually */}
                                <Image src={project.img} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <h3 className="text-xl uppercase font-bold tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-white">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal Overlay */}
                <AnimatePresence>
                    {selectedId && selectedProject && (
                        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                            />

                            {/* Modal Content */}
                            <motion.div
                                layoutId={`project-${selectedId}`}
                                className="bg-[#252525] w-full max-w-4xl rounded-[10px] overflow-hidden relative z-10 text-white shadow-2xl"
                            >
                                {/* Close Button */}
                                <button onClick={() => setSelectedId(null)} className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                                    <FaTimes />
                                </button>

                                {/* Content Grid */}
                                <div className="grid grid-cols-1 lg:grid-cols-2">
                                    {/* Details */}
                                    <div className="p-8 lg:p-10 order-2 lg:order-1">
                                        <h2 className="text-[30px] font-bold uppercase text-primary mb-6">{selectedProject.title}</h2>

                                        <div className="space-y-4 mb-8">
                                            <div className="flex items-start gap-3">
                                                <FaFileAlt className="mt-1 text-primary" />
                                                <div>
                                                    <span className="block text-white/50 text-[13px] uppercase">Project :</span>
                                                    <span className="font-semibold">{selectedProject.type}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <FaUser className="mt-1 text-primary" />
                                                <div>
                                                    <span className="block text-white/50 text-[13px] uppercase">Client :</span>
                                                    <span className="font-semibold">{selectedProject.client}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <FaFileAlt className="mt-1 text-primary" />
                                                <div>
                                                    <span className="block text-white/50 text-[13px] uppercase">Lang :</span>
                                                    <span className="font-semibold">{selectedProject.lang}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <FaImage className="mt-1 text-primary" />
                                                <div>
                                                    <span className="block text-white/50 text-[13px] uppercase">Preview :</span>
                                                    <a href={`http://${selectedProject.preview}`} target="_blank" className="font-semibold hover:text-primary underline">{selectedProject.preview}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image */}
                                    <div className="relative h-[300px] lg:h-auto order-1 lg:order-2">
                                        <Image src={selectedProject.img} alt={selectedProject.title} fill className="object-cover" />
                                    </div>
                                </div>

                                {/* Inner Navigation */}
                                <button onClick={(e) => { e.stopPropagation(); handlePrev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                                    <FaChevronLeft />
                                </button>

                                <button onClick={(e) => { e.stopPropagation(); handleNext(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                                    <FaChevronRight />
                                </button>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

            </div>
        </main>
    );
}
